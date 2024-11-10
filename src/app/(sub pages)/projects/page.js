import Image from "next/image";
import bg from "../../../../public/background/S1.avif";
import staff from "../../../../public/ssword-removebg-preview.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";

// const Staff = dynamic(() => import("@/components/models/Staff"), {
//   ssr: false,
// });

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      {/* <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div> */}

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <Image
          src={staff}
          alt="Astronaut Image"
          width={200}
          height={200}
          className="mr-20 animate-float  my-10"
        />
      </div>
    </>
  );
}
