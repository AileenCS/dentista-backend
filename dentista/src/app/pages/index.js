
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
export default function HeroBanner() { 
  return (
    <section className="flex flex-col items-center min-h-screen min-w-full justify-between bg-primary-seccion">
    <Header/>
    <div className="flex flex-row justify-center">
    <Banner/>
    </div>
      
    </section>
  );
}
