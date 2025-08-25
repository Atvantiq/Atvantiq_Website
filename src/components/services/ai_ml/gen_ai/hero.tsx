import ServiceSection from "../subservices_hero";
export const GenAIServices = () => (
  <ServiceSection
    title="Generative AI & GPT-based Automation Services"
    subtitle="Unlock Creativity and Productivity with Next-Gen AI Solutions"
    description1={
      <>
        At <span className="text-[#2674D3] font-medium">Atvantiq</span>, we help enterprises revolutionize the way they work, communicate, and innovate through{' '}
        <span className="text-[#2674D3] font-medium">Generative AI</span> and{' '}
        <span className="text-[#2674D3] font-medium">GPT-based automation</span>. As one of the leading AI development companies serving clients across the USA, Canada, Australia, UAE, India, and Europe, we specialize in building advanced AI solutions that not only automate repetitive tasks but also empower businesses with intelligent content creation, decision-making, and customer engagement tools.
      </>
    }
    description2={
      <>
        Whether you&apos;re looking to integrate{' '}
        <span className="text-[#2674D3] font-medium">OpenAI’s GPT models</span> or build a{' '}
        <span className="text-[#2674D3] font-medium">custom generative AI engine</span> for your organization, our team ensures every solution is tailored to your domain-specific needs—blending machine learning expertise with real-world business acumen.
      </>
    }
    imagePath="/services/ai/gen_ai/hero.jpg"
    imageAlt="Generative AI creativity visualization"
    ctaText="Contact Us Today"
  />
);