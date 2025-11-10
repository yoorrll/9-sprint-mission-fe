import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/footer/ic_facebook.png";
import twitterIcon from "@/assets/footer/ic_twitter.png";
import youtubeIcon from "@/assets/footer/ic_youtube.png";
import instagramIcon from "@/assets/footer/ic_instagram.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--Secondary-900)] flex justify-between h-[160px] py-8 px-52 gap-2.5 flex-shrink-0 whitespace-nowrap w-full">
      <p className="text-[var(--Secondary-400)]">ⓒcodeit - 2024</p>

      <div className="flex items-start gap-[30px] text-[var(--Secondary-400)]">
        <Link href="/">Privacy Policy</Link>
        <Link href="/">FAQ</Link>
      </div>

      <ul className="flex w-[116px] items-start gap-3 flex-shrink-0">
        <li>
          <Link href="https://facebook.com" target="_blank">
            <Image className="w-5 h-5" src={facebookIcon} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link href="https://x.com" target="_blank">
            <Image className="w-5 h-5" src={twitterIcon} alt="Twitter" />
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com" target="_blank">
            <Image className="w-5 h-5" src={youtubeIcon} alt="YouTube" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com" target="_blank">
            <Image className="w-5 h-5" src={instagramIcon} alt="Instagram" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
