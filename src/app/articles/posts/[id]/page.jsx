"use client";

import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import PageLayout from "@/components/common/PageLayout";
import profile from "@/assets/icons/ic_profile.png";
import heart from "@/assets/icons/ic_heart.png";
import line from "@/assets/icons/ic_line.png";
import Comment from "./_components/Comment";
import NoComment from "./_components/NoComment";
import ComebackBtn from "./_components/ComebackBtn";
import ToggleBtn from "./_components/ToggleBtn";

export default function PostIdPage() {
  const mockPost = {
    title: "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?",
    author: "총명한판다",
    likes: "123",
    date: "2024. 04. 16",
  };

  const [comments, setComments] = useState([
    {
      id: 1,
      description: "혹시 사용기간이 어떻게 되실까요?",
      author: "똑똑한판다",
      date: "1시간 전",
    },
    {
      id: 2,
      description: "혹시 사용기간이 어떻게 되실까요?",
      author: "똑똑한판다",
      date: "2시간 전",
    },
    {
      id: 3,
      description: "혹시 사용기간이 어떻게 되실까요?",
      author: "똑똑한판다",
      date: "3시간 전",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newId =
      comments.length > 0 ? Math.max(...comments.map((c) => c.id)) + 1 : 1;

    const commentObj = {
      id: newId,
      description: newComment,
      author: "바보 판다",
      date: "방금 전",
    };

    setComments([commentObj, ...comments]);
    setNewComment("");
  };

  return (
    <PageLayout>
      <div className="flex flex-col  max-w-[1200px] w-full gap-10">
        <div className="flex flex-col mt-[34px]">
          <div className="flex items-center justify-between">
            <p className="text-[var(--Cool-Gray-800)] text-[20px] font-bold leading-[32px]">
              {mockPost.title}
            </p>

            <ToggleBtn type="post" id={mockPost.id} />
          </div>

          <div className="flex items-center my-4 text-[14px] leading-[24px] ">
            <Image
              src={profile}
              alt="프로필 이미지"
              className="w-10 h-10 mr-4"
            />
            <span className="mr-2 text-[var(--Secondary-600)] font-medium">
              {mockPost.author}
            </span>
            <span className="text-[var(--Cool-Gray-400)] font-normal">
              {mockPost.date}
            </span>

            <Image src={line} alt="수직선" className="h-[34px] mx-8" />

            <div className="flex items-center h-[40px] px-[12px] py-[4px] gap-1 rounded-[35px] border border-[var(--Secondary-200)] text-[var(--Cool-Gray-500)]  bg-white text-[16px] font-medium leading-[26px]">
              <Image src={heart} alt="하트 아이콘" className="w-8 h-8" />
              <span>{mockPost.likes}</span>
            </div>
          </div>

          <div className="h-0 self-stretch border-[1px] border-[var(--Cool-Gray-200)]"></div>

          <p className="mt-6 mb-8">{mockPost.title}</p>

          <div className="flex flex-col justify-center items-start gap-[9px] self-stretch text-[16px] font-semibold leading-[26px]">
            <p className="text-[var(--Cool-Gray-900)]">댓글달기</p>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력해주세요."
              className="flex h-[104px] px-[24px] py-[16px] items-start gap-[10px] self-stretch text-[var(--Secondary-400)] rounded-[12px] bg-[var(--Cool-Gray-100)] font-normal"
            />
            <div className="self-end">
              <button
                onClick={handleAddComment}
                className={clsx(
                  "flex h-[42px] px-[23px] py-[12px] justify-center items-center gap-[10px] rounded-[8px] mt-[7px] cursor-pointer", // 기본 스타일 유지
                  newComment.trim()
                    ? "bg-[var(--Primary-100)] text-white"
                    : "bg-[var(--Cool-Gray-400)] text-[var(--Cool-Gray-100)]"
                )}
              >
                등록
              </button>
            </div>
          </div>
        </div>

        {comments.length > 0 ? (
          <div className="flex flex-col gap-6 mb-6">
            {comments.map((item) => (
              <Comment key={item.id} comment={item} />
            ))}
            <div className="flex justify-center my-16">
              <ComebackBtn />
            </div>
          </div>
        ) : (
          <NoComment />
        )}
      </div>
    </PageLayout>
  );
}
