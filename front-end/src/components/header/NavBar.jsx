import Link from "next/link";

export default function NavBar() {
  const navItemsStyle = "px-4 py-2 hover:bg-gray-100 hover:rounded-md cursor-pointer text-[#333] font-extrabold uppercase text-xs hover:opacity-70 transition";
  
  return (
    <nav className="mt-4 absolute top-12 right-0 bg-white shadow-md rounded-md w-48">
      <ul className="flex flex-col">
        <Link href="/" className={navItemsStyle}>Home</Link>
        <Link href="/analisefa" className={navItemsStyle}>Perfil do fã</Link>
        <Link href="/chatbot" className={navItemsStyle}>Chat Bot</Link>
      </ul>
    </nav>
  )
}