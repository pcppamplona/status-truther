import { useTheme } from "../context/ThemeProvider";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

export default function Header() {
  const { mode, toggleMode } = useTheme();

  return (
    <div className="bg-[var(--bgPrimaryColor)] text-[var(--titleColor)] py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full">
        <div className="flex justify-between items-center w-full sm:w-auto sm:flex-1">
          <img
            src="/Logo.png"
            alt="Logo"
            className="object-contain h-10 w-auto max-w-[150px]"
          />

          <div
            className="p-2 rounded-full bg-[var(--primaryColor)] text-[var(--bgPrimaryColor)] hover:opacity-80 transition sm:ml-4 cursor-pointer"
            onClick={toggleMode}
          >
            {mode === "dark" ? <FaRegMoon size={18} /> : <LuSun size={18} />}
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <div
            className="bg-[var(--bgSecondaryColor)] h-10 w-full sm:w-auto flex items-center justify-center rounded-lg px-4 cursor-pointer"
            onClick={() => {}}
          >
            <span className="text-[var(--primaryColor)] font-semibold text-xs">
              SUBSCRIBE TO UPDATES
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
