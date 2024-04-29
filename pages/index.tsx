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
import Testimonials from "@/components/Testimonails/testimonials";

import { fetchMockData } from "@/utils/helpers";

import { SocialProof as SocialProofType, Features as FeaturesType, Statistics as StatisticsType, Testimonials as TestimonialsType } from "@/types/customTypes";

interface HomeProps {
  socialProof: SocialProofType,
  features: FeaturesType,
  statistics: StatisticsType,
  testimonials: TestimonialsType
}

const Home: React.FC<HomeProps> = (props) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: "SET_SOCIAL_PROOF", payload: props.socialProof });
    dispatch({ type: "SET_FEATURES", payload: props.features });
    dispatch({ type: "SET_STATISTICS", payload: props.statistics });
    dispatch({ type: "SET_TESTIMONIALS", payload: props.testimonials });

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

        {state.socialProof && state.socialProof.length > 0 &&
          <section>
            <SocialProof data={state.socialProof} />
          </section>
        }

        {state.features && state.features.length > 0 &&
          <section>
            <Features data={state.features} />
          </section>
        }

        {state.statistics && state.statistics.length > 0 &&
          <section>
            <Statistics data={state.statistics} />
          </section>
        }

        <section>
          <VirtualTour />
        </section>

        {state.testimonials && state.testimonials.length > 0 &&
          <section>
            <Testimonials data={state.testimonials} />
          </section>
        }
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const socialProofPromise = fetchMockData("social-proof.json");
  const featuresPromise = fetchMockData("features.json");
  const statisticsPromise = fetchMockData("statistics.json");
  const testimonialsPromise = fetchMockData("testimonials.json");

  const [socialProof, features, statistics, testimonials] = await Promise.all([socialProofPromise, featuresPromise, statisticsPromise, testimonialsPromise]);

  return {
    props: {
      socialProof,
      features,
      statistics,
      testimonials
    },
  };
};


export default Home;