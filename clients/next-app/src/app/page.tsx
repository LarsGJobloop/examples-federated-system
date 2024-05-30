import { WeatherReport } from "@/components/weatherReport/weatherReport";
import { WeatherWidget } from "@/components/weatherWidget/weatherWidget"

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="px-4">
      <section>
        <h1>Next App</h1>
      </section>
      <section>
        <h2>Client Component</h2>
        <WeatherWidget />
      </section>
      <section>
        <h2>Server Component</h2>
        <WeatherReport />
      </section>
    </main>
  );
}
