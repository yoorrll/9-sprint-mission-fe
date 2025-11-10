"use client";

import Image from "next/image";
import { useState } from "react";
import searchIcon from "@/assets/icons/ic_search.png";
import arrowDown from "@/assets/icons/ic_arrow_down.png";

export default function ActiveBar({ onSearch, onSortChange }) {
  const [sort, setSort] = useState("recent");
  const [openBtn, setOpenBtn] = useState(false);
  const [search, setSearch] = useState("");

  const toggleDropdown = () => setOpenBtn(!openBtn);

  const handleSortChange = (value) => {
    setSort(value);
    setOpenBtn(false);
    onSortChange?.(value);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch?.(value);
  };

  return (
    <div className="flex justify-between gap-4 w-full">
      <div className="w-full relative">
        <Image
          src={searchIcon}
          alt="검색 아이콘"
          className="absolute top-2 left-4 w-6 h-6"
        />
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="검색할 상품을 입력해주세요"
          className="w-full py-[9px] pr-[20px] pl-12 h-10 rounded-[12px] bg-[var(--Secondary-100)] placeholder-[var(--Secondary-400)]"
        />
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-[130px] h-10 px-4 py-3 rounded-xl border border-[var(--Cool-Gray-200)] bg-white text-[var(--Secondary-800)] cursor-pointer"
        >
          {sort === "recent" ? "최신순" : "좋아요순"}
          <Image
            src={arrowDown}
            alt="드롭다운 버튼"
            className="absolute top-2.5 right-4 w-6 h-6"
          />
        </button>

        {openBtn && (
          <ul className="absolute top-full mt-2 w-[130px] text-center">
            <li
              onClick={() => handleSortChange("recent")}
              className="bg-white text-secondary-800 h-10 flex items-center justify-center cursor-pointer rounded-t-xl border border-[var(--Cool-Gray-200)]"
            >
              최신순
            </li>
            <li
              onClick={() => handleSortChange("favorite")}
              className="bg-white text-secondary-800 h-10 flex items-center justify-center cursor-pointer rounded-b-xl border-x border border-[var(--Cool-Gray-200)] border-t-0"
            >
              좋아요순
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
