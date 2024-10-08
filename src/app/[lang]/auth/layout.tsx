// Components
import Image from "next/image";

// Assets
import AuthImage from "/public/images/AuthImage.png";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen md:flex-row flex-col">
      <Image
        className="h-screen w-1/2 hidden lg:block"
        src={AuthImage.src}
        alt={""}
        width="1000"
        height="1000"
      />
      <div className="lg:w-1/2 w-full h-screen lg:px-[120px] lg:py-20 py-10 px-14 overflow-auto">
        {children}
      </div>
    </div>
  );
}
