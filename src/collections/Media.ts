import { CollectionConfig } from 'payload';
// import { uploadToCloudinary } from '../utils/cloudinary';
// import type { UploadApiResponse } from 'cloudinary';

export const Media: CollectionConfig = {
  slug: 'media',
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'public_id',
      type: 'text',
    },
  ],
  // hooks: {
  //   beforeChange: [
  //     async ({ data, req }:any) => {
  //       const file = req.files?.file as {
  //         data: Buffer;
  //         name: string;
  //         mimetype: string;
  //       };

  //       if (file && file.data) {
  //         const filename = `media_${Date.now()}`;

  //         const result: any = await uploadToCloudinary(file.data, filename);

  //         data.url = result.secure_url;
  //         data.public_id = result.public_id;

  //         delete data.file; // optional: prevent storing locally
  //       }

  //       return data.url;
  //     },
  //   ],
  // },
};
