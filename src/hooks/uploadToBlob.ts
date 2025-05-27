import fs from 'fs';
import path from 'path';
// import { put } from '@vercel/blob';
// import type { AfterChangeHook } from '@pay'; // ✅ correct hook type
import { uploadToBlob } from '@/utils/blob';
// import { AfterChangeHook } from 'node_modules/payload/dist/globals/config/types';

export const uploadToBlobHook: any = async ({ doc }:any) => {
  try {
    const filename = doc?.filename;
    if (!filename) return doc;

    const mediaPath = path.resolve(process.cwd(), 'media', filename);
    const fileBuffer = fs.readFileSync(mediaPath);

    const blobUrl = await uploadToBlob(fileBuffer, filename);

    doc.cloudinaryURL = blobUrl;
    return doc;
  } catch (err) {
    console.error('Blob upload error:', err);
    return doc;
  }
};
