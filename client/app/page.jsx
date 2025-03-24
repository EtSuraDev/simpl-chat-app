

'use client'

import Input from "@/components/input";
import ChatArea from "@/components/chatArea";
import Header from "@/components/header";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
const socket = io(process.env.NEXT_PUBLIC_BACK_END);

export default function Home() {
    const [messages, setMessage] = useState([])
    const [inputValue, setInputValue] = useState("")

    console.log(process.env.NEXT_PUBLIC_BACK_END)




    useEffect(() => {
        socket.on("message", (m) => {
            const time = new Date()
            const new_data = {
                text:  m,
                date: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
            }
            setMessage((prev) => [...prev, new_data]);
        });
        return () => {
            socket.off("message", messageListener);
        };
    }, []);


    const sendMessage = () => {
        if (inputValue !== ""){
            socket.emit("message", inputValue);
        }
    };
    return ( 
        <div className=" w-full h-screen flex justify-center p-2 " >
            <div 
                className=" w-[40%] bg-amber-600 h-full relative overflow-hidden "
            >
                <Header/>
                <ChatArea messages={messages} />
                <Input inputValue={inputValue} setInputValue={setInputValue} sendMessage={sendMessage} />
            </div>
        </div >
    );
}