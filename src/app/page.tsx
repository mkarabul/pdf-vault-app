import LandingPage from "@/components/LandingPage";
import { SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <SignedOut>
      <LandingPage />
    </SignedOut>
  );
}
