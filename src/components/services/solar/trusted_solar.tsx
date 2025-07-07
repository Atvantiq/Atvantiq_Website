import TrustedServiceSection from "../trusted";
export const TrustedSolarSection = () => (
  <TrustedServiceSection
    titleHighlight="Empowering Businesses & Communities"
    titleRest="with Clean Energy"
    question={
      <>
        Ready to embrace <span className="font-semibold">sustainable energy solutions</span> that power your future?
      </>
    }
    description={
      <>
        At <span className="font-semibold">Atvantiq</span>, we believe energy innovation is the key to a sustainable tomorrow. Our <span className="font-semibold">Solar Energy Solutions</span> are designed to help businesses, institutions, and communities reduce their carbon footprint, lower operational costs, and become energy independent.
        <br /><br />
        Whether you&#39;re looking to power a commercial facility, integrate solar into a smart infrastructure, or deploy a utility-scale solar farm — we provide end-to-end solar services that are <span className="font-semibold text-white">efficient, cost-effective, and future-ready.</span>
      </>
    }
    missionStatement={
      <>
        <span className="font-semibold">Our mission?</span> To accelerate the world&#39;s transition to clean, renewable energy through innovative solar solutions.
      </>
    }
    imagePath="/services/solar/trusted.jpg"
    imageAlt="Trusted Solar Energy Solutions"
    floatingElements={[
      {
        position: "top-6 right-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">25 Year Warranty</span>
          </div>
        )
      },
      {
        position: "bottom-6 left-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="text-2xl">☀️</div>
            <div>
              <div className="text-white text-sm font-medium">Clean Energy</div>
              <div className="text-gray-300 text-xs">Carbon Neutral</div>
            </div>
          </div>
        )
      },
      {
        position: "top-1/2 right-6 transform -translate-y-1/2",
        content: (
          <div className="text-center">
            <div className="text-white text-lg font-bold">60%</div>
            <div className="text-white text-xs">Cost Savings</div>
          </div>
        )
      }
    ]}
  />
);