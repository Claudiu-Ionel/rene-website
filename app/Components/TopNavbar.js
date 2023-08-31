"use client";
export default function nav({ setSidebarOpen }) {
  return (
    <nav
      className={`hidden md:flex justify-between px-10 overflow-hidden font-secondary relative z-10 top-0 `}
    >
      <div className="px-5 py-2">
        <h1 className="text-2xl font-primary">Julius Rene</h1>
      </div>
      <button
        onClick={() => {
          setSidebarOpen(true);
        }}
      >
        <div className="w-5 h-[2px] bg-[#222] mb-2"></div>
        <div className="w-5 h-[2px] bg-[#222]"></div>
      </button>
    </nav>
  );
}
