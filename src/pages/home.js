import Layout from "../components/Layout";

import Hero from "../components/Hero";
import Sponsors from "../components/Hero/Sponsors";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Sponsors />
    </Layout>
  );
};

export default Home;
