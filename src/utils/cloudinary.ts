// utils/cloudinary.ts

// @ts-ignore
const { CloudinaryAdapter } = require('payload-cloudinary/dist/adapter');

export const cloudinary = CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_API_KEY || '',
  apiSecret: process.env.CLOUDINARY_API_SECRET || '',
  folder: 'cap-sell',
});
