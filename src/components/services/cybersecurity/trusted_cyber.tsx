import TrustedServiceSection from "../trusted";
export const TrustedCybersecuritySection = () => (
  <TrustedServiceSection
    titleHighlight="Stay Secure in an"
    titleRest="Increasingly Connected World"
    description={
      <>
        In today&apos;s digital-first landscape, <span className="font-semibold text-white">cyber threats are more sophisticated, frequent, and damaging</span> than ever. At <span className="font-semibold">Atvantiq</span>, we help forward-thinking organizations secure their digital environments, assets, and people through proactive, tailored, and compliance-ready <span className="font-semibold">cybersecurity services</span>.
        <br /><br />
        Whether you&apos;re a startup scaling fast, a government agency, or an enterprise with legacy systems, our <span className="font-semibold">cybersecurity experts</span> work closely with you to assess, plan, and implement security that grows with your business — not against it.
      </>
    }
    missionStatement={
      <>
        <span className="font-semibold">Our commitment?</span> To protect your digital assets with enterprise-grade security that scales with your growth.
      </>
    }
    imagePath="/services/cybersecurity/trusted.jpg"
    imageAlt="Trusted Cybersecurity Services"
    floatingElements={[
      {
        position: "top-6 right-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">24/7 Security Monitoring</span>
          </div>
        )
      },
      {
        position: "bottom-6 left-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🛡️</div>
            <div>
              <div className="text-white text-sm font-medium">Enterprise Security</div>
              <div className="text-gray-300 text-xs">Compliance Ready</div>
            </div>
          </div>
        )
      },
      {
        position: "top-1/2 right-6 transform -translate-y-1/2",
        content: (
          <div className="text-center">
            <div className="text-white text-lg font-bold">99.9%</div>
            <div className="text-white text-xs">Protection</div>
          </div>
        )
      }
    ]}
  />
);
