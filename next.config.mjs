/** @type {import('next').NextConfig} */

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
};

export default nextConfig;
