"use client";
import Cards from "@/components/ui/cards";
import { Chat } from "@/components/ui/cards";
import useStore from "@/store/useStore";
const url = "https://tum.support/sendmsg/lolttest";
const username = "a";
const password = "aZJnk_JwKYtqQa84dUFB";
const encodedCredentials = Buffer.from(`${username}:${password}`).toString(
  "base64"
);

async function getData() {
  const res = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  return res;
}
export default function Home() {
  const { toggle }: any = useStore();
  return (
    <>
      <main className="flex items-center justify-center p-8 bg-white h-screen w-screen">
        <div className="w-screen relative h-[800px] rounded-[24px] bg-[#F1F5F9] overflow-auto p-6">
          {toggle && (
            <>
              <h1 className="font-semibold text-4xl mb-4">Hello Leon!</h1>
              <p className="mb-6">
                Use this chatbot to recieve support from the TUM School of
                Management
              </p>
            </>
          )}
          <Cards />
          <div className="flex justify-center items-end">
            <Chat />
          </div>
        </div>
      </main>
    </>
  );
}
