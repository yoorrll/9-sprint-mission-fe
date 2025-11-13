"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { USER_DATA } from "@/lib/auth/user-data";
import InputField from "@/components/auth/InputField";
import Modal from "@/components/auth/Modal";
import SocialLogin from "@/components/auth/SocialLogin";
import {
  isEmailValid,
  isPasswordValid,
  isPasswordChecked,
} from "@/lib/auth/validation";

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    passwordConfirm: false,
  });
  const [errors, setErrors] = useState({});
  const [modalMessage, setModalMessage] = useState("");
  const [isRedirectAfterClose, setIsRedirectAfterClose] = useState(false);

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [id]:
          id === "email" ? "이메일을 입력해주세요." : "필수 입력 항목입니다.",
      }));
      return;
    }

    if (id === "email" && !isEmailValid(value)) {
      setErrors((prev) => ({ ...prev, email: "잘못된 이메일 형식입니다." }));
    } else if (id === "password" && !isPasswordValid(value)) {
      setErrors((prev) => ({
        ...prev,
        password: "비밀번호를 8자 이상 입력해주세요.",
      }));
    } else if (
      id === "passwordConfirm" &&
      !isPasswordChecked(form.password, value)
    ) {
      setErrors((prev) => ({
        ...prev,
        passwordConfirm: "비밀번호가 일치하지 않습니다.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (USER_DATA.some((user) => user.email === form.email)) {
      setModalMessage("사용 중인 이메일입니다.");
      return;
    }
    setModalMessage("가입 완료되었습니다.");
    setIsRedirectAfterClose(true);
  };

  const handleCloseModal = () => {
    setModalMessage("");
    if (isRedirectAfterClose) {
      router.push("/login");
    }
  };

  const allValid =
    form.email &&
    form.nickname &&
    form.password &&
    form.passwordConfirm &&
    !errors.email &&
    !errors.password &&
    !errors.passwordConfirm;

  return (
    <>
      <InputField
        id="email"
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.email}
      />
      <InputField
        id="nickname"
        label="닉네임"
        type="text"
        placeholder="닉네임을 입력해주세요"
        value={form.nickname}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.nickname}
      />
      <InputField
        id="password"
        label="비밀번호"
        type={showPassword.password ? "text" : "password"}
        placeholder="비밀번호를 입력해주세요"
        value={form.password}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.password}
        togglePasswordVisible={() =>
          setShowPassword((prev) => ({ ...prev, password: !prev.password }))
        }
      />
      <InputField
        id="passwordConfirm"
        label="비밀번호 확인"
        type={showPassword.passwordConfirm ? "text" : "password"}
        placeholder="비밀번호를 다시 한 번 입력해주세요"
        value={form.passwordConfirm}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.passwordConfirm}
        togglePasswordVisible={() =>
          setShowPassword((prev) => ({
            ...prev,
            passwordConfirm: !prev.passwordConfirm,
          }))
        }
      />

      <button
        type="button"
        disabled={!allValid}
        onClick={handleSubmit}
        className={`w-full h-14 rounded-full text-white text-lg font-semibold ${
          allValid ? "bg-[var(--Primary-100)]" : "bg-[var(--Secondary-400)]"
        }`}
      >
        회원가입
      </button>

      <SocialLogin />
      <Modal message={modalMessage} onClose={handleCloseModal} />
    </>
  );
}
