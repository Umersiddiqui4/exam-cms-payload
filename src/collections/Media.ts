import { CollectionConfig } from 'payload';
import { cloudinary } from '../utils/cloudinary';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    adapter: cloudinary,
    mimeTypes: ['image/*'],
  },
  fields: [],
};
