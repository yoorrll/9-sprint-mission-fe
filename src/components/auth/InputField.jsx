import Image from "next/image";
import visibility_on from "@/assets/icons/btn_visibility_on.svg";
import visibility_off from "@/assets/icons/btn_visibility_off.svg";

export default function InputField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  errorMessage,
  togglePasswordVisible,
}) {
  return (
    <div className="relative flex flex-col gap-4 w-full">
      <label
        htmlFor={id}
        className="text-[1.125rem] font-bold text-[var(--Secondary-800)]"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full h-14 px-6 rounded-xl bg-[var(--Cool-Gray-100)] outline-none border 
          ${
            errorMessage
              ? "border-[var(--error-red)]"
              : " border-transparent focus:border-[var(--Primary-100)]"
          } 
          placeholder:text-[var(--Secondary-400)]`}
      />

      {errorMessage && (
        <p className="text-[var(--error-red)] text-sm font-semibold ml-4 -mt-2">
          {errorMessage}
        </p>
      )}

      {id === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisible}
          className="absolute top-[60px] right-6 bg-transparent"
        >
          <Image
            className="w-6 h-6"
            src={type === "password" ? visibility_off : visibility_on}
            alt={type === "password" ? "비밀번호 숨기기" : "비밀번호 보기"}
          />
        </button>
      )}
    </div>
  );
}
