// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

// Define  application routes
const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/portfolio', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/web-development', changefreq: 'monthly', priority: '0.7' },
  { path: '/mobile-development', changefreq: 'monthly', priority: '0.7' },
  { path: '/seo-services', changefreq: 'monthly', priority: '0.7' },
  { path: '/hosting-services', changefreq: 'monthly', priority: '0.6' },
];

//  website's base URL
const baseUrl = 'https://ashwetkini.github.io/kinisoftwares.github.io';

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `
    <url>
        <loc>${baseUrl}${route.path}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`).join('')}
</urlset>`;

  // Write to public directory
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

# Block crawling of development and build files
Disallow: /src/
Disallow: /node_modules/
Disallow: /dist/
Disallow: /.git/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Additional directives for common crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Crawl delay (optional)
Crawl-delay: 1`;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
  console.log('✅ robots.txt generated successfully at public/robots.txt');
}

// Generate both files
generateSitemap();
generateRobotsTxt();

console.log('\n🎉 SEO files generated successfully!');
console.log('📁 Files created in public/ directory:');
console.log('   - sitemap.xml');
console.log('   - robots.txt');