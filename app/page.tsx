import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import DiarySection from '@/components/diary-section'
import FeelingSection from '@/components/feeling-section'
import ProjectsSection from '@/components/projects-section'
import WaitlistSection from '@/components/waitlist-section'
import Footer from '@/components/footer'
import CustomCursor from '@/components/custom-cursor'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DiarySection />
      <FeelingSection />
      <ProjectsSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
