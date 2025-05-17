import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // apni configs yahan rakho, lekin swcMinify ko mat rakho
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
