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
      admin: {
        condition: (data: any) => !data?.imageUrl,
      },
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Image URL (optional)',
      admin: {
        description: 'Select an image from the media library or provide a URL.',
        condition: (data: any) => !data?.image,
      },
      validate: (value: any, { siblingData }: any) => {
        // Agar image aur imageUrl dono missing hon, error do
        if (!value && !siblingData?.image) {
          return 'You must provide either an image or an image URL.';
        }
        return true;
      },
    },
  ],
};

export default CapCategory;
