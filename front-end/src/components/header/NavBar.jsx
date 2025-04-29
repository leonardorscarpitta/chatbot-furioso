import Link from "next/link";

export default function NavBar() {
  const navItemsStyle = "text-white font-extrabold uppercase text-2x hover:opacity-70 transition";
  
  return (
    <nav>
      <ul className="flex items-center gap-x-10">
        <Link href="/" className={navItemsStyle}>Home</Link>
        <Link href="/analisefa" className={navItemsStyle}>Perfil do fã</Link>
        <Link href="/chatbot" className={navItemsStyle}>Chat Bot</Link>
      </ul>
    </nav>
  )
}