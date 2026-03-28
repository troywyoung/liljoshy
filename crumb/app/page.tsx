import AnnouncementBar from "@/components/AnnouncementBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import QuickStart from "@/components/QuickStart";
import TrustBar from "@/components/TrustBar";
import GroundingParagraph from "@/components/GroundingParagraph";
import Problem from "@/components/Problem";
import Reframe from "@/components/Reframe";
import HowItWorks from "@/components/HowItWorks";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import AuditFlywheel from "@/components/AuditFlywheel";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import UseCases from "@/components/UseCases";
import CrumbDots from "@/components/CrumbDots";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#F5F0E8", color: "#1C2B3A", minHeight: "100vh" }}>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <TrustBar />
      <GroundingParagraph />
      <Problem />
      <CrumbDots variant="divider" />
      <UseCases />
      <CrumbDots variant="divider" />
      <HowItWorks />
      <QuickStart />
      <CrumbDots variant="divider" />
      <Reframe />
      <CrumbDots variant="divider" />
      <FeatureDeepDive />
      <CrumbDots variant="divider" />
      <AuditFlywheel />
      <CrumbDots variant="divider" />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
