"use client";

import Image from "next/image";
import Link from "next/link";
import ActiveBar from "./ActiveBar";
import notebook from "@/assets/images/notebook.png";
import profile from "@/assets/icons/ic_profile.png";
import heart from "@/assets/icons/ic_heart.png";
import { useState } from "react";

export default function Items() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortType, setSortType] = useState("recent");

  const mockPost = [
    {
      id: 1,
      title: "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?",
      author: "총명한 판다",
      likes: "9999+",
      date: "2024.04.16",
      image: notebook,
    },
    {
      id: 2,
      title: "테스트2",
      author: "안 총명한 판다",
      likes: 50,
      date: "2024.04.15",
      image: notebook,
    },
    {
      id: 3,
      title: "테스트3",
      author: "바보 판다",
      likes: 99,
      date: "2024.04.14",
      image: notebook,
    },
    {
      id: 4,
      title: "테스트4",
      author: "그냥 판다",
      likes: 15,
      date: "2024.04.13",
      image: notebook,
    },
  ];

  const filteredPosts = mockPost.filter((post) =>
    post.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const sortedPosts =
    sortType === "recent"
      ? [...filteredPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
      : [...filteredPosts].sort((a, b) => b.likes - a.likes);

  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-[var(--Cool-Gray-900,#111827)] text-[20px] font-bold">
          게시글
        </h1>
        <Link href="/articles/posts/create">
          <button className="flex h-[42px] px-[23px] py-[12px] justify-center items-center gap-[10px] rounded-[8px] bg-[var(--brand-blue,#3692FF)] text-[var(--White)] font-semibold cursor-pointer">
            글쓰기
          </button>
        </Link>
      </div>

      <ActiveBar onSearch={setSearchKeyword} onSortChange={setSortType} />

      <article className="flex flex-col gap-6 w-full">
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[var(--Background-Gray)] flex flex-col items-start gap-6 border-b border-[var(--Cool-Gray-200)]"
            >
              <div className="flex items-start gap-2 self-stretch mb-4">
                <p className="text-[var(--Cool-Gray-800)] text-[20px] font-semibold leading-[32px] w-full">
                  {post.title}
                </p>
                <div className="flex w-[72px] h-[72px] px-[13px] py-[12px] justify-center items-center rounded-[8px] border border-[var(--Cool-Gray-100)] bg-white">
                  <Image
                    src={notebook}
                    alt="상품 이미지"
                    className="w-[48px] h-[44px] flex-shrink-0"
                  />
                </div>
              </div>

              <div className="w-full flex justify-between items-center flex-1 mb-6">
                <div className="flex flex-row gap-[8px] text-[14px] leading-[24px]">
                  <Image
                    src={profile}
                    alt="프로필"
                    className="w-6 h-6 text-[var(--Cool-Gray-300)]"
                  />
                  <span className="text-[var(--Secondary-600)]">
                    {post.author}
                  </span>
                  <p className="text-[var(--Secondary-400)]">{post.date}</p>
                </div>

                <div className="flex flex-row gap-[8px]">
                  <Image
                    src={heart}
                    alt="하트 아이콘"
                    className="w-6 h-6 text-[var(--Cool-Gray-500)]"
                  />
                  <span className="text-[var(--Secondary-500,#6B7280)] text-[16px] leading-[26px]">
                    {post.likes}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center w-full">
            검색 결과가 없습니다.
          </p>
        )}
      </article>
    </div>
  );
}
