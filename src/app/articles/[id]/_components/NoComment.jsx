import Image from "next/image";
import ComebackBtn from "./ComebackBtn";
import commentImg from "@/assets/images/empty_comment.png";

export default function NoComment() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col gap-4">
        <Image src={commentImg} alt="댓글 이미지" />
        <div className="text-[var(--Secondary-400)] text-center text-[16px] leading-[26px]">
          <p>아직 댓글이 없어요,</p>
          <p>지금 댓글을 달아보세요!</p>
        </div>
      </div>

      <ComebackBtn />
    </div>
  );
}
