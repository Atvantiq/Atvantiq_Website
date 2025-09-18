import CTASection from "../../cta";

export const PlacementCTA = () => (
  <CTASection
    title="Build Your Dream Team with Atvantiq"
    description={
      <>
       Whether you need <span className="font-semibold text-[#2674D3]">specialized contract talent</span> for a project or <span className="font-semibold text-[#2674D3]">dedicated full-time professionals</span> to drive long-term success, Atvantiq delivers reliable, scalable, and future-ready placement solutions.
      </>
    }
    ctaText="Contact us today to find the right talent for your business needs."
    imagePath="/services/talent/cta.jpg"
    imageAlt="Telecom Infrastructure Support"
  />
);
