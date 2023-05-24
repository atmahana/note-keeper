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
    <div className="navbar bg-white sm:px-12 py-5 px-5 drop-shadow">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl normal-case text-amber-500 font-semibold">
          Keeper
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar placeholder"
          >
            <div className="bg-amber-500 text-white rounded-full w-12">
              <span>MX</span>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact bg-white dropdown-content rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
