/** @type {import('next').NextConfig} */
const nextConfig = {
  turbo: {
    rules: {
      // Nonaktifkan turbopack font handler
      font: false,
    },
  },
  // Atau pakai webpack saja
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
