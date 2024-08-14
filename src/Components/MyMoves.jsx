import Content from "./Content";

export default function MyMoves() {
  return (
    <div className="flex">
      <aside className="fixed left-2 top-0 w-50 bg-white  ">
        <nav className="mt-4">
          <ul className="space-y-2">
            <li className="flex  cursor-pointer items-center p-2 hover:bg-zinc-100 hover:border-l-4 hover:border-red-500 ">
              <i className="fa-solid fa-truck"></i>
              <span className="ml-2 font-bold text-zinc-900 ">My Moves</span>
            </li>
            <li className="flex cursor-pointer items-center p-2 hover:bg-zinc-100 hover:border-l-4 hover:border-red-500 ">
              <i className="fa-solid fa-user"></i>
              <span className="ml-2 font-bold text-zinc-900 ">My Profile</span>
            </li>
            <li className="flex cursor-pointer items-center p-2 hover:bg-zinc-100 hover:border-l-4 hover:border-red-500 ">
              <i className="fa-solid fa-message"></i>
              <span className="ml-2 font-bold text-zinc-900 ">Get Quote</span>
            </li>
            <li className="flex cursor-pointer items-center p-2 hover:bg-zinc-100 hover:border-l-4 hover:border-red-500 ">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span className="ml-2 font-bold text-zinc-900 ">Logout</span>
            </li>
          </ul>
        </nav>
      </aside>

      <Content />
    </div>
  );
}
