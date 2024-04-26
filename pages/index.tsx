import Head from "next/head";

import { useAppContext } from "@/context/AppContext";

import Layout from "@/components/Layout/layout";
import Banner from "@/components/Banner/banner";
import SocialProof from "@/components/SocialProof/socialProof";

const Home: React.FC = () => {
  const { state, dispatch } = useAppContext();


  return (
    <>
      <>
        <Head>
          <title>Cowork</title>
        </Head>
      </>
      <Layout>
        <section>
          <Banner />
        </section>
        <section>
          <SocialProof />
        </section>
      </Layout>
    </>
  )
}

export default Home;