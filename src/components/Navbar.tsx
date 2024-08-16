import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <nav
      className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200
     bg-white/75 backdrop-blur-lg transition-all rounded-md"
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 font-semibold">
            <span>PDF-Vault</span>
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Dashboard
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
