import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="pt-8 mx-auto w-fit">
      <SignIn />
    </div>
  );
}
