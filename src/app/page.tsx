'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import FloresPng from "../assets/images/flores-splash.png";
import CasaPng from "../assets/images/casa-splash.png";
import { useEffect } from "react";

export default function Home() {
  const husbandName = process.env.NEXT_PUBLIC_HUSBAND_NAME;
  const wifeName = process.env.NEXT_PUBLIC_WIFE_NAME;
  const weddingDate = process.env.NEXT_PUBLIC_WEDDING_DATE;

  const navigation = useRouter();

  useEffect(() => {
    setTimeout(() => {
      navigation.push("/presentes");
    }, 2000);
  }, [])

  return (
    <main className="flex w-screen h-screen justify-center items-center bg-primary">
        <Image
          src={FloresPng}
          alt="Flores nos cantos da tela"
          className="w-screen h-screen object-cover absolute top-0 left-0 z-0"
        />
        <div className="w-full flex flex-col items-center">
          <Image
            src={CasaPng}
            alt="Casa no centro da tela"
            className="w-2/6 h-auto"
          />
          <div className="flex gap-1">
            <h1 className="text-3xl font-bold">{husbandName}</h1>
            <h3 className="text-3xl font-cursive">&</h3>
            <h1 className="text-3xl font-bold">{wifeName}</h1>
          </div>
          <h1 className="text-primary-dark text-2xl font-cursive">{weddingDate}</h1>
        </div>
    </main>
  );
}
