import Image from "next/image";
import Link from "next/link";
import back from "@/assets/icons/ic_back.png";

export default function ComebackBtn() {
  return (
    <Link href="/articles" className="flex flex-row">
      <button className="flex h-[48px] px-[64px] py-[12px] justify-center items-center gap-2 shrink-0 rounded-[40px] bg-[var(--Primary-100)] text-[var(--Cool-Gray-100)] text-center text-[18px] font-semibold leading-[26px] cursor-pointer">
        목록으로 돌아가기
        <Image src={back} alt="돌아가기" className="w-6 h-6" />
      </button>
    </Link>
  );
}
