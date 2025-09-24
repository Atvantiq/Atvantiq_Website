import ServiceSection from "../../ai_ml/subservices_hero";
export const BackhaulServicesHero = () => (
  <ServiceSection
    title="Backhaul Services"
    subtitle="Enabling High-Speed, Reliable Connectivity for Next-Generation Networks"
    description1={
      <>
        In the world of telecom, seamless connectivity doesn’t just depend on towers and radio signals—it relies heavily on <span className="text-[#2674D3] font-medium">backhaul infrastructure</span>. Backhaul services form the <span className="text-[#2674D3] font-medium">backbone of modern communication networks,</span> ensuring smooth data transmission between the Radio Access Network (RAN) and the core network.
        </>
    }
    description2={
      <>
        At <span className="text-[#2674D3] font-medium">Atvantiq</span>, we deliver comprehensive <span className="text-[#2674D3] font-medium">Backhaul Services</span> designed to meet the demands of <span className="text-[#2674D3] font-medium">4G LTE, 5G, IoT, and enterprise-grade networks</span>. From fiber optic to microwave and satellite backhaul, our solutions guarantee <span className="text-[#2674D3] font-medium">high capacity, low latency, and secure transmission</span> for uninterrupted communication.
      </>
    }
    imagePath="/services/telecom/backhaul/hero.jpg"
    imageAlt="Telecom network visualization"
    ctaText="Contact Us Today"
  />
);