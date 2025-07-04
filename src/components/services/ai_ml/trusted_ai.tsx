import TrustedServiceSection from "../trusted";
export const TrustedAISection = () => (
  <TrustedServiceSection
    titleHighlight="Trusted AI & ML"
    titleRest="Development Company"
    question={
      <>
        Searching for an <span className="font-semibold">AI development company</span> that delivers best results?
      </>
    }
    description={
      <>
        At <span className="font-semibold">Atvantiq</span>, we specialize in building custom{' '}
        <span className="font-semibold">AI and Machine Learning solutions</span> that solve complex business challenges across industries. 
        With over <span className="font-semibold">20 years of global experience</span>, we serve enterprises and startups in{' '}
        <span className="text-white font-medium">India, USA, Australia, UAE, Canada, and Europe</span>, helping them harness the power of data, automation, and intelligence.
      </>
    }
    missionStatement={
      <>
        <span className="font-semibold">Our mission?</span> To turn your data into decisions — and your ideas into intelligent, scalable systems.
      </>
    }
    imagePath="/services/ai/trusted.jpg"
    imageAlt="Trusted AI & ML Development Company"
    floatingElements={[
      {
        position: "top-6 right-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">20+ Years Experience</span>
          </div>
        )
      },
      {
        position: "bottom-6 left-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🤖</div>
            <div>
              <div className="text-white text-sm font-medium">Custom AI Solutions</div>
              <div className="text-gray-300 text-xs">Global Delivery</div>
            </div>
          </div>
        )
      },
      {
        position: "top-1/2 right-6 transform -translate-y-1/2",
        content: (
          <div className="text-center">
            <div className="text-white text-lg font-bold">6+</div>
            <div className="text-white text-xs">Countries</div>
          </div>
        )
      }
    ]}
  />
);