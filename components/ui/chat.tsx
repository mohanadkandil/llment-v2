"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import TypingAnimation from "./TypingAnimation";
import { Input } from "./input";
import useStore from "@/store/useStore";
export default function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toggle } = useStore();
  const { updateToggle } = useStore();
  console.log(toggle);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateToggle(event.target.value);

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };
  const sendMessage = (message) => {
    const url = "https://tum.support/sendmsg/lolttest";

    const data = {};

    setIsLoading(true);

    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto max-w-full">
      <div className="flex flex-col h-screen">
        <div className="flex-grow p-6">
          <div className="flex flex-col space-y-4">
            {chatLog.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.type === "user" ? "bg-white" : "bg-gray-800"
                  } rounded-lg p-4 text-black max-w-sm h-full`}
                >
                  {message.message}
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
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-none p-6">
          {/* <div className="flex rounded-lg border border-gray-700 bg-gray-800">
            <input
              type="text"
              className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300"
            >
              Send
            </button>
          </div> */}
          {/* <div className="flex justify-center py-4 dark:bg-gray-800">
            <Input
              aria-label="Search"
              className="w-1/2 px-4 py-2 rounded-full text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Search..."
              type="search"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </div> */}
        </form>
      </div>
    </div>
  );
}
