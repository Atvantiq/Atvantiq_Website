import TrustedServiceSection from "../trusted";
export const TrustedCloudSection = () => (
  <TrustedServiceSection
    titleHighlight="Accelerate Digital Transformation"
    titleRest="with Cloud"
    question={
      <>
        Ready to unlock the full potential of <span className="font-semibold">cloud technologies</span> for your business?
      </>
    }
    description={
      <>
        In today&#39;s hyper-connected world, the cloud is no longer optional — it&#39;s the foundation for business agility, scalability, and innovation. At <span className="font-semibold">Atvantiq</span>, we empower businesses to modernize their infrastructure, streamline operations, and unlock the full potential of digital technologies with secure and scalable <span className="font-semibold">cloud services</span>.
        <br /><br />
        Whether you&#39;re migrating legacy systems, launching a cloud-native app, or optimizing costs on AWS, Azure, or Google Cloud — our cloud experts deliver customized, enterprise-grade solutions to help you <span className="font-semibold text-white">grow without limits.</span>
      </>
    }
    missionStatement={
      <>
        <span className="font-semibold">Our vision?</span> To make cloud transformation seamless, secure, and cost-effective for businesses of all sizes.
      </>
    }
    imagePath="/services/cloud/trusted2.jpg"
    imageAlt="Trusted Cloud Services"
    floatingElements={[
      {
        position: "top-6 right-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">99.99% Uptime SLA</span>
          </div>
        )
      },
      {
        position: "bottom-6 left-6",
        content: (
          <div className="flex items-center space-x-3">
            <div className="text-2xl">☁️</div>
            <div>
              <div className="text-white text-sm font-medium">Multi-Cloud Expertise</div>
              <div className="text-gray-300 text-xs">AWS, Azure, GCP</div>
            </div>
          </div>
        )
      },
      {
        position: "top-1/2 right-6 transform -translate-y-1/2",
        content: (
          <div className="text-center">
            <div className="text-white text-lg font-bold">40%</div>
            <div className="text-white text-xs">Cost Savings</div>
          </div>
        )
      }
    ]}
  />
);