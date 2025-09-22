// src/components/SEOMeta.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOMeta: React.FC<SEOMetaProps> = ({
  title = 'Kini Softwares - Premium IT Solutions & Development Services',
  description = 'Leading IT solutions company providing website development, mobile apps, CRM systems, custom software, and hosting services, Kini Softwares.',
  keywords = 'Top IT solutions company,best IT solutions company, web development, mobile apps, CRM systems, custom software, hosting services, IT solutions, Kini Softwares, Ashwet Kini',
  image = '/kinisoftwareslogo.png',
  url = 'https://ashwetkini.github.io/kinisoftwares.github.io/',
  type = 'website',
  siteName = 'Kini Softwares',
  author = 'Ashwet Kini',
  publishedTime,
  modifiedTime
}) => {
  const baseUrl = 'https://ashwetkini.github.io/kinisoftwares.github.io';
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@ashwetkini" />

      {/* Article Meta Tags (for blog posts/articles) */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content={siteName} />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOMeta;
