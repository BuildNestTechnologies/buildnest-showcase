import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buildnest.world';
  const now = new Date();

  // Core Pages – highest priority
  const coreRoutes = [
    { route: '', priority: 1.0 },
    { route: '/about', priority: 0.85 },
    { route: '/services', priority: 0.9 },
    { route: '/pricing', priority: 0.9 },
    { route: '/portfolio', priority: 0.85 },
    { route: '/contact', priority: 0.85 },
    { route: '/software', priority: 0.85 },
    { route: '/blog', priority: 0.8 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority,
  }));

  // City / Location Pages – high priority for local SEO
  const cityRoutes = [
    '/website-development-bhiwandi',
    '/software-agency-mumbai',
    '/app-development-thane',
    '/website-development-navi-mumbai',
    '/website-development-kalyan',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dark Funnel / Blog Pages – in sitemap but not in nav
  const blogRoutes = [
    '/blog/buildnest-vs-datamatex',
    '/blog/top-10-web-developers-bhiwandi-2026',
    '/blog/cost-of-website-india-2026',
    '/blog/zero-upfront-website-development-india',
    '/blog/react-vs-wordpress-2026',
    '/blog/why-bhiwandi-businesses-choose-react',
    '/blog/best-software-companies-mumbai-2026',
    '/blog/flutter-vs-react-native-india',
    '/blog/seo-tips-small-business-mumbai',
    '/blog/shopify-development-india-guide',
    '/blog/indian-web-development-industries',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...cityRoutes, ...blogRoutes];
}
