import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center py-(--space-section)">
        <Container className="flex flex-col gap-(--space-large)">
          <h1>Ptich&Co</h1>
          <p>Гостевые дома в Чемальском районе Республики Алтай.</p>
          <p>Новый сайт в разработке.</p>
        </Container>
      </main>
    </>
  );
}
