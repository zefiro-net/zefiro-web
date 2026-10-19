import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const robotsHeaderValue = process.env.NEXT_PUBLIC_ENABLE_INDEXING === 'true'
  ? 'index, follow'
  : 'noindex, nofollow, noarchive, nosnippet';

// Abilita upgrade-insecure-requests solo quando è presente una connessione HTTPS sicura o forzatura esplicita
const upgradeInsecure = process.env.NEXT_PUBLIC_ENABLE_HTTPS === 'true'
  ? 'upgrade-insecure-requests;'
  : '';

// Content Security Policy conforme a OWASP Top 10 e standard NIS2 con supporto Three.js, WebGL e WebSockets
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://zefironet.it;
  font-src 'self' data:;
  connect-src 'self' data: blob: ws: wss: https://zefironet.it https://raw.githack.com https://raw.githubusercontent.com;
  worker-src 'self' blob:;
  media-src 'self' data: blob:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  ${upgradeInsecure}
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  poweredByHeader: false,
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "192.168.1.105",
    "192.168.1.105:3000",
    "192.168.1.53",
    "192.168.1.53:3000",
    "192.168.*",
    "10.*",
    "172.*",
    "*.local",
  ],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-Robots-Tag',
            value: robotsHeaderValue,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
