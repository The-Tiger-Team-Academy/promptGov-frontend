import axios from "axios";
import { useState, useEffect } from "react";


const useGenerate = () => {
    const [chat, setChat] = useState('');
    const [responsechat, setResponsechat] = useState('');

    const generateDocument = async () => {
        try {
            const responsechat = await axios.post(`http://127.0.0.1:8000/chat?message=${chat}`);
            const jsonStringWithoutBraces = (obj: any) => {
                return Object.entries(obj).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join(', ');
            };
            const responseString = jsonStringWithoutBraces(responsechat.data);
            setResponsechat(responseString);
        } catch (error) {
            console.error(error);
            return { responsechat: null };
        }
    };
    return { setChat, chat, generateDocument, responsechat };
}
export default useGenerate;