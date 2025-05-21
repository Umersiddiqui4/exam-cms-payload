// import { uploadToBlobHook } from '@/hooks/uploadToBlobHook';

import { uploadToBlobHook } from "@/hooks/uploadToBlob";
import { CollectionConfig } from "payload";

export  const Media: CollectionConfig = {
  slug: 'media',
    access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  upload: {
    disableLocalStorage: false,
  },
  hooks: {
    afterChange: [uploadToBlobHook],
  },
  fields: [
    {
      name: 'cloudinaryURL',
      type: 'text',
    },
  ],
};
