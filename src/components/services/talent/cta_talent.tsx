import CTASection from "../cta";
export const TalentCTASection = () => (
  <CTASection
    title="Let's Build Your Dream Tech Team"
    description={
      <>
        Whether you&apos;re hiring 1 developer or building a 50-member agile squad, <span className="text-[#1A82E8] font-semibold">Atvantiq helps you scale your workforce without the risk</span>. Our team becomes an extension of your HR — ensuring you never miss a growth opportunity due to lack of talent.
      </>
    }
    ctaText="Request a free hiring strategy consultation"
    imagePath="/services/talent/callaction.jpg"
    imageAlt="Tech Team Building"
  />
);