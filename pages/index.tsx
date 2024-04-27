import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { useAppContext } from "@/context/AppContext";

import Layout from "@/components/Layout/layout";
import Banner from "@/components/Banner/banner";
import SocialProof from "@/components/SocialProof/socialProof";
import Features from "@/components/Features/features";

import { SOCIAL_PROOF_IMAGES } from "@/constants/siteLabelsConstants";
import { SOCIAL_PROOF_API } from "@/constants/apiConstants";
import { SocialProof as SocialProofType } from "@/types/customTypes";

interface HomeProps {
  socialProof: SocialProofType
}

const Home: React.FC<HomeProps> = (props) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: "SET_SOCIAL_PROOF", payload: props.socialProof });
    
    const handleResize = () => {
      dispatch({ type: "SET_IS_MOBILE", payload: window.innerWidth < 1024 });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          <SocialProof topClients={SOCIAL_PROOF_IMAGES} />
        </section>
        <section>
          <Features />
        </section>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const res = await fetch(SOCIAL_PROOF_API);
  const data = await res.json();

  return {
    props: {
      socialProof: data
    },
  };
};


export default Home;