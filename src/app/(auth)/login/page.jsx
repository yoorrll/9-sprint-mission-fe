import Link from "next/link";
import LoginForm from "./_components/LoginForm";
import MarketLogo from "@/components/auth/MarketLogo";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <MarketLogo />
      <main className="w-full max-w-[40rem] flex flex-col gap-6 mt-12">
        <LoginForm />
        <div className="flex justify-center gap-2 text-base">
          <span className="text-[var(--Secondary-800)]">
            판다마켓이 처음이신가요?
          </span>
          <Link className="text-[var(--Primary-100)] underline" href="/signup">
            회원가입
          </Link>
        </div>
      </main>
    </div>
  );
}
