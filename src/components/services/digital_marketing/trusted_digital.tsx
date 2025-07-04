import TrustedServiceSection from "../trusted";
export const TrustedDigitalMarketingSection = () => (
  <TrustedServiceSection
    titleHighlight="Elevate Your Brand with"
    titleRest="Digital Marketing Expertise"
    description={
      <>
        In today&apos;s digital-first economy, having a strong online presence isn&apos;t optional — it&apos;s essential. At <span className="font-semibold">Atvantiq</span>, we offer comprehensive <span className="font-semibold">digital marketing services</span> designed to help businesses grow, engage their audience, and convert clicks into customers.
        <br /><br />
        Whether you&apos;re a startup looking to build visibility or an enterprise aiming to dominate your niche, our <span className="font-semibold">data-driven strategies</span> ensure you connect with the right audience, at the right time, on the right platforms.
        <br /><br />
        From <span className="font-semibold text-white">SEO and paid advertising to content marketing and social media</span>, we tailor each campaign to your goals, your market, and your business DNA.
      </>
    }
    missionStatement={
      <>
        <span className="font-semibold">Our goal?</span> To transform your digital presence into measurable growth and lasting customer relationships.
      </>
    }
    imagePath="/services/digital-marketing/trusted.jpg"
    imageAlt="Trusted Digital Marketing Services"
    floatingElements={[
      {
        position: "top-6 right-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Data-Driven Results</span>
          </div>
        )
      },
      {
        position: "bottom-6 left-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="text-2xl">📈</div>
            <div>
              <div className="text-white text-sm font-medium">Growth Marketing</div>
              <div className="text-gray-300 text-xs">ROI Focused</div>
            </div>
          </div>
        )
      },
      {
        position: "top-1/2 right-6 transform -translate-y-1/2",
        content: (
          <div className="text-center">
            <div className="text-white text-lg font-bold">300%</div>
            <div className="text-white text-xs">Avg ROI</div>
          </div>
        )
      }
    ]}
  />
);