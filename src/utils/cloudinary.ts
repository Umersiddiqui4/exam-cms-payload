// utils/cloudinary.ts

let cloudinaryAdapter: any;

export const cloudinary = (() => {
  if (!cloudinaryAdapter) {
    cloudinaryAdapter = require('payload-cloudinary'); // Safe even for Vercel
  }

  return cloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
    apiKey: process.env.CLOUDINARY_API_KEY || '',
    apiSecret: process.env.CLOUDINARY_API_SECRET || '',
    folder: 'cap-sell', // optional
  });
})();
