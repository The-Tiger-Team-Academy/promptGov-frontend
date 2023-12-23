import { useState } from 'react';
import axios from 'axios';

const useGenerate = () => {
    const [chat, setChat] = useState('');
    const [responsechat, setResponsechat] = useState(null);


    const generateDocument = async () => {
        try {
          const message = chat;
    
          const response = await axios.post(
            process.env.NEXT_PUBLIC_API_GENERATE ?? '',
            { content: message },
            {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            }
          );
    
          const responseData = response.data;
    
          let currentIndex = 0;
          const intervalId = setInterval(() => {
            setResponsechat((prevResponse) => prevResponse + responseData[currentIndex]);
            currentIndex++;
    
            if (currentIndex === responseData.length) {
              clearInterval(intervalId);
            }
          }, 50);
        } catch (error) {
          console.error("Axios error:", error);
        }
      };

    return { chat, setChat, responsechat, generateDocument };
}

export default useGenerate;