import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the GCP Study App</h1>
      <p className="mt-4 text-lg">Your journey to mastering Google Cloud Platform starts here!</p>
      <Image
        src="/gcp-logo.png"
        alt="GCP Logo"
        width={200}
        height={200}
        className="mt-8 rounded-lg"
      />
    </main>
  );
}
