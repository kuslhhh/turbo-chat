"use client"

import { TextInput } from "@repo/ui/textInput";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {

  const [roomId, setRoomId] = useState("");

  const router = useRouter()

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "black",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        <TextInput onChange={(event) => {
          setRoomId(event?.target.value)
        }} size="big" placeholder="Room Id"></TextInput>
        <button onClick={() => {
          router.push(`/chat/${roomId}`)
          console.log(roomId);

        }}> Join Room</button>

      </div>
    </div >
  );
}
