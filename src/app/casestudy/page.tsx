import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
export default function contact() {
  return (
    <div className="min-h-screen max-w-screen bg-white">
      <main>
        <Navbar />
        <div className="w-full h-96 flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#062a56] via-[#0a3d7a] to-[#062a56] relative overflow-hidden">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>

  <h1 className="text-5xl font-extrabold text-white drop-shadow-lg relative">
    Case Studies
    <span className="block w-24 h-1 bg-blue-400 mx-auto mt-3 rounded-full"></span>
  </h1>

  <p className="text-2xl font-medium text-white mt-8 animate-pulse relative">
    Coming Soon...
  </p>
</div>


        <FooterSection />
      </main>
    </div>
  );
}
