import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import signInWithGoogle from "@/module/auth/services/signInWithGoogle";

const useCustomHook = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [img, setImage] = useState<string>('');

  const router = useRouter();

  const postData = async () => {
    try {
      const response = await axios.post('https://fastapigoogle.thetigerteamacademy.net/votes', {
        name: name,
        email: email,
        img: img
      });
      console.log(response.data);
      router.push('./createDocuments/paperflow');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const login = async () => {
    try {
      const result = await signInWithGoogle();
      if (result && result.user) {
        router.push('./payment')
        setName(result.user.displayName || "")
        setEmail(result.user.email || "")
        setImage(result.user.photoURL || "")
        console.log(result)
        alert("Login success")
      } else {
        console.log("No user data available");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (name && email && img) {
      postData();
    }
  }, [name, email, img]);

  // Return what you need from the hook, for example:
  return { login, name, email, img };
};

export default useCustomHook;
