import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

const defaultSEO = {
  title: 'NOVANI Studio | Luxury Interior Design in Nairobi',
  description: 'Premier luxury interior design studio in Nairobi specializing in bespoke kitchens, wardrobes, and full-home transformations.',
  image: '/og-image.jpg',
  url: 'https://novani-studio.vercel.app',
}

export const SEO = ({ 
  title = defaultSEO.title, 
  description = defaultSEO.description, 
  image = defaultSEO.image,
  url = defaultSEO.url,
}: SEOProps) => {
  const fullTitle = title === defaultSEO.title ? title : `${title} | NOVANI Studio`
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}