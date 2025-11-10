export default function PageLayout({ children }) {
  return (
    <div className="flex justify-center items-start min-h-screen">
      {children}
    </div>
  );
}
