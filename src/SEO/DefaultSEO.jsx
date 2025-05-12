import { Helmet } from "react-helmet-async";

export default function DefaultSEO() {
  return (
    <Helmet>
       {/* Required meta tags  */}
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    
    {/* <!-- Primary Meta Tags --> */}
    <title>Tour </title>
    <meta name="description" content="Discover amazing tours and travel experiences with [Your Company Name]. Book your dream vacation today!" />
    <meta name="keywords" content="travel, tours, vacation, holiday, adventure, booking" />
    <meta name="author" content="Safarnama Travels" />
    <meta name="robots" content="index, follow" />
    
    {/* <!-- Favicon & App Icons --> */}
    <link rel="icon" type="image/png" href="/logoo.png" />
    
    {/* <!-- Fonts --> */}
    <link rel="stylesheet" href="/fonts/dosis.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    
    {/* <!-- Open Graph / Social Media Meta Tags --> */}
    <meta property="og:title" content="Tour - Your Catchy Tagline Here" />
    <meta property="og:description" content="Discover amazing tours and travel experiences with [Your Company Name]. Book your dream vacation today!" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://safarnamatour.com" />
    <meta property="og:image" content="https://safarnamatour.com/social-preview.jpg" />
    <meta property="og:site_name" content="Safarnama Travels" />
    
    {/* <!-- Twitter Card Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tour - Your Catchy Tagline Here" />
    <meta name="twitter:description" content="Discover amazing tours and travel experiences with [Your Company Name]. Book your dream vacation today!" />
    <meta name="twitter:image" content="https://safarnamatour.com/social-preview.jpg" />
    
    {/* <!-- Canonical URL --> */}
    <link rel="canonical" href="https://safarnamatour.com" />
    
    {/* <!-- Preload critical resources --> */}
    <link rel="preload" href="/src/main.jsx" as="script" />
    
    {/* <!-- Theme Color for Mobile Browsers --> */}
    <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}