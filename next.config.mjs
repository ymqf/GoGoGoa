import { join } from 'path';

const nextConfig = {
  reactStrictMode: true,
  // 启用 appDir（某些 Next 版本要求在 next.config 中显式开启）
  experimental: { appDir: true },
  // 如需自定义构建输出目录或其他设置，可在此处配置
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
