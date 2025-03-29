import { Helmet } from "react-helmet";

const Helmetcomponent = ({ title }) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="keywords" content="IJCCBD, International Journal of Cloud Computing and Big Data , Cloud Optimization, Hybrid Cloud, Public Cloud,Private Cloud,Edge Computing, Data Processing,  Data Storage,Cloud Infrastructure, Big Data,Cloud Automation,Cloud Computing" />
    <meta name="description" content="International Journal of Cloud Computing and Big Data publishes cutting-edge research on cloud technologies, big data analytics, security, and innovations." />
    <meta name="author" content="IJCCBD Editorial Team" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="International Journal of Cloud Computing and Big Data(IJCCBD)" />
    <meta property="og:description" content="International Journal of Cloud Computing and Big Data publishes cutting-edge research on cloud technologies, big data analytics, security, and innovations." />
    <meta property="og:url" content="https://www.ijccbd.com/" />
    <meta property="og:image" content="https://ijccbd.com/assets/IJCCBD.png" />

    <link rel="icon" type="image/svg+xml" href="/assets/Fav.png" />
    <link rel="canonical" href="https://www.ijccbd.com/" />
  </Helmet>
  );
};

export default Helmetcomponent;