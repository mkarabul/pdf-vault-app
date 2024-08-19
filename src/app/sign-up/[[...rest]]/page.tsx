import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-8 mx-auto w-fit">
      <SignUp />
    </div>
  );
}
