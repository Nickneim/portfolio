import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'development' ? '' : '/portfolio',
  images: {
    unoptimized: true,
  }
};

export default withNextIntl(nextConfig);
