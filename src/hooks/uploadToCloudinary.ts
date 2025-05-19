

// hooks/uploadToCloudinary.ts
import fs from 'fs'
import path from 'path'
import { v2 as cloudinary } from 'cloudinary';

export const uploadToCloudinary = async ({ doc }: any) => {
  if (!doc.filename) return doc;

  const filePath = path.resolve(__dirname, `../../media/${doc.filename}`)

  const result: any = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filePath, {
      resource_type: 'auto',
      public_id: doc.filename,
    }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // Delete local file after upload
  fs.unlinkSync(filePath);

  return {
    ...doc,
    cloudinaryURL: result.secure_url,
  };
};
