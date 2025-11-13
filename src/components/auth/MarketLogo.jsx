import Image from "next/image";
import Link from "next/link";
import big_logo from "@/assets/logo/panda-logo-big.png";

export default function MarketLogo() {
  return (
    <header>
      <Link className="flex justify-center items-end gap-6" href="/articles">
        <Image
          className="w-[104px] h-[104px]"
          src={big_logo}
          alt="판다마켓 로고"
        />
        <span className="text-[var(--brand-blue,#3692FF)] font-['rokafSans'] text-[66.344px] font-bold">
          판다마켓
        </span>
      </Link>
    </header>
  );
}
