import {
  RedirectToSignUp,
  SignedIn,
  SignedOut,
  UserProfile,
} from "@clerk/nextjs";

export default function SettingsPage() {
  return (
    <>
      <SignedIn>
        <div className="mx-auto pt-2 w-fit">
          <UserProfile />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut>
    </>
  );
}
