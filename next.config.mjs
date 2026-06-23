/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: 'export',
  allowedDevOrigins: ['192.168.1.72', 'localhost'],
};

export default nextConfig;