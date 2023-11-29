import axios from "axios";
import { useState } from "react";


const useGenerate = () => {
    const [chat, setChat] = useState('');
    const [responsechat, setResponsechat] = useState('');
    const generateDocument = async () => {
        try {
            const responsechat =await axios.post(`http://127.0.0.1:8000/chat?message=${chat}`);
            setResponsechat(responsechat.data);
        } catch (error) {
            console.error(error);
            return { responsechat: null };
        }
    };
    return {setChat, chat, generateDocument , responsechat};
}
export default useGenerate;