// @ts-nocheck
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import useStore from "@/store/useStore";
import { useEffect, useState } from "react";
import TypingAnimation from "./TypingAnimation";
import { Input } from "./input";
import axios from "axios";
import Pdf from "./Pdf";
import { useCookies } from "react-cookie";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PdfViewer from "./Pdf";

const questions = [
  {
    topic: "Final Thesis",
    "0": "Where can I find more information on the final thesis?",
    "1": "Where can I find more information on preparing and submitting my final thesis?",
    "2": "How can I get a confirmation that I'll definitely graduate with at least a 4.0 in my thesis?",
  },
  {
    topic: "Exchnage Program",
    "0": "What are my possibilities to spend a semester abroad?",
    "1": "How do I apply for the TUMexchange Program?",
    "2": "When do I have to apply for an exchange semester if I want to go next year?",
  },
  {
    topic: "Career",
    "0": "Are internships part of the program at TUM?",
    "1": "Where can I find jobs and internships related to my field of study?",
    "2": "How can I determine which study program or job suits my interests?",
  },
];

export function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResponse, setIsResponse] = useState(false);
  const [data, setData] = useState("");
  const { updateToggle } = useStore();
  const { toggle } = useStore();
  const url = "https://tum.support/sendmsg/lolttest";
  const username = "a";
  const password = "aZJnk_JwKYtqQa84dUFB";
  const encodedCredentials = Buffer.from(`${username}:${password}`).toString(
    "base64"
  );
  console.log(chatLog);
  useEffect(() => {
    // @ts-ignore
    if (data && data.choices && data.choices.length > 0) {
      // @ts-ignore
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        // @ts-ignore
        { role: "assistant", content: data.choices[0].message.content },
      ]);
    }
  }, [data]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    updateToggle(event.target.value);
    // @ts-ignore
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { role: "user", content: inputValue },
    ]);
    sendMessage(inputValue);
    setInputValue("");
  };

  const sendMessage = async (message) => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://tum.support/sendmsg/${message}`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chatLog),
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error:", error);
    }

    setIsLoading(false);
  };

  const pdfFiles = data.refs?.map((ref) => ref.docurl);
  // questions.map((query, idx) => console.log(query));

  return (
    <div className="w-full p-4">
      <div className="flex flex-col h-[730px] justify-between">
        <div className="overflow-auto space-y-4 p-6">
          {/* Chat messages display */}
          {chatLog.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                // @ts-ignore
                message.role === "user" ? "justify-start" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg p-4 ${
                  // @ts-ignore
                  message.role === "user"
                    ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                }`}
              >
                {message.content}
                {message.role !== "user" && data.refs.length != 0 && (
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Show refrences</AccordionTrigger>
                      <AccordionContent>
                        <PdfViewer files={pdfFiles} />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div key={chatLog.length} className="flex justify-start">
              <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                <TypingAnimation />
              </div>
            </div>
          )}
          {/* ... other chat-related content ... */}
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="p-6 absolute bottom-0 w-2/3">
            {/* Chat input field */}
            <Input
              aria-label="Type your message"
              className="w-full px-4 py-2 rounded-full text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Type your message..."
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {/* ... other form elements ... */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Cards() {
  const [cookies, setCookie] = useCookies(["user"]);
  const { toggle } = useStore();
  const { updateToggle } = useStore();
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col md:flex-row justify-around w-full p-4 flex-wrap">
      {/* Card rendering logic */}
      {toggle && (
        <>
          <div className="flex flex-col rounded-3xl w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-xl shadow-lg dark:bg-gray-800 p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {questions[0].topic}
              </h2>
              <div className="flex flex-col space-y-4">
                <button className="bg-gray-100 p-2 rounded-full dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300">
                  {questions[0][0]}
                </button>
                <button className="bg-gray-100 p-2 rounded-full dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300">
                  {questions[0][1]}
                </button>
                <button className="bg-gray-100 p-2 rounded-full dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300">
                  {questions[0][2]}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-xl shadow-lg dark:bg-gray-800 p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {questions[1].topic}
              </h2>
              <div className="flex flex-col space-y-4">
                <button className="bg-gray-100 p-2 rounded-full dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300">
                  {questions[1][0]}
                </button>
                <button className="bg-gray-100 p-2 rounded-full dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300">
                  {questions[1][1]}
                </button>
                <button className="bg-gray-100 p-2 rounded-full dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300">
                  {questions[2][2]}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-xl shadow-lg dark:bg-gray-800 p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {questions[2].topic}
              </h2>
              <div className="flex flex-col space-y-4">
                <button className="bg-gray-100 p-2 rounded-full dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300">
                  {questions[2][0]}
                </button>
                <button className="bg-gray-100 p-2 rounded-full dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300">
                  {questions[2][1]}
                </button>
                <button className="bg-gray-100 p-2 rounded-full dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300">
                  {questions[2][2]}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
