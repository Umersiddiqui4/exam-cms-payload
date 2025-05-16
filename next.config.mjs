import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  // your other config here
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
