import type { NextConfig } from "next";

// Content Security Policy conforme a OWASP Top 10 e standard NIS2
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://zefironet.it;
  font-src 'self' data:;
  connect-src 'self';
  media-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const isProduction = process.env.NODE_ENV === 'production';
const robotsHeaderValue = process.env.NEXT_PUBLIC_ENABLE_INDEXING === 'true'
  ? 'index, follow'
  : 'noindex, nofollow, noarchive, nosnippet';

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  poweredByHeader: false,
  allowedDevOrigins: [
    "localhost:3000",
    "192.168.1.105",
    "192.168.1.105:3000",
    "192.168.1.53",
    "192.168.1.53:3000",
    "192.168.1.*",
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
