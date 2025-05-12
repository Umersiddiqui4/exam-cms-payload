import { CollectionConfig } from "payload";


const CapCategory: CollectionConfig = {
  slug: 'cap-category',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Image URL (optional)',
      admin: {
        description: 'Select an image from the media library or provide a URL.',
        condition: (data: any) => !data?.image, // Image na ho to show karo
      },
    },
  ],
};

export default CapCategory;
