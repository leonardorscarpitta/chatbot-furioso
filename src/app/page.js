import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <section className="flex flex-col gap-y-4">
      <Header />
      <Main />
    </section>
  );
}
