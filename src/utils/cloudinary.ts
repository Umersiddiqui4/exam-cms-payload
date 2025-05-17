// @ts-ignore
const cloudinaryAdapter = require('payload-cloudinary');

export const cloudinary = cloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_API_KEY || '',
  apiSecret: process.env.CLOUDINARY_API_SECRET || '',
  folder: 'cap-sell',
});
