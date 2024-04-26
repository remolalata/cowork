import Head from "next/head";

import { useAppContext } from "@/context/AppContext";

import Layout from "@/components/Layout/layout";
import Banner from "@/components/Banner/banner";

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
      </Layout>
    </>
  )
}

export default Home;