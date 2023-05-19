import { useState } from "react";

export default function Header() {
  setInterval(updateTime, 100000);
  const currentTime = new Date().toLocaleDateString();
  const [time, setTime] = useState(currentTime);

  function updateTime() {
    const now = new Date().toLocaleDateString();
    setTime(now);
  }

  return (
    <header className=" bg-white sm:px-12 py-5 px-5 drop-shadow">
      <nav className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div>
          <a href="#" className="text-3xl text-amber-500 font-semibold">
            Keeper
          </a>
        </div>
        <div className="text-lg text-amber-500 font-semibold">
          {time}
        </div>
      </nav>
    </header>
  );
}
