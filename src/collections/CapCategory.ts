import { CollectionConfig } from "payload";
import cloudinary from '../utils/payload.config'
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
    // {
    //   name: 'image', // 👇 file/image field (choose one below)
    //   type: 'upload',
    //   relationTo: 'media', // 👈 make sure you have a media collection configured
    //   required: false, // add this to avoid errors if media is missing
    // },
     {
      name: 'uploadImage',
      type: 'upload',
      relationTo: 'media', // You can remove this if not using media collection
      hooks: {
        beforeChange: [
          async ({ value, originalDoc }) => {
            if (value?.data) {
              const uploaded = await cloudinary.uploader.upload(value.data, {
                folder: 'caps',
              })
              return {
                ...originalDoc,
                imageUrl: uploaded.secure_url,
              }
            }
            return value
          },
        ],
      },
    },
   
  ],
};

export default CapCategory;
