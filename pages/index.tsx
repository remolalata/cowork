import { useEffect } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { useAppContext } from "@/context/AppContext";

import Layout from "@/components/Layout/layout";
import Banner from "@/components/Banner/banner";
import SocialProof from "@/components/SocialProof/socialProof";
import Features from "@/components/Features/features";
import Statistics from "@/components/Statistics/statistics";
import VirtualTour from "@/components/VirtualTour/virtualTour";
import Testimonials from "@/components/Testimonails/testimonials";
import FAQS from "@/components/FAQS/faqs";
import CTA from "@/components/CTA/cta";
import Blogs from "@/components/Blogs/blogs";

import { fetchMockData } from "@/utils/helpers";

import { SocialProof as SocialProofType, Features as FeaturesType, Statistics as StatisticsType, Testimonials as TestimonialsType, FAQS as FAQSType, Blogs as BlogsType } from "@/types/customTypes";

interface HomeProps {
  socialProof: SocialProofType,
  features: FeaturesType,
  statistics: StatisticsType,
  testimonials: TestimonialsType,
  faqs: FAQSType,
  blogs: BlogsType
}

const Home: React.FC<HomeProps> = (props) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: "SET_SOCIAL_PROOF", payload: props.socialProof });
    dispatch({ type: "SET_FEATURES", payload: props.features });
    dispatch({ type: "SET_STATISTICS", payload: props.statistics });
    dispatch({ type: "SET_TESTIMONIALS", payload: props.testimonials });
    dispatch({ type: "SET_FAQS", payload: props.faqs });
    dispatch({ type: "SET_BLOGS", payload: props.blogs });

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
          <meta property="og:image" content="/images/preview-image.jpg" />
          <meta property="og:title" content="Cowork" />
          <meta property="og:description" content="Elevate Your Workspace with Cowork" />
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

        {state.faqs && state.faqs.length > 0 &&
          <section>
            <FAQS data={state.faqs} />
          </section>
        }

        <section>
          <CTA />
        </section>

        {state.blogs && state.blogs.length > 0 &&
          <section>
            <Blogs data={state.blogs} />
          </section>
        }
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const socialProofPromise = fetchMockData("social-proof.json");
  const featuresPromise = fetchMockData("features.json");
  const statisticsPromise = fetchMockData("statistics.json");
  const testimonialsPromise = fetchMockData("testimonials.json");
  const faqsPromise = fetchMockData("faqs.json");
  const blogsPromise = fetchMockData("blogs.json");

  const [socialProof, features, statistics, testimonials, faqs, blogs] = await Promise.all([socialProofPromise, featuresPromise, statisticsPromise, testimonialsPromise, faqsPromise, blogsPromise]);

  return {
    props: {
      socialProof,
      features,
      statistics,
      testimonials,
      faqs,
      blogs
    },
  };
};


export default Home;