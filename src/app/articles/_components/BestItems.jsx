import dayjs from "dayjs";
import Image from "next/image";
import notebook from "@/assets/images/notebook.png";
import medal from "@/assets/icons/ic_medal.png";
import heart from "@/assets/icons/ic_heart.png";

export default function BestItems({ articles }) {
  const top3 = [...articles].sort((a, b) => b.likes - a.likes).slice(0, 3);

  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      <h1 className="text-[var(--Cool-Gray-900,#111827)] text-[20px] font-bold">
        베스트 게시글
      </h1>

      <article className="flex flex-row gap-6">
        {top3.map((post) => (
          <div
            key={post.id}
            className="bg-[var(--Cool-Gray-50)] rounded-[8px] flex w-[384px] px-6 flex-col items-start"
          >
            <div className="bg-[var(--Primary-100)] rounded-b-[16px] flex w-[102px] px-6 py-[2px] flex justify-center items-center gap-1 mb-4">
              <Image className="w-4 h-4" src={medal} alt="Best 메달 아이콘" />
              <span className="text-[var(--White)]">Best</span>
            </div>

            <div className="flex justify-center items-start gap-2 mb-[18px]">
              <p className="w-[256px] flex-shrink-0 text-[var(--Secondary-800)] text-[20px] font-[600] leading-8 mb-[26px]">
                {post.title}
              </p>
              <div className="rounded-[6px] flex w-[72px] h-[72px] px-[12px] py-[13.714px] justify-center items-center shrink-0 border border-[var(--Cool-Gray-200)] bg-white">
                <Image
                  className="w-[48px] h-[44px]"
                  src={notebook}
                  alt="상품 이미지"
                />
              </div>
            </div>

            <div className="flex justify-between items-center w-full mb-[9px]">
              <div className="inline-flex flex-row items-start gap-2  text-[14px] leading-[24px]">
                <span className="text-[var(--Secondary-600)]">총명한 판다</span>
                <div className="flex justify-end items-center gap-1">
                  <Image
                    className=" w-4 h-4 text-[var(--Secondary-500)]"
                    src={heart}
                    alt="하트 아이콘"
                  />
                  <span className="text-[var(--Secondary-500)]">9999+</span>
                </div>
              </div>

              <span className="text-[var(--Secondary-400)] text-[14px] leading-[24px]">
                {dayjs(post.createdAt).format("YYYY. MM. DD")}
              </span>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
}
