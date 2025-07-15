import CTASection from "../cta";

export const TelecomCTASection = () => (
  <CTASection
    title="Let's Build the Network of Tomorrow"
    description={
      <>
        Whether you&apos;re rolling out 5G in dense urban areas, expanding fiber networks, or virtualizing your core —{" "}
        <span className="text-[#1A82E8] font-semibold">Atvantiq is your trusted partner in telecom transformation</span>.
        We ensure your networks are faster, more reliable, and built for the future.
        <br /><br />
      </>
    }
    ctaText="Contact Us Today"
    imagePath="/services/telecom/cta.jpg"
    imageAlt="Telecom Infrastructure Support"
  />
);
