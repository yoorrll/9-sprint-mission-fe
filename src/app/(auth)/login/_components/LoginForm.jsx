"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { USER_DATA } from "@/lib/auth/user-data";
import { isEmailValid, isPasswordValid } from "@/lib/auth/validation";
import InputField from "@/components/auth/InputField";
import Modal from "@/components/auth/Modal";
import SocialLogin from "@/components/auth/SocialLogin";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [modalMessage, setModalMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [id]:
          id === "email"
            ? "이메일을 입력해주세요."
            : "비밀번호를 입력해주세요.",
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
    } else {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleLogin = () => {
    const user = USER_DATA.find((data) => data.email === email);
    if (!user || user.password !== password) {
      setModalMessage("비밀번호가 일치하지 않습니다.");
      return;
    }
    router.push("/articles");
  };

  const allValid = email && password && !errors.email && !errors.password;

  return (
    <>
      <InputField
        id="email"
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
        errorMessage={errors.email}
      />

      <InputField
        id="password"
        label="비밀번호"
        type={showPassword ? "text" : "password"}
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handleBlur}
        errorMessage={errors.password}
        togglePasswordVisible={() => setShowPassword((prev) => !prev)}
      />

      <button
        type="button"
        disabled={!allValid}
        onClick={handleLogin}
        className={`w-full h-14 rounded-full text-white text-lg font-semibold ${
          allValid ? "bg-[var(--Primary-100)]" : "bg-[var(--Secondary-400)]"
        }`}
      >
        로그인
      </button>

      <SocialLogin />

      <Modal message={modalMessage} onClose={() => setModalMessage("")} />
    </>
  );
}
