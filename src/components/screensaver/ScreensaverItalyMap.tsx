"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import mapImage from '../../../public/images/mappa-copertura-zefiro-v3.png';

interface Node {
  id: string;
  name: string;
  x: number; // 0 to 1
  y: number; // 0 to 1
  isMajor?: boolean;
}

// Exactly calibrated to the centroids of cyan (#00CEDB) territory on the actual map
const CYAN_NODES: Record<string, Node> = {
  alpiOvest: { id: 'alpiOvest', name: 'Alpi Occidentali', x: 0.255, y: 0.185 },
  prealpi: { id: 'prealpi', name: 'Prealpi Lombarde', x: 0.368, y: 0.130, isMajor: true },
  dolomiti: { id: 'dolomiti', name: 'Dolomiti / Trentino', x: 0.507, y: 0.096, isMajor: true },
  friuli: { id: 'friuli', name: 'Carnia / Friuli', x: 0.593, y: 0.142 },
  appenninoNord: { id: 'appenninoNord', name: 'Appennino Tosco-Emiliano', x: 0.416, y: 0.319 },
  maremma: { id: 'maremma', name: 'Colline Senesi / Maremma', x: 0.435, y: 0.412, isMajor: true },
  marche: { id: 'marche', name: 'Sibillini / Marche', x: 0.556, y: 0.436 },
  abruzzo: { id: 'abruzzo', name: 'Gran Sasso / Majella', x: 0.625, y: 0.519, isMajor: true },
  campania: { id: 'campania', name: 'Cilento / Appennino Campano', x: 0.705, y: 0.635, isMajor: true },
  gargano: { id: 'gargano', name: 'Gargano / Puglia Rurale', x: 0.795, y: 0.658, isMajor: true },
  basilicata: { id: 'basilicata', name: 'Pollino / Lucania', x: 0.809, y: 0.727 },
  calabria: { id: 'calabria', name: 'Sila / Aspromonte', x: 0.809, y: 0.818, isMajor: true },
  siciliaEst: { id: 'siciliaEst', name: 'Etna / Nebrodi', x: 0.686, y: 0.868, isMajor: true },
  siciliaOvest: { id: 'siciliaOvest', name: 'Madonie / Sicilia Ovest', x: 0.540, y: 0.880 },
  sardegnaNord: { id: 'sardegnaNord', name: 'Gallura / Barbagia', x: 0.225, y: 0.585, isMajor: true },
  sardegnaSud: { id: 'sardegnaSud', name: 'Sulcis / Campidano', x: 0.226, y: 0.688, isMajor: true },
};

// Main continuous national fiber backbone loop across all cyan areas
const MAIN_CIRCUIT: Node[] = [
  CYAN_NODES.alpiOvest,
  CYAN_NODES.prealpi,
  CYAN_NODES.dolomiti,
  CYAN_NODES.friuli,
  CYAN_NODES.marche,
  CYAN_NODES.abruzzo,
  CYAN_NODES.gargano,
  CYAN_NODES.basilicata,
  CYAN_NODES.calabria,
  CYAN_NODES.siciliaEst,
  CYAN_NODES.siciliaOvest,
  CYAN_NODES.campania,
  CYAN_NODES.maremma,
  CYAN_NODES.appenninoNord,
  CYAN_NODES.alpiOvest, // Closes the continuous loop
];

// Sardinia dedicated transmission loop
const SARDINIA_CIRCUIT: Node[] = [
  CYAN_NODES.maremma,
  CYAN_NODES.sardegnaNord,
  CYAN_NODES.sardegnaSud,
  CYAN_NODES.campania,
  CYAN_NODES.maremma,
];

// Helper: Catmull-Rom spline interpolation for silky organic curves
function getSplinePoint(p0: Node, p1: Node, p2: Node, p3: Node, t: number) {
  const t2 = t * t;
  const t3 = t2 * t;

  const v0 = (p2.x - p0.x) * 0.5;
  const v1 = (p3.x - p1.x) * 0.5;
  const x = (2 * p1.x - 2 * p2.x + v0 + v1) * t3 + (-3 * p1.x + 3 * p2.x - 2 * v0 - v1) * t2 + v0 * t + p1.x;

  const w0 = (p2.y - p0.y) * 0.5;
  const w1 = (p3.y - p1.y) * 0.5;
  const y = (2 * p1.y - 2 * p2.y + w0 + w1) * t3 + (-3 * p1.y + 3 * p2.y - 2 * w0 - w1) * t2 + w0 * t + p1.y;

  return { x, y };
}

