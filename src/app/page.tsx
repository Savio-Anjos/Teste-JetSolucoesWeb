import { Table } from "./components/table";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center overflow-x-hidden p-9">
      <section className="w-full flex justify-center border ">
        <Table />
      </section>
    </main>
  );
}
