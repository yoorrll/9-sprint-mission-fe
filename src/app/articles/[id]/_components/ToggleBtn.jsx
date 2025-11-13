"use client";

import Image from "next/image";
import moreBtn from "@/assets/icons/ic_kebab.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ToggleBtn({ type = "post", id }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggle = () => setOpen((prev) => !prev);

  const handleEdit = () => {
    if (type === "post") router.push(`/post/${id}/edit`);
    else if (type === "comment") router.push(`/post/${id}/comment/edit`);
    setOpen(false);
  };

  const handleDelete = () => {
    // fetch(`/api/${type}/${id}`)
    setOpen(false);
  };

  return (
    <div className="relative">
      <Image
        src={moreBtn}
        alt="더보기 버튼"
        className="w-6 h-6 cursor-pointer"
        onClick={toggle}
      />

      {open && (
        <ul className="w-[139px] absolute right-0 top-full w-[100px] bg-white rounded-[8px] border border-[var(--Cool-Gray-200)] text-center z-10 text-[var(--Cool-Gray-500)] text-center text-[16px]">
          <li
            className="pt-4 pb-3 flex items-center justify-center cursor-pointer"
            onClick={handleEdit}
          >
            수정하기
          </li>
          <li
            className="pt-3 pb-4 flex items-center justify-center cursor-pointer border-t border-[var(--Cool-Gray-200)]"
            onClick={handleDelete}
          >
            삭제하기
          </li>
        </ul>
      )}
    </div>
  );
}
