import Image from "next/image";
import pandaFace from "@/assets/logo/panda-logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white px-52 flex justify-between items-center whitespace-nowrap sticky top-0 border-b border-gray-300 z-99">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <Image
            className="w-10 h-10 cursor-pointer"
            src={pandaFace}
            alt="판다마켓 로고"
            width={40}
            height={40}
          />
          <Link href="/">
            <h1 className="font-[family-name:var(--font-rokaf-sans)] text-[var(--Primary-100)] text-[25.633px] cursor-pointer">
              판다마켓
            </h1>
          </Link>
        </div>

        <ul className="flex">
          <li className="text-[var(--Primary-100)] py-[21px] px-4 text-lg font-bold leading-normal cursor-pointer">
            <Link href="/articles">자유게시판</Link>
          </li>
          <li className="text-[var(--Secondary-600)] py-[21px] px-4 text-lg font-bold leading-normal cursor-pointer">
            <Link href="/">중고마켓</Link>
          </li>
        </ul>
      </div>

      <button className="bg-[var(--Primary-100)] text-[var(--White)] rounded-lg flex h-[42px] py-3 px-6 justify-center items-center gap-2 leading-normal font-semibold cursor-pointer">
        로그인
      </button>
    </header>
  );
}
