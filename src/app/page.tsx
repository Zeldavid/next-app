"use server";
import Catalog from "@/components/Organisms/Catalog/Catalog";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <Catalog />
    </main>
  );
}
