import LeadersSection from "../about/leaders";
const allLeaders = [
  {
    name: "Karanvir Singh",
    role: "Co-Founder & CTO",
    image: "/leaders/cto.jpg",
    bio: "Visionary technologist with 20+ years driving digital innovation and AI transformation."
  },
  {
    name: "Vikram Sachdeva",
    role: "Co-Founder & CEO",
    image: "/team/Vikramsir.png",
    bio: "Strategic business leader focused on scaling global operations and client success."
  },
  {
    name: "Kenny Sandhu",
    role: "Co-Founder & COO",
    image: "/team/Kennysir.png",
    bio: "Operations excellence expert ensuring seamless delivery across global markets."
  },
  {
    name: "Maninder Singh",
    role: "Co-Founder & CMO",
    image: "/leaders/cmo.jpg",
    bio: "Marketing strategist building brand presence and thought leadership globally."
  },
  {
    name: "Rajesh Kumar",
    role: "VP of Engineering",
    image: "/leaders/vp-engineering.jpg",
    bio: "Technical architecture leader driving scalable solutions and engineering excellence."
  },
  {
    name: "Priya Sharma",
    role: "VP of Product",
    image: "/leaders/vp-product.jpg",
    bio: "Product innovation leader focused on user-centric design and market strategy."
  },
  {
    name: "David Chen",
    role: "VP of Sales",
    image: "/leaders/vp-sales.jpg",
    bio: "Global sales leader expanding market reach and building strategic partnerships."
  },
  {
    name: "Sarah Johnson",
    role: "VP of Human Resources",
    image: "/leaders/vp-hr.jpg",
    bio: "People operations expert fostering talent development and inclusive culture."
  },
  {
    name: "Ahmed Hassan",
    role: "VP of Delivery",
    image: "/leaders/vp-delivery.jpg",
    bio: "Project delivery specialist ensuring quality outcomes and client satisfaction."
  },
  {
    name: "Lisa Thompson",
    role: "VP of Finance",
    image: "/leaders/vp-finance.jpg",
    bio: "Financial strategy leader driving sustainable growth and operational efficiency."
  }
];
export const LifeAtAtvantiqLeadersSection = () => (
  <LeadersSection
    leaders={allLeaders}
    sectionTitle="Leadership Team"
    description="Our diverse leadership team brings together decades of experience in technology, business strategy, and innovation. Get to know the minds behind Atvantiq's success and vision for the future."
  />
);