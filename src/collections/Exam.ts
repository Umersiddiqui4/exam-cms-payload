import { CollectionConfig } from 'payload';

const Exams: CollectionConfig = {
  slug: 'exams',
  access: {
  create: () => true, 
  update: () => true,
  read: () => true,
},
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Exam Name',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      required: true,
    },
    {
      name: 'applicationsDateRange',
      label: 'Applications Date Range',
      type: 'group',
      fields: [
        {
          name: 'from',
          label: 'From',
          type: 'date',
          required: true,
        },
        {
          name: 'to',
          label: 'To',
          type: 'date',
          required: true,
        },
      ],
    },
    {
      name: 'applicationsLimit',
      label: 'Applications Limit',
      type: 'text',
      required: true,
    },
    {
      name: 'waitingLimit',
      label: 'Waiting List Limit',
      type: 'text',
      required: true,
    },
    {
      name: 'slot1DateRange',
      label: 'Slot 1 Date Range',
      type: 'group',
      fields: [
        {
          name: 'from',
          label: 'From',
          type: 'date',
          required: true,
        },
        {
          name: 'to',
          label: 'To',
          type: 'date',
          required: true,
        },
      ],
    },
    {
      name: 'slot2DateRange',
      label: 'Slot 2 Date Range',
      type: 'group',
      fields: [
        {
          name: 'from',
          label: 'From',
          type: 'date',
        },
        {
          name: 'to',
          label: 'To',
          type: 'date',
        },
      ],
    },
    {
      name: 'slot3DateRange',
      label: 'Slot 3 Date Range',
      type: 'group',
      fields: [
        {
          name: 'from',
          label: 'From',
          type: 'date',
        },
        {
          name: 'to',
          label: 'To',
          type: 'date',
        },
      ],
    },
     {
      name: 'formLink',
      label: 'Form Link',
      type: 'text',
      required: false,
    },
    {
      name: 'isBlocked',
      label: 'Blocked',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'receivingApplicationsCount',
      label: 'Applications Received',
      type: 'number',
      defaultValue: 0,
    },
  ],
};

export default Exams;
