import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = 'https://buildnest.world';

 // Core Pages
 const coreRoutes = [
  '',
  '/about',
  '/services',
  '/pricing',
  '/portfolio',
  '/contact',
  '/software',
  '/privacy-policy',
  '/terms',
 ].map((route) => ({
  url: `${baseUrl}${route}`,
  lastModified: new Date(),
  changeFrequency: 'weekly' as const,
  priority: route === '' ? 1.0 : 0.8,
 }));

 // City Pages
 const cityRoutes = [
  '/website-development-bhiwandi',
  '/web-agency-bhiwandi',
  '/software-company-bhiwandi',
  '/software-agency-mumbai',
  '/website-development-mumbai',
  '/mobile-app-development-mumbai',
  '/app-development-thane',
  '/website-development-navi-mumbai',
  '/website-development-kalyan',
 ].map((route) => ({
  url: `${baseUrl}${route}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.9,
 }));

 // Dark Funnel Pages (Included in sitemap, not in nav)
 const darkFunnelRoutes = [
  '/blog/buildnest-vs-datamatex',
  '/blog/top-10-web-developers-bhiwandi-2026',
  '/blog/cost-of-website-india-2026',
  '/blog/trust-based-website-development-india',
  '/blog/react-vs-wordpress-2026',
  '/blog/why-bhiwandi-businesses-choose-react',
  '/blog/best-software-companies-mumbai-2026',
  '/blog/flutter-vs-react-native-india',
  '/blog/seo-tips-small-business-mumbai',
  '/blog/shopify-development-india-guide',
  '/blog/indian-web-development-industries'
 ].map((route) => ({
  url: `${baseUrl}${route}`,
  lastModified: new Date(),
  changeFrequency: 'weekly' as const,
  priority: 0.7,
 }));

 return [...coreRoutes, ...cityRoutes, ...darkFunnelRoutes];
}
