import TrustedServiceSection from "../trusted";
export const TrustedTalentSection = () => (
  <TrustedServiceSection
    titleHighlight="Right Talent. Right Time."
    titleRest="Real Results."
    question={
      <>
        Need access to <span className="font-semibold">top tech talent</span> without the hiring headaches?
      </>
    }
    description={
      <>
        In the fast-paced world of digital transformation, having the right talent is your greatest competitive advantage. At <span className="font-semibold">Atvantiq</span>, we offer <span className="font-semibold">flexible and scalable talent outsourcing solutions</span> to help organizations find, onboard, and retain top tech professionals across industries.
        <br /><br />
        From <span className="font-semibold">on-demand hiring</span> for critical projects to full-time tech staffing and end-to-end <span className="font-semibold">HR outsourcing</span>, we ensure your workforce stays agile, skilled, and future-ready — without the overhead.
        <br /><br />
        Whether you&#39;re a startup in the US scaling fast, an enterprise in the UAE managing multiple projects, or a product company in India needing niche skill sets, our <span className="font-semibold text-white">talent solutions are built to fit your hiring goals.</span>
      </>
    }
    missionStatement={
      <>
        <span className="font-semibold">Our promise?</span> To connect you with the right talent at the right time, every time.
      </>
    }
    imagePath="/services/talent/trusted.jpg"
    imageAlt="Trusted Talent Outsourcing Services"
    floatingElements={[
      {
        position: "top-6 right-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">2 Weeks Hiring</span>
          </div>
        )
      },
      {
        position: "bottom-6 left-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="text-2xl">👥</div>
            <div>
              <div className="text-white text-sm font-medium">Global Talent Pool</div>
              <div className="text-gray-300 text-xs">500+ Experts</div>
            </div>
          </div>
        )
      },
      {
        position: "top-1/2 right-6 transform -translate-y-1/2",
        content: (
          <div className="text-center">
            <div className="text-white text-lg font-bold">95%</div>
            <div className="text-white text-xs">Success Rate</div>
          </div>
        )
      }
    ]}
  />
);