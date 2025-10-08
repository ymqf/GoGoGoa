import { join } from 'path';

const nextConfig = {
  reactStrictMode: true,
  // Next.js 13+ appDir 已经稳定在某些版本，如果你的 Next 版本不需要 experimental 配置，请不要启用它
  // experimental: { appDir: true },
  // 如需自定义构建输出目录或其他设置，可在此处配置
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

