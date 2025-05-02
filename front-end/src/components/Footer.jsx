export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const developer = "Leonardo Rocha Scarpitta";

  return (
    <footer className="rounded-lg bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {year} Todos os direitos reservados.</p>
        <p className="text-sm">Desenvolvido por {developer}</p>
      </div>
    </footer>
  );
}