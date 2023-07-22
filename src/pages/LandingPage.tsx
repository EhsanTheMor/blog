import HeroSection from '../components/HeroSection'
import NavbarMenu from '../components/NavbarMenu'
import ContentSection from '../components/ContentSection'

export default function LandingPage() {
     return (
          <>
               <HeroSection />
               <NavbarMenu />
               <main>
                    <ContentSection />
               </main>
          </>
     )
}
