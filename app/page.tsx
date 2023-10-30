import HeroSection from '@/components/HeroSection'
import Header from '@/components/Header'
import Company from '@/components/Company'

export default function Home() {
  return (
    <main className="container mx-auto  md:px-0">
    <Header />
    <HeroSection />
    <Company />
</main>
  )
}
