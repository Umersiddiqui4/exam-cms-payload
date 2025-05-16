import { CollectionConfig } from "payload";

const CapCategory: CollectionConfig = {
  slug: 'cap-category',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image', // 👇 file/image field (choose one below)
      type: 'upload',
      relationTo: 'media', // 👈 make sure you have a media collection configured
    },
   
  ],
};

export default CapCategory;
