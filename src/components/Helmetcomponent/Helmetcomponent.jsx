import { Helmet } from "react-helmet";

const Helmetcomponent = ({ title }) => {
  return (
    <Helmet>
    <title>{title}</title>
    {/* <meta name="keywords" content="IJCCBD, International Journal of Cloud Computing and Security Systems , Authentication, Cloud Security, Cloud Computing, Artificial Intelligrnce, Private Cloud, Public Cloud,  Cloud Computing, Cloud Orchestration, Cloud Computing,Cloud Automation,Tokenization" />
    <meta name="description" content="IJCCBD publishes cutting-edge research on cloud computing technologies, security frameworks, data protection, and cybersecurity strategies. Explore the latest advancements in secure cloud architectures, encryption methods, threat detection, and privacy-preserving solutions." />
    <meta name="author" content="IJCCBD Editorial Team" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="International Journal of Cloud Computing and Security Systems(IJCCBD)" />
    <meta property="og:description" content="IJCCBD publishes cutting-edge research on cloud computing technologies, security frameworks, data protection, and cybersecurity strategies. Explore the latest advancements in secure cloud architectures, encryption methods, threat detection, and privacy-preserving solutions." />
    <meta property="og:url" content="https://www.ijccss.com/" />
    <meta property="og:image" content="https://ijccss.com/assets/logo.png" />

    <link rel="canonical" href="https://www.ijccss.com/" />
    <link rel="icon" type="image/png" href="https://www.ijccss.com//assets/fav.png" /> */}
  </Helmet>
  );
};

export default Helmetcomponent;