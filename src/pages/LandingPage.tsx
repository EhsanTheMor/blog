import HeroSection from '../components/HeroSection'
import NavbarMenu from '../components/NavbarMenu'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'

export default function LandingPage() {
     return (
          <>
               <HeroSection />
               <NavbarMenu />
               <main>
                    <ContentSection />
                    <div className='full_divider'></div>
               </main>
               <Footer />
          </>
     )
}
