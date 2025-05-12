import { Helmet } from "react-helmet";

const SEOHelmet = ({ title, description, keywords, image }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow" />
  </Helmet>
);

export default SEOHelmet;
