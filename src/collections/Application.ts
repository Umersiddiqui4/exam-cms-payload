import { CollectionConfig } from 'payload';

const Applications: CollectionConfig = {
  slug: 'applications',
  admin: {
    useAsTitle: 'fullName',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'applicantName',
      label: 'Applicant Name',
      type: 'text',
      required: true,
    },
    {
      name: 'examId',
      label: 'Exam',
      type: 'relationship',
      relationTo: 'exams',
      required: true,
    },
    {
      name: 'examName',
      label: 'Exam Name',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Waiting', value: 'waiting' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
      defaultValue: 'pending',
      required: true,
    },
    {
      name: 'date',
      label: 'Submission Date',
      type: 'date',
    },
    {
      name: 'submittedDate',
      label: 'Submitted Date',
      type: 'date',
    },
    {
      name: 'pdfUrl',
      label: 'PDF URL',
      type: 'text',
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },

    // Existing fields (no change below here) ...
    {
      name: 'candidateId',
      label: 'Candidate ID',
      type: 'text',
      required: true,
    },
    {
      name: 'passportUrl',
      label: 'Passport Size Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'fullName',
      label: 'Full name as you want it to appear on the certificate',
      type: 'text',
      required: true,
    },
    {
      name: 'poBox',
      label: 'P.O Box',
      type: 'text',
      required: true,
    },
    {
      name: 'district',
      label: 'District',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      required: true,
    },
    {
      name: 'province',
      label: 'Province',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      required: true,
    },
    {
      name: 'whatsapp',
      label: 'WhatsApp Number',
      type: 'text',
      required: true,
    },
    {
      name: 'emergencyContact',
      label: 'Emergency Contact Number',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'dateOfPassingPart1',
      label: 'Date of Passing Part 1 Exam',
      type: 'text',
      required: true,
    },
    {
      name: 'previousOsceAttempts',
      label: 'No. of Previous OSCE Attempts',
      type: 'text',
      required: true,
    },
    {
      name: 'countryOfExperience',
      label: 'Country of Experience',
      type: 'text',
      required: true,
    },
    {
      name: 'countryOfOrigin',
      label: 'Country of Origin',
      type: 'text',
      required: true,
    },
    {
      name: 'registrationAuthority',
      label: 'Registration Authority',
      type: 'text',
      required: true,
    },
    {
      name: 'registrationNumber',
      label: 'Registration Number',
      type: 'text',
      required: true,
    },
    {
      name: 'dateOfRegistration',
      label: 'Date of Registration',
      type: 'date',
      required: true,
    },
    {
      name: 'preferenceDate1',
      label: 'Preference Date 1',
      type: 'text',
    },
    {
      name: 'preferenceDate2',
      label: 'Preference Date 2',
      type: 'text',
    },
    {
      name: 'preferenceDate3',
      label: 'Preference Date 3',
      type: 'text',
    },
    {
      name: 'part1EmailUrl',
      label: 'Part 1 Exam Passing Email',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'medicalLicenseUrl',
      label: 'Medical License',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'passportBioUrl',
      label: 'Passport Bio Page',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'signatureUrl',
      label: 'Signature',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'agreementName',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'agreementDate',
      label: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'termsAgreed',
      label: 'I agree to the terms and conditions',
      type: 'checkbox',
      required: true,
    },
  ],
};

export default Applications;
