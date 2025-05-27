// storage-adapter-import-placeholder
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
import dotenv from 'dotenv';
import Exams from './collections/Exam'
import Applications from './collections/Application'
dotenv.config();
  

export default buildConfig({
  serverURL: 'http://localhost:3000',
  // serverURL: 'https://cms-coral-beta.vercel.app/',
  cors: "*",
    csrf: [
  'https://cap-sell.vercel.app',
  'https://cms-coral-beta.vercel.app'
],
  // cors: ['http://localhost:3001', "https://cap-sell.vercel.app"],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Exams, Applications],
   plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
      url: process.env.DATABASE_URI || '', 
  }),
  sharp,
})

