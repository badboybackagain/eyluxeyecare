export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://eyluxeyecare.com';
  const routes = [
    '', 'about', 'eye-testing', 'lenses', 'frames', 'meta-ai-glasses',
    'contact-lenses', 'kids-vision', 'brands', 'blog', 'contact',
  ];
  const lastModified = new Date();
  return routes.map((r) => ({
    url: r ? `${base}/${r}` : base,
    lastModified,
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
