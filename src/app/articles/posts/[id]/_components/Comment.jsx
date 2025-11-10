import Image from "next/image";
import profile from "@/assets/icons/ic_profile.png";
import ToggleBtn from "./ToggleBtn";

export default function Comment({ comment }) {
  return (
    <div className="flex flex-col gap-6 border-b border-[var(--Secondary-300)] bg-[var(--Background-Gray)]">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[var(--Secondary-800)] text-[14px] leading-[24px]">
          {comment.description}
        </p>

        <ToggleBtn type="comment" id={comment.id} />
      </div>

      <div className="flex flex-row gap-2 justify-start items-center mb-3">
        <Image src={profile} alt="프로필 이미지" className="w-8 h-8" />
        <div className="flex flex-col gap-1 leading-[18px]">
          <p className="text-[var(--Secondary-600)] text-[12px]">
            {comment.author}
          </p>
          <p className="text-[var(--Secondary-400)] text-xs">{comment.date}</p>
        </div>
      </div>
    </div>
  );
}
