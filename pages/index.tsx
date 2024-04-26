import Head from "next/head";

import { useAppContext } from "@/context/AppContext";

import Layout from "@/components/Layout/layout";

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
        <h1>Home</h1>
      </Layout>
    </>
  )
}

export default Home;