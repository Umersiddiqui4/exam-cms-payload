import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
}
module.exports = {
  swcMinify: false,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
