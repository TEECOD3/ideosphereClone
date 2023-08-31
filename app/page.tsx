import Herotexts from "@/components/Herotexts";
import ServicesList from "@/components/ServicesList";
import Hamburger from "@/components/ui/Hamburger";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" min-h-screen py-24 ">
      <section className="mt-0 lg:mt-20 flex flex-col gap-y-44">
        <section className="">
          <Herotexts />
        </section>

        <section className="">
          <ServicesList />
        </section>
      </section>
    </section>
  );
}