function buildSmoothCurve(nodes: Node[], samplesPerSegment = 20) {
  const points: { x: number; y: number }[] = [];
  const n = nodes.length;

  for (let i = 0; i < n - 1; i++) {
    const p0 = nodes[(i - 1 + n) % n];
    const p1 = nodes[i];
    const p2 = nodes[(i + 1) % n];
    const p3 = nodes[(i + 2) % n];

    for (let s = 0; s < samplesPerSegment; s++) {
      const t = s / samplesPerSegment;
      points.push(getSplinePoint(p0, p1, p2, p3, t));
    }
  }
  points.push({ x: nodes[n - 1].x, y: nodes[n - 1].y });

  // Calculate cumulative distances
  const distances = [0];
  let totalDist = 0;
  for (let i = 1; i < points.length; i++) {
    const d = Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
    totalDist += d;
    distances.push(totalDist);
  }

  return { points, distances, totalDist };
}

export function ScreensaverItalyMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const mainCurve = buildSmoothCurve(MAIN_CIRCUIT, 24);
    const sardiniaCurve = buildSmoothCurve(SARDINIA_CIRCUIT, 24);

    const getInterpolatedPoint = (curve: ReturnType<typeof buildSmoothCurve>, progressNormalized: number, w: number, h: number) => {
      const wrapped = ((progressNormalized % 1) + 1) % 1;
      const targetDist = wrapped * curve.totalDist;

      let low = 0;
      let high = curve.distances.length - 1;
      while (low <= high) {
        const mid = (low + high) >> 1;
        if (curve.distances[mid] < targetDist) low = mid + 1;
        else high = mid - 1;
      }
      const idx = Math.max(1, low);
      const d0 = curve.distances[idx - 1];
      const d1 = curve.distances[idx];
      const segT = d1 > d0 ? (targetDist - d0) / (d1 - d0) : 0;

      const p0 = curve.points[idx - 1];
      const p1 = curve.points[idx];
      return {
        x: (p0.x + (p1.x - p0.x) * segT) * w,
        y: (p0.y + (p1.y - p0.y) * segT) * h,
      };
    };

    // Render continuous luminous laser energy ribbon with high-speed sparks
    const drawHighSpeedLaserStream = (
      curve: ReturnType<typeof buildSmoothCurve>,
      headProgress: number,
      trailLengthNormalized: number,
      w: number,
      h: number,
      color: string,
      headColor: string,
      lineWidthBase: number
    ) => {
      const sampleCount = 45; // ultra-smooth high-definition trail

      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // 1. Draw glowing fading neon trail
      for (let i = 0; i < sampleCount; i++) {
        const t1 = headProgress - (i / sampleCount) * trailLengthNormalized;
        const t2 = headProgress - ((i + 1) / sampleCount) * trailLengthNormalized;

        const pt1 = getInterpolatedPoint(curve, t1, w, h);
        const pt2 = getInterpolatedPoint(curve, t2, w, h);

        const decay = Math.pow(1 - i / sampleCount, 2.2);
        const lineWidth = decay * lineWidthBase + 0.6;

        ctx.beginPath();
        ctx.moveTo(pt1.x, pt1.y);
        ctx.lineTo(pt2.x, pt2.y);
        ctx.strokeStyle = color;
        ctx.globalAlpha = decay;
        ctx.lineWidth = lineWidth;
        ctx.shadowColor = color;
        ctx.shadowBlur = 12 * decay;
        ctx.stroke();
      }

      // 2. Bright Incandescent Energy Head (with radial corona and white particle spark)
      const headPt = getInterpolatedPoint(curve, headProgress, w, h);

      // Outer Corona
      ctx.beginPath();
      ctx.arc(headPt.x, headPt.y, 6.5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.5;
      ctx.shadowColor = color;
      ctx.shadowBlur = 20;
      ctx.fill();

      // White Hot Center Core
      ctx.beginPath();
      ctx.arc(headPt.x, headPt.y, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = headColor;
      ctx.globalAlpha = 1;
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 16;
      ctx.fill();

      ctx.restore();
    };

    let startTimestamp: number | null = null;

    const render = (now: number) => {
      if (!startTimestamp) startTimestamp = now;
      const elapsed = (now - startTimestamp) / 1000;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // 1. Draw sleek baseline circuit track (glowing faint neon cyan guide)
      ctx.save();
      ctx.strokeStyle = '#00CEDB';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.22;
      ctx.shadowColor = '#00CEDB';
      ctx.shadowBlur = 6;

      // Main smooth curve track
      ctx.beginPath();
      mainCurve.points.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x * w, p.y * h);
        else ctx.lineTo(p.x * w, p.y * h);
      });
      ctx.stroke();

      // Sardinia smooth link track
      ctx.beginPath();
      sardiniaCurve.points.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x * w, p.y * h);
        else ctx.lineTo(p.x * w, p.y * h);
      });
      ctx.stroke();
      ctx.restore();

      // 2. High-Speed Flow Streams (SUPER FAST: 1.4s full circuit completion!)
      const FAST_SPEED_MAIN = 0.65; // ~1.5 seconds per complete national circuit
      const FAST_SPEED_SARDINIA = 0.95;

      // Stream A: Primary high-power laser beam
      const streamA = (elapsed * FAST_SPEED_MAIN) % 1;
      drawHighSpeedLaserStream(mainCurve, streamA, 0.22, w, h, '#00CEDB', '#ffffff', 4.5);

      // Stream B: Secondary chasing laser beam (half-cycle offset)
      const streamB = (elapsed * FAST_SPEED_MAIN + 0.5) % 1;
      drawHighSpeedLaserStream(mainCurve, streamB, 0.18, w, h, '#00E5FF', '#ffffff', 3.8);

      // Stream C: Counter-propagating ultra-fast feedback stream
      const streamC = (1 - (elapsed * FAST_SPEED_MAIN * 0.9) % 1) % 1;
      drawHighSpeedLaserStream(mainCurve, streamC, 0.14, w, h, '#38bdf8', '#cffafe', 3.0);

      // Stream D: Sardinia High-Speed Optical Link
      const streamSardinia = (elapsed * FAST_SPEED_SARDINIA) % 1;
      drawHighSpeedLaserStream(sardiniaCurve, streamSardinia, 0.25, w, h, '#00CEDB', '#ffffff', 4.0);

      // 3. Draw All Cyan Regional Hubs & Antenna Beacons
      Object.values(CYAN_NODES).forEach((node) => {
        const nx = node.x * w;
        const ny = node.y * h;

        ctx.save();
        // Radar pulse ripple
        const pulsePhase = (elapsed * 2.2 + (node.x + node.y) * 5) % 1.5;
        const pulseRadius = (node.isMajor ? 4.5 : 3) + pulsePhase * 10;
        const pulseAlpha = Math.max(0, 1 - pulsePhase / 1.5) * 0.75;

        ctx.beginPath();
        ctx.arc(nx, ny, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = '#00CEDB';
        ctx.globalAlpha = pulseAlpha;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Node Glow Halo
        ctx.beginPath();
        ctx.arc(nx, ny, node.isMajor ? 4.2 : 2.8, 0, Math.PI * 2);
        ctx.fillStyle = '#00CEDB';
        ctx.globalAlpha = 0.6;
        ctx.shadowColor = '#00E5FF';
        ctx.shadowBlur = 12;
        ctx.fill();

        // Node Core White Dot
        ctx.beginPath();
        ctx.arc(nx, ny, node.isMajor ? 2.2 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = 1;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 8;
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient Pulsing Glow Under Map */}
      <div className="absolute w-[85%] h-[85%] bg-[radial-gradient(circle_at_center,rgba(0,206,219,0.38)_0%,rgba(23,85,106,0.22)_50%,transparent_75%)] blur-3xl pointer-events-none animate-pulse"></div>

      {/* Main Map Container */}
      <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px] aspect-[459/544] flex items-center justify-center select-none">
        {/* Base Map Image */}
        <Image
          src={mapImage}
          alt="Mappa Flussi Dati Rete Zefiro Net"
          fill
          priority
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 480px"
          className="object-contain filter drop-shadow-[0_0_40px_rgba(0,206,219,0.5)] contrast-110 brightness-105 pointer-events-none"
        />

        {/* High-Performance 2D Canvas for High-Speed Spline Energy Streams */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        />
      </div>
    </div>
  );
}
