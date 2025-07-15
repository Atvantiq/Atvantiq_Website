"use client";
import TrustedServiceSection from "../trusted";

export const TrustedTelecomSection = () => (
  <TrustedServiceSection
    titleHighlight="Trusted Telecom"
    titleRest="Infrastructure Partner"
    question={
      <>
        Need a reliable partner for <span className="font-semibold">end-to-end telecom services</span>?
      </>
    }
    description={
      <>
        At <span className="font-semibold">Atvantiq</span>, we are shaping the future of connectivity by delivering{' '}
        <span className="font-semibold">telecom infrastructure solutions</span> for leading network operators, OEMs, and enterprises. 
        With <span className="font-semibold">18+ years of domain expertise</span>, we offer complete planning, deployment, integration, optimization, 
        and managed services across <span className="text-white font-medium">5G, fiber, microwave, and core networks</span>.
      </>
    }
    missionStatement={
      <>
        <span className="font-semibold">Our mission?</span> To enable faster rollout, maximum uptime, and digital-ready infrastructure that drives transformation at scale.
      </>
    }
    imagePath="/services/telecom/trusted.jpg"
    imageAlt="Trusted Telecom Infrastructure Partner"
    floatingElements={[
      {
        position: "top-6 right-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">18+ Years Expertise</span>
          </div>
        )
      },
      {
        position: "bottom-6 left-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="text-2xl">📡</div>
            <div>
              <div className="text-white text-sm font-medium">End-to-End Telecom</div>
            </div>
          </div>
        )
      },
      {
        position: "top-1/2 right-6 transform -translate-y-1/2",
        content: (
          <div className="text-center">
            <div className="text-white text-base font-medium">Global Clients</div>
          </div>
        )
      }
    ]}
  />
);
