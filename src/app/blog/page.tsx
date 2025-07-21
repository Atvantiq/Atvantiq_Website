
import BlogSection from "@/components/blogs/allblogs";
import BlogsHeroSection from "@/components/blogs/blog_hero";
import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <BlogsHeroSection />
        <BlogSection />
        <FooterSection />
      </main>
      </div>
  );
}