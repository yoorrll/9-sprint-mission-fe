import Image from "next/image";
import Link from "next/link";
import googleIcon from "@/assets/icons/ic_google.png";
import kakaotalkIcon from "@/assets/icons/ic_kakaotalk.png";

export default function SocialLogin() {
  return (
    <div className="w-full bg-[#e6f2ff] py-4 px-6 rounded-md flex flex-col gap-2">
      <div className="flex w-full justify-between items-center">
        <p className="text-[var(--Secondary-800)] text-base">간편 로그인하기</p>
        <div className="flex gap-4">
          <Link href="https://www.google.com/">
            <Image className="w-10 h-10" src={googleIcon} alt="구글 로그인" />
          </Link>
          <Link href="https://www.kakaocorp.com/page/">
            <Image
              className="w-10 h-10"
              src={kakaotalkIcon}
              alt="카카오 로그인"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
