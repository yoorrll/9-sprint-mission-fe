export default function Modal({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
      <div className="flex flex-col gap-[40px] w-[540px] h-[250px] bg-white rounded-lg justify-center items-center ">
        <p className="text-[var(--Secondary-800)] text-center font-medium text-[18px] leading-[26px]">
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-28 h-12 bg-[var(--Primary-100)] text-white rounded-lg font-semibold"
        >
          확인
        </button>
      </div>
    </div>
  );
}
