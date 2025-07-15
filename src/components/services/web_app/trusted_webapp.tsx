import TrustedServiceSection from "../trusted";


export const TrustedWebAppSection = () => (
  <TrustedServiceSection
    titleHighlight="Build Exceptional Web & Mobile Apps"
    titleRest="with Atvantiq"
    question={
      <>
        Looking for a <span className="font-semibold">development partner</span> that delivers exceptional digital experiences?
      </>
    }
    description={
      <>
        In a digital-first world, your customers expect seamless, fast, and intuitive experiences across devices. At <span className="font-semibold">Atvantiq</span>, we help businesses transform ideas into <span className="font-semibold">powerful web and mobile applications</span> that not only look great but perform at scale.
        <br /><br />
        Whether you&#39;re a startup seeking MVP development or an enterprise aiming to digitize core services, we build <span className="font-semibold">custom applications</span> that are user-focused, secure, scalable, and future-ready.
      </>
    }
    missionStatement={
      <>
        <span className="font-semibold">Our commitment?</span> To transform your ideas into digital experiences that users love and businesses rely on.
      </>
    }
    imagePath="/services/web_app/trusted.jpg"
    imageAlt="Trusted Web & Mobile App Development"
    floatingElements={[
      {
        position: "top-6 right-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">99.9% Uptime</span>
          </div>
        )
      },
      {
        position: "bottom-6 left-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="text-2xl">📱</div>
            <div>
              <div className="text-white text-sm font-medium">Cross-Platform Apps</div>
              <div className="text-gray-300 text-xs">iOS, Android & Web</div>
            </div>
          </div>
        )
      },
      {
        position: "top-1/2 right-6 transform -translate-y-1/2",
        content: (
          <div className="text-center">
            <div className="text-white text-lg font-bold">50%</div>
            <div className="text-white text-xs">Faster Launch</div>
          </div>
        )
      }
    ]}
  />
);