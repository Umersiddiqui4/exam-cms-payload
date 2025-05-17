import withPayload from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: false,         // ✅ Required for Payload file uploads
    externalResolver: true,    // ✅ Ensures Payload handles API routes
  },
  images: {
    domains: ['res.cloudinary.com'],  // ✅ if you're using Cloudinary
  },
  reactStrictMode: true,
};

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
});
