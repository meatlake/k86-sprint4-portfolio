import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-bg-image bg-cover bg-no-repeat">
      <div className="p-12 backdrop-blur-xl rounded-xl border border-2">
        <h1 className="text-5xl font-display text-white font-semibold">
          Welkom bij onze quiz
        </h1>
        <p className="text-white text-lg mt-4">Gemaakt door:</p>
        <ul className="mt-2 grid grid-cols-2 gap-2">
          <li className="text-white px-4 py-2 border border-2 rounded-lg text-2xl font-semibold">
            Kevin
          </li>
          <li className="text-white px-4 py-2 border border-2 rounded-lg text-2xl font-semibold">
            Femke
          </li>
          <li className="text-white px-4 py-2 border border-2 rounded-lg text-2xl font-semibold">
            Damian
          </li>
          <li className="text-white px-4 py-2 border border-2 rounded-lg text-2xl font-semibold">
            Julian
          </li>
        </ul>
      </div>
      <Link
        className="mt-8 px-20 py-3 bg-blue-500 rounded-lg text-2xl text-white font-semibold hover:bg-blue-700 transition-colors duration-200 ease-in-out"
        href="/quiz"
      >
        Begin
      </Link>
    </div>
  );
}
