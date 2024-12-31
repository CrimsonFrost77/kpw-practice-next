import Image from "next/image";
import HeroSection from '@/components/HeroSection';
import InfoSection from '@/components/InfoSection';
import FindInformation from '@/components/FindInformation';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      <FindInformation />
    </div>
  );
}
