import { useState } from "react";
import axios from "axios";

const useGenerate = () => {
  const [chat, setChat] = useState("");
  const [responsechat, setResponsechat] = useState("");

  const generateDocument = async () => {
    try {
      const messageChar = chat;

      const response = await axios.post(
        "https://jubilant-goldfish-g449gqqw49r4cwv57-8000.app.github.dev/gennrate_message_record",//เส้นทดสอบ
        //  `${process.env.NEXT_PUBLIC_BASEURL}/gennrate_message_record` || "",
        { content: messageChar },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setResponsechat(response.data.message.content);
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  return { chat, setChat, responsechat, generateDocument };
};

export default useGenerate;
