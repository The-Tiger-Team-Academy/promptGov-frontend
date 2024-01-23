import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import signInWithGoogle from "@/module/auth/services/signInWithGoogle";
// import Urlmessagerecord from "@/module/payment/hooks/Urlmessagerecord";


const useCustomHook = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [img, setImage] = useState<string>("");
  const router = useRouter();

  const postData = async () => {
    try {
      const response = await axios.post(
        // "http://127.0.0.1:8000/Users", //เส้นทดสอบ
        `${process.env.NEXT_PUBLIC_BASEURL}/Users` ?? "",
        {
          name: name,
          email: email,
          img: img,
        },
      );
      localStorage.setItem('userId', response.data.id);
      console.log(response.data.id);
    } catch (error) {
      console.error("Error while posting data:", error);
    }
  };

  const login = async () => {
    try {
      const result = await signInWithGoogle();
      if (result && result.user) {
        router.push("./createDocuments");
        // localStorage.clear();
        setName(result.user.displayName || "");
        setEmail(result.user.email || "");
        setImage(result.user.photoURL || "");
        localStorage.setItem('userImage', result.user.photoURL || "");
        localStorage.setItem('userName', result.user.displayName || "");
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

    return () => {};
  }, [name, email, img, postData]);

  return { login, name, email, img };
};

export default useCustomHook;
