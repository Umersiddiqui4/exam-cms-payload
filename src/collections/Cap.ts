// payload/collections/Cap.ts

import { CollectionConfig } from "payload";
import { colorPickerField } from '@innovixx/payload-color-picker-field'


const Cap: CollectionConfig = {
  slug: 'caps',
  admin: {
    useAsTitle: 'name',
  },
  access: {
       read: () => true,
    create: () => true, // ✅ This line is missing or required
    update: () => true,
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'color',
      type: 'text',
      required: true,
    },
    {
      name: 'Value',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'colors',
    //   type: 'text',
    //   label: 'Available Colors',
    //   fields: [
        
    //     colorPickerField({
    //       name: 'value',
    //       label: 'text',
    //       required: true,
    //       admin: {
    //         position: 'sidebar',
    //         description: 'Pick a color',
    //       },
    //     }),
    //   ],
    // },
    {
      name: 'material',
      type: 'text',
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'media',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'cap-category',
      required: true,
    },
    {
      name: 'inStock',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
};

export default Cap;
