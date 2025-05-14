"use client"

import { CollectionConfig } from "payload";



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
      name: 'colors',
      type: 'array',
      label: 'Available Colors',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
       
      ],
    },
    {
      name: 'material',
      type: 'text',
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'text',
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
