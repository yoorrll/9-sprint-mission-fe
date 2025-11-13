import Link from "next/link";
import SignupForm from "./_components/SignupForm";
import MarketLogo from "@/components/auth/MarketLogo";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <MarketLogo />
      <main className="w-full max-w-[40rem] flex flex-col gap-6 mt-12">
        <SignupForm />
        <div className="flex justify-center gap-2 text-base">
          <span className="text-[var(--Secondary-800)]">
            이미 회원이신가요?
          </span>
          <Link className="text-[var(--Primary-100)] underline" href="/login">
            로그인
          </Link>
        </div>
      </main>
    </div>
  );
}
