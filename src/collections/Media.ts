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
  upload: true,
  hooks: {
    afterChange: [uploadToBlobHook],
  },
  fields: [],
};
