import { put } from '@vercel/blob';

export const uploadToBlob = async (buffer: Buffer, filename: string): Promise<string> => {
  const blob = await put(`media/${filename}`, buffer, {
    access: 'public',
  });

  return blob.url;
};
