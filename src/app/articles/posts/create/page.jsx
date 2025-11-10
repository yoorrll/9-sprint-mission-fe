"use client";

import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import PageLayout from "@/components/common/PageLayout";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isActive = title.trim() && content.trim();

  return (
    <PageLayout>
      <div className="flex flex-col items-start my-6 max-w-[1200px] w-full">
        <div className="w-full flex flex-row justify-between mb-8">
          <h1 className="text-[var(--Cool-Gray-900,#111827)] text-[20px] font-bold self-start">
            게시글 쓰기
          </h1>

          <Link href="/articles/posts/1">
            <button
              className={clsx(
                "flex h-[42px] px-[23px] py-[12px] justify-center items-center gap-[10px] rounded-[8px] mt-[7px] cursor-pointer font-semibold",
                isActive
                  ? "bg-[var(--Primary-100)] text-white"
                  : "bg-[var(--Cool-Gray-400)] text-[var(--Cool-Gray-100)]"
              )}
            >
              등록
            </button>
          </Link>
        </div>

        <div className="w-full flex flex-col gap-6 text-[var(--Secondary-800)] text-[18px] font-bold leading-[26px]">
          <div className="flex flex-col gap-3">
            <p>*제목</p>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
              className="flex h-[56px] px-[24px] py-[16px] items-start gap-[10px] self-stretch rounded-[12px] bg-[var(--Cool-Gray-100)] text-[var(--Secondary-400)] text-[16px] leading-[26px] w-full"
            />
          </div>

          <div className="flex flex-col gap-3">
            <p>*내용</p>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력해주세요"
              className="flex h-[282px] px-[24px] py-[16px] gap-[10px] rounded-[12px] bg-[var(--Cool-Gray-100)] text-[var(--Secondary-400)] text-[16px] leading-[26px] w-full"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
