import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => {
  console.log("seo render");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
