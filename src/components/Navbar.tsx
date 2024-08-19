import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200
     bg-white/95 backdrop-blur-lg transition-all rounded-md"
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 font-semibold">
            <span>PDF-Vault</span>
          </Link>
          <div className="items-center space-x-4 flex">
            <>
              <Link
                className={buttonVariants({
                  variant: "default",
                })}
                href="/sign-in"
              >
                Sign In
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
