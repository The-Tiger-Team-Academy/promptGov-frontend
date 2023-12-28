import { useState } from "react";
import axios from "axios";

const useGenerate = () => {
  const [chat, setChat] = useState("");
  const [responsechat, setResponsechat] = useState("");

  const generateDocument = async () => {
    try {
      const messageChar = chat;

      const response = await axios.post(
        // "http://127.0.0.1:8000/gennrate_message_record",//เส้นทดสอบ
         process.env.NEXT_PUBLIC_GENERATE_CONTENT || "",
        { content: messageChar },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setResponsechat(response.data.message.content);
      console.log(response.data.message.content);
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  return { chat, setChat, responsechat, generateDocument };
};

export default useGenerate;
