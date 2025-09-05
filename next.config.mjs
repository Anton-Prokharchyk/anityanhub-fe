/** @type {import('next').NextConfig} */

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // adding SCSS
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};

export default nextConfig;

// NEXT JS config file
// const path = require('path');

// const nextConfig = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//webpack(config) {
//     // Grab the existing rule that handles SVG imports
//     const fileLoaderRule = config.module.rules.find((rule) =>
//         rule.test?.test?.('.svg')
//     );
//
//     config.module.rules.push(
//         // Reapply the existing rule, but only for svg imports ending in ?url
//         {
//           ...fileLoaderRule,
//           test: /\.svg$/i,
//           resourceQuery: /url/, // *.svg?url
//         },
//         // Convert all other *.svg imports to React components
//         {
//           test: /\.svg$/i,
//           issuer: /\.[jt]sx?$/,
//           resourceQuery: { not: /url/ }, // exclude if *.svg?url
//           use: ['@svgr/webpack'],
//         }
//     );
//
//     // Modify the file loader rule to ignore *.svg, since we have it handled now.
//     fileLoaderRule.exclude = /\.svg$/i;
//
//     return config;
//   },
// };
//
// module.exports = nextConfig;
