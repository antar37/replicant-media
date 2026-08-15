const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  allowedDevOrigins: ["100.93.0.30"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

module.exports = nextConfig;
