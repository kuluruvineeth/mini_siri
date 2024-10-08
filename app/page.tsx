import Image from "next/image";
import AssistantButton from "@/components/AssistantButton/AssistantButton";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <main className="flex min-h-screen flex-col justify-center items-center p-24">
          <div>
            <Image
              className=""
              src={"/mini_siri.png"}
              alt="Main logo"
              width={650}
              height={100}
            />
          </div>
        </main>
        <div className="absolute bottom-0 right-0 pb-10 pr-10">
          <AssistantButton />
        </div>
      </div>
    </div>
  );
}
