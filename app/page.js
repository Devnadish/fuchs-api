"use client";
import axios from "axios";
import { Passero_One } from "next/font/google";
import Image from "next/image";
export const dynamic = "force-dynamic";

export default function Home() {
  const addNewUser = async () => {
    const url = process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/user/register";
    const userData = {
      name: "khalid nadish 1972",
      email: "khalid@gmail.com 1972",
      mobile: "123456789 1972",
      password: "19721972",
    };

    const addUserToDB = await axios
      .post(url, userData)
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        console.error({ error });
      });

    console.log(addUserToDB);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            By khalid nadish
          </p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => addNewUser()}
        >
          Create dummy user
        </button>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/oneStop.png"
          alt="oneStop"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
