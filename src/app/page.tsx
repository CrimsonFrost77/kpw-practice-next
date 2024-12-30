import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/git_logo_transparent.webp"
        alt="Kaliakair-pourashava-logo"
        width={48}
        height={48}
        className="w-auto h-12"
      />
      <h1 className="text-xl font-semibold hidden md:block">
        Kaliakair Municipality
      </h1>
    </div>
  );
}
