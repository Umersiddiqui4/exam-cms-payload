// collections/Media.ts
import { uploadToCloudinary } from '@/hooks/uploadToCloudinary';
import { CollectionConfig } from 'payload';


const Media: CollectionConfig = {
  slug: 'media',
  upload:{
    disableLocalStorage: true,
  },
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
