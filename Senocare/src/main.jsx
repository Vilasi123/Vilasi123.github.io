import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import OurStory from "./Components/HomePage/OurStory/OurStory.jsx";
import OurStoryPageMain from "./Components/OurStoryPage/OurStoryPageMain.jsx";
import Package from "./Components/TouchOfLove/Package.jsx";
import Faqs from "./Components/Faq/Faq.jsx";
import Volunteer from "./Components/Volunteer/Volunteer.jsx";
import Privacy from "./Components/PrivacyPolicy/Privacy.jsx";
import TermCondition from "./Components/Term&Conditions/TermCondition.jsx";
import Disclaimer from "./Components/Disclaimer/Disclaimer.jsx";
import OurVision from "./Components/OurVision/OurVision.jsx";
import OurTeam from "./Components/OurTeam/OurTeam.jsx";
import NursingCare from "./Components/NursingCare/Nursing.jsx";
import PalliativeCare from "./Components/PallitveCare/PallitiveCare.jsx";
import PallitiveCareHome from "./Components/PallitiveCareHome/PallitiveCareHome.jsx";
import Dementia from "./Components/Dementia/Dementia.jsx";
import Physiotherapy from "./Components/Physiotherapy/Physiotherapy.jsx";
import PhysiotherapyGurugram from "./Components/Physiotherapy/PhysiotherapyGurgram.jsx";
import PhysiotherapyDelhi from "./Components/Physiotherapy/PhysiotherapyDelhi.jsx";
import PhysiotherapyNoida from "./Components/Physiotherapy/PhysiotherapyNoida.jsx";
import PhysiotherapyFaridabad from "./Components/Physiotherapy/PhysiotherapyFaribad.jsx";
import DoctorOnHomevisit from "./Components/DoctorOnHome/DoctorOnHome.jsx";
import CriticalCare from "./Components/CriticalCare/CriticalCare.jsx";
import TeleConsultation from "./Components/TeleConsultation/TeleConsultation.jsx";
import VaccinationHome from "./Components/VaccinationHome/VaccinationHome.jsx";
import IcuHome from "./Components/IucHome/IcuHome.jsx";
import NutrientDiet from "./Components/NutrientDiet/NutrientDiet.jsx";
import PhotoGallery from "./Components/PhotoGallery/PhotoGallery.jsx";
import EventPage from "./Components/EventPage/EventPage.jsx";
import FeatureProducts from "./Components/FeatureProducts/FeatureProducts.jsx";
import ClientTestimonial from "./Components/ClientTestimonial/ClinentTestimonial.jsx";
import VideoReview from "./Components/VideoReview/VideioReview.jsx";
import Press from "./Components/Press/Press.jsx";
import CuppingHeadache from "./Components/Physiotherapy/CuppingHeadache.jsx";
import CuppingNeck from "./Components/Physiotherapy/CuppingNeck.jsx";
import Needling from "./Components/Physiotherapy/Needling.jsx";
import Lumbar from "./Components/Physiotherapy/Lumbar.jsx";
import Paralysis from "./Components/Physiotherapy/Paralysis.jsx";
import ParalysisExercise from "./Components/Physiotherapy/ParalysisExersice.jsx";
import ElectrothrapyPhysio from "./Components/Physiotherapy/ElectrothrapyPhysio.jsx";
import UltrasoundThreapy from "./Components/Physiotherapy/UltrasoundThreapy.jsx";
import Parkinson from "./Components/Physiotherapy/Parkinson.jsx";
import SenocareGurgoan from "./Components/CityService/SenocareGurgoan.jsx";
import SenocareDelhi from "./Components/CityService/SenocareDelhi.jsx";
import SenocareHyderabad from "./Components/CityService/SenocareHyderabad.jsx";
import SenocareNoida from "./Components/CityService/SenocareNoida.jsx";
import OurCarePackages from "./Components/OurCarePackage/OurCarePackage.jsx";
import NursingDelhi from "./Components/NursingCityService/NursingDelhi.jsx";
import NursingGurgaon from "./Components/NursingCityService/NursingGurgaon.jsx";
import NursingNoida from "./Components/NursingCityService/NursingNoida.jsx";
import HealthandFitness from "./Components/SenocareServices/HealthandFitness.jsx";
import SafetyandSecurity from "./Components/SenocareServices/SafetyandSecurity.jsx";
import MemoriesandMilestones from "./Components/SenocareServices/MemoriesandMilestones.jsx";
import FormandFilling from "./Components/SenocareServices/FormandFilling.jsx";
import TechnologyandTroubleshooting from "./Components/SenocareServices/TechnologyandTroubleshooting.jsx";
import TravelandTour from "./Components/SenocareServices/Travel&Tour.jsx";
import SubscriptionForm from "./Components/Subscription/SubscriptionForm.jsx";
import CustomizePack from "./Components/Subscription/CustomizePack.jsx";
import SubscribeForm from "./Components/Subscription/SubscribeForm.jsx";
import AuotmaticWheelChair from "./Components/ProductsDetails/AutomaticWheelChair.jsx";
import Strollers from "./Components/ProductsDetails/Stoller.jsx";
import Walkers from "./Components/ProductsDetails/walker.jsx";
import HomeAttendentService from "./Components/HomeAttendent/HomeAttendent.jsx";
import ThreeFunctionalBeds from "./Components/ProductsDetails/ThreeFunctionalBeds.jsx";
import FiveFunctionalBeds from "./Components/ProductsDetails/FiveFunctionBeds.jsx";
import MultiparaMonitor from "./Components/ProductsDetails/MultiparaMonitor.jsx";
import GrabBars from "./Components/ProductsDetails/GrabBars.jsx";
import Arthritis from "./Components/Arthritis/Arthritis.jsx";
import StrokeParalysis from "./Components/StrokeParalysis/StrokeParalysis.jsx";
import WoundCare from "./Components/WoundCare/WoundCare.jsx";
import PostOperativeCareHome from "./Components/PostOperativeCare/PostOperativeCareHome.jsx";
import BackPain from "./Components/Physiotherapy/BackPain.jsx";
import AnkleSprain from "./Components/Physiotherapy/AnkleSprain.jsx";
import AdheshiveCapsulitis from "./Components/Physiotherapy/AdhesiveCapsulitise.jsx";
import PlantarFasciiitis from "./Components/Physiotherapy/PlantarFasciitis.jsx";
import AnkylosingSpondylitis from "./Components/Physiotherapy/AnkylosingSpondylitis.jsx";
import RheumatoidArthritis from "./Components/Physiotherapy/RheumatoidArthritis.jsx";
import FootDrop from "./Components/Physiotherapy/FootDrop.jsx";
import Fibromyalgia from "./Components/Physiotherapy/Fibromyalgia.jsx";
import PostStrokeCare from "./Components/Physiotherapy/PostStrokeCare.jsx";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/our-story/",
    element: <OurStoryPageMain />,
  },

  {
    path: "/our-team",
    element: <OurTeam />,
  },
  {
    path: "/package",
    element: <Package />,
  },
  {
    path: "/faq",
    element: <Faqs />,
  },
  {
    path: "/volunteer",
    element: <Volunteer />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "/term-and-conditions",
    element: <TermCondition />,
  },
  {
    path: "/disclaimer",
    element: <Disclaimer />,
  },
  {
    path: "/our-vision",
    element: <OurVision />,
  },
  // {
  //   path: "/our-vision",
  //   element: <OurVision />,
  // },
  {
    path: "/nursing-care",
    element: <NursingCare />,
  },

  {
    path: "/featured-products/3-function-hospital-beds",
    element: <ThreeFunctionalBeds />,
  },

  {
    path: "/featured-products/5-functional-hospital-bed",
    element: <FiveFunctionalBeds />,
  },

  {
    path: "/featured-products/multipara-monitor",
    element: <MultiparaMonitor />,
  },
  {
    path: "/featured-products/grab-bars/",
    element: <GrabBars />,
  },

  {
    path: "/arthritis",
    element: <Arthritis />,
  },

  {
    path: "/physiotherapy-home-service/stroke-paralysis",
    element: <StrokeParalysis />,
  },
  {
    path: "/expert-wound-care-management-for-seniors/",
    element: <WoundCare />,
  },
  {
    path: "/nursing-care/post-operative-care-at-home/",
    element: <PostOperativeCareHome />,
  },

  {
    path: "/home-attendant-services-for-elderly",
    element: <HomeAttendentService />,
  },
  {
    path: "/nursing-care/palliative-care-for-lymphoma",
    element: <PalliativeCare />,
  },
  {
    path: "/nursing-care/palliative-care-at-home",
    element: <PallitiveCareHome />,
  },
  {
    path: "/dementia",
    element: <Dementia />,
  },
  {
    path: "/physiotherapy-home-service",
    element: <Physiotherapy />,
  },
  {
    path: "/physiotherapy-at-home-in-gurgaon/",
    element: <PhysiotherapyGurugram />,
  },
  {
    path: "/physiotherapy-at-home-in-delhi",
    element: <PhysiotherapyDelhi />,
  },

  {
    path: "/physiotherapy-at-home-in-noida/",
    element: <PhysiotherapyNoida />,
  },
  {
    path: "/physiotherapy-at-home-in-faridabad/",
    element: <PhysiotherapyFaridabad />,
  },
  {
    path: "/doctor-on-home-visit/",
    element: <DoctorOnHomevisit />,
  },
  {
    path: "/critical-care/",
    element: <CriticalCare />,
  },

  {
    path: "/tele-consultation/",
    element: <TeleConsultation />,
  },
  {
    path: "/vaccination-at-home/",
    element: <VaccinationHome />,
  },

  {
    path: "/icu-at-home-service/",
    element: <IcuHome />,
  },
  {
    path: "/nutrition-and-diet/",
    element: <NutrientDiet />,
  },
  {
    path: "/photo-gallery/",
    element: <PhotoGallery/>,
  },
  {
    path: "/latest-events/",
    element: <EventPage />,
  },
  {
    path: "/featured-products/",
    element: <FeatureProducts />,
  },
  {
    path: "/testimonials/",
    element: <ClientTestimonial />,
  },
  {
    path: "/video-reviews/",
    element: <VideoReview />,
  },
  {
    path: "/press/",
    element: <Press />,
  },

  {
    path: "/physiotherapy-home-service/cupping-therapy-for-headaches",
    element: <CuppingHeadache />,
  },
  {
    path: "/physiotherapy-home-service/cupping-therapy-for-neck-pain/",
    element: <CuppingNeck />,
  },
  {
    path: "/physiotherapy-home-service/dry-needling/",
    element: <Needling />,
  },
  {
    path: "/physiotherapy-home-service/physiotherapy-for-lumbar-spondylosis/",
    element: <Lumbar />,
  },
  {
    path: "/physiotherapy-home-service/paralysis-treatment-at-home/",
    element: <Paralysis />,
  },
  {
    path: "/physiotherapy-home-service/physiotherapy-exercises-for-paralysis/",
    element: <ParalysisExercise />,
  },
  {
    path: "/physiotherapy-home-service/electrotherapy-in-physiotherapy/",
    element: <ElectrothrapyPhysio />,
  },
  {
    path: "/physiotherapy-home-service/ultrasound-therapy/",
    element: <UltrasoundThreapy />,
  },
  {
    path: "/holistic-care-gurgaon/",
    element: <SenocareGurgoan />,
  },
  {
    path: "/holistic-care-delhi/",
    element: <SenocareDelhi />,
  },
  {
    path: "/holistic-care-noida/",
    element: <SenocareNoida />,
  },
  {
    path: "/holistic-care-hyderabad/",
    element: <SenocareHyderabad />,
  },
  {
    path: "/physiotherapy-home-service/parkinsons-disease-treatment/",
    element: <Parkinson />,
  },

  {
    path: "/physiotherapy-home-service/back-pain-treatment-at-home/",
    element: <BackPain />,
  },
  {
    path: "/physiotherapy-home-service/ankle-sprain/",
    element: <AnkleSprain />,
  },
  {
    path: "/physiotherapy-home-service/adhesive-capsulitis-treatment/",
    element: <AdheshiveCapsulitis />,
  },

  {
    path: "/physiotherapy-home-service/plantar-fasciitis/",
    element: <PlantarFasciiitis />,
  },

  {
    path: "/physiotherapy-home-service/ankylosing-spondylitis/",
    element: <AnkylosingSpondylitis />,
  },

  {
    path: "/physiotherapy-home-service/rheumatoid-arthritis/",
    element: <RheumatoidArthritis />,
  },

  {
    path: "/physiotherapy-home-service/footdrop/",
    element: <FootDrop />,
  },

  {
    path: "/physiotherapy-home-service/fibromyalgia/",
    element: <Fibromyalgia />,
  },

  {
    path: "/nursing-care/expert-post-stroke-care/",
    element: <PostStrokeCare />,
  },

  {
    path: "/care-packages/",
    element: <OurCarePackages />,
  },
  {
    path: "/nursing-care-delhi/",
    element: <NursingDelhi />,
  },
  {
    
    path: "/nursing-care-gurgaon/",
    element: <NursingGurgaon />,
  },
  {
    path: "/nursing-care-noida/",
    element: <NursingNoida />,
  },
  {
    path: "/health-fitness/",
    element: <HealthandFitness />,
  },
  {
    path: "/memories-milestones/",
    element: <MemoriesandMilestones />,
  },
  {
    path: "/safety-homecare/",
    element: <SafetyandSecurity />,
  },
  {
    path: "/form-filing/",
    element: <FormandFilling />,
  },

  {
    path: "/technology-troubleshooting/",
    element: <TechnologyandTroubleshooting />,
  },
  {
    path: "/travel-tours/",
    element: <TravelandTour />,
  },
  {
    path: "/package/subscription/",
    element: <SubscriptionForm />,
  },

  {
    path: "/package/customize-plan",
    element: <CustomizePack />,
  },
  {
    path: "/subscribe-form/",
    element: <SubscribeForm />,
  },
  {
    path: "/automated-wheelchairs/",
    element: <AuotmaticWheelChair />,
  },
  {
    path: "/featured-products/stollers/",
    element: <Strollers />,
  },
  {
    path: "/featured-products/walkers-for-elderly/",
    element: <Walkers />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
