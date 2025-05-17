import { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    disableLocalStorage: true,
    staticDir: 'media', // ignored due to cloudinary
  },
  admin: {
    useAsTitle: 'filename',
  },
  fields: [],
};


