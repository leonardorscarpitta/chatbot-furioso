export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="rounded-lg bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {year} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}