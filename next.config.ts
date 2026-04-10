import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',           // Questo crea i file statici
  images: {
    unoptimized: true,        // Necessario per GitHub Pages
  },
  basePath: '/aegua-finale',   // Nome esatto del tuo repository
  assetPrefix: '/aegua-finale/',
};

export default nextConfig;
