import { buildConfig } from 'payload';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import { Users } from './collections/Users.mjs';
import { Media } from './collections/Media.mjs';
import CapCategory from './collections/CapCategory.mjs';
import Cap from './collections/Cap.mjs';

import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000',

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(__dirname),
    },
  },

  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://cap-sell.vercel.app',
    'https://cms-coral-beta.vercel.app',
  ],

  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://cap-sell.vercel.app',
    'https://cms-coral-beta.vercel.app',
  ],

  cookiePrefix: 'payload',

  secret: process.env.PAYLOAD_SECRET,

  collections: [Users, Media, CapCategory, Cap],

  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),

  editor: lexicalEditor(),

  plugins: [
    payloadCloudPlugin(),
    // Add other plugins here
  ],
});
