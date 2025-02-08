"use server";

import Breadcrumb from "@/components/Atoms/Breadcrumb/Breadcrumb";
import CartContainer from "@/components/Organisms/CartContainer/CartContainer";

export default async function Cart() {
  return (
    <main className="flex flex-col py-8 px-32 max-sm:py-8 max-sm:px-6">
      <Breadcrumb textContent={"Back to Catalog"} href={"/"} />
      <CartContainer />
    </main>
  );
}
