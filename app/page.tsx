import Image from "next/image";
import SimpleCard from "@/components/cards/simple-card/simple-card";
import Header from "@/components/header/header";
export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <SimpleCard message="Hallo world." />
      </main>
    </>
  );
}