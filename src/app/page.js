import Image from "next/image";
import bg from "../../public/background/Space3.jpg";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import astro from "../../public/Screenshot_2024-11-10_104015-removebg-preview.png";

// import dynamic from "next/dynamic";
// const Wizard = dynamic(() => import("@/components/models/Wizard"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-100"
      />

      {/* <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <astro />
        </RenderModel>
      </div> */}

      <div className="w-full h-screen">
        <Navigation />
        <Image
          src={astro}
          alt="Astronaut Image"
          width={300}
          height={400}
          className="mx-auto animate-float scale-50 my-40"
        />
      </div>
    </main>
  );
}
