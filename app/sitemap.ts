import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://21-do-husk.netlify.app',
      lastModified: new Date(),
    },
  ];
}