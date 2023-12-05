import { useState } from 'react';
import axios from 'axios';

const useGenerate = () => {
    const [chat, setChat] = useState('');
    const [responsechat, setResponsechat] = useState(null);

    const generateDocument = async () => {
        try {
            const response = await axios.post(`http://127.0.0.1:8000/chat?message=${chat}`);
            console.log(response);
            setResponsechat(response.data.return ? response.data.return : null);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return { chat, setChat, responsechat, generateDocument };
}

export default useGenerate;