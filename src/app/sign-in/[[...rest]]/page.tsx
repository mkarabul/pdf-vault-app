import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-8 mx-auto w-fit">
      <SignIn />
    </div>
  );
}
