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
      const response = await axios.post(process.env.NEXT_PUBLIC_API_FASTAPI ?? '', {
        name: name,
        email: email,
        img: img
      });
      console.log(response.data);
      router.push('./createDocuments/paperflow');
    } catch (error) {
      console.error('Error while posting data:', error);
    }
  };

  const login = async () => {
    try {
      const result = await signInWithGoogle();
      if (result && result.user) {
        router.push('./payment');
        setName(result.user.displayName || "");
        setEmail(result.user.email || "");
        setImage(result.user.photoURL || "");
        console.log(result);
        alert("Login success");
      } else {
        console.log("No user data available");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    const postDataEffect = async () => {
      if (name && email && img) {
        await postData();
      }
    };

    postDataEffect();

    return () => {
    };
  }, [name, email, img, postData]);

  return { login, name, email, img };
};

export default useCustomHook;
