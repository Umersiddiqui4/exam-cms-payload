// collections/Media.ts
import { CollectionConfig } from 'payload';
import { uploadToCloudinary } from '../utils/cloudinary';

const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  hooks: {
    afterChange: [uploadToCloudinary],
  },
  fields: [
    {
      name: 'cloudinaryURL',
      type: 'text',
    },
  ],
};

export { Media };
