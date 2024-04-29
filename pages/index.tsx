import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { useAppContext } from "@/context/AppContext";

import Layout from "@/components/Layout/layout";
import Banner from "@/components/Banner/banner";
import SocialProof from "@/components/SocialProof/socialProof";
import Features from "@/components/Features/features";
import Statistics from "@/components/Statistics/statistics";
import VirtualTour from "@/components/VirtualTour/virtualTour";

import { fetchMockData } from "@/utils/helpers";

import { SocialProof as SocialProofType, Features as FeaturesType, Statistics as StatisticsType } from "@/types/customTypes";

interface HomeProps {
  socialProof: SocialProofType,
  features: FeaturesType,
  statistics: StatisticsType
}

const Home: React.FC<HomeProps> = (props) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: "SET_SOCIAL_PROOF", payload: props.socialProof });
    dispatch({ type: "SET_FEATURES", payload: props.features });
    dispatch({ type: "SET_STATISTICS", payload: props.statistics });

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

        {state.socialProof.length > 0 &&
          <section>
            <SocialProof data={state.socialProof} />
          </section>
        }

        {state.features.length > 0 &&
          <section>
            <Features data={state.features} />
          </section>
        }

        {state.statistics.length > 0 &&
          <section>
            <Statistics data={state.statistics} />
          </section>
        }

        <section>
          <VirtualTour />
        </section>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const socialProofPromise = fetchMockData("social-proof.json");
  const featuresPromise = fetchMockData("features.json");
  const statisticsPromise = fetchMockData("statistics.json");

  const [socialProof, features, statistics] = await Promise.all([socialProofPromise, featuresPromise, statisticsPromise])

  return {
    props: {
      socialProof,
      features,
      statistics
    },
  };
};


export default Home;