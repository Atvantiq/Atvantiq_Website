import CTASection from "../cta";
export const AICTASection = () => (
  <CTASection
    title="Let's Build Something Intelligent Together"
    description={
      <>
        Whether you&apos;re a startup in <span className="text-[#1A82E8] font-medium">Toronto</span>, a fintech in{' '}
        <span className="text-[#1A82E8] font-semibold">Dubai</span>, or a healthcare provider in{' '}
        <span className="text-[#1A82E8] font-semibold">Melbourne</span>, our AI experts are ready to help. 
        Let&apos;s create tailored, future-ready AI systems that help you lead your industry.
      </>
    }
    ctaText="Schedule your free AI consultation"
    imagePath="/services/callaction.jpg"
    imageAlt="AI Development Workspace"
  />
);