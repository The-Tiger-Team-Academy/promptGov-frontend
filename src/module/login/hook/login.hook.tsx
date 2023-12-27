import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import signInWithGoogle from "@/module/auth/services/signInWithGoogle";

const useCustomHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImage] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      const result = await signInWithGoogle();
      if (result && result.user) {
        setName(result.user.displayName || "");
        setEmail(result.user.email || "");
        setImage(result.user.photoURL || "");

        // ส่ง photoURL ไปยังหน้าอื่น
        router.push({
          pathname: "./createDocuments/paperflow",
          query: {
            img: result.user.photoURL || "",
            name: result.user.displayName || ""
          },
        });
      } else {
        console.log("No user data available");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const postData = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_DATABASE ?? "",
        {
          name: name,
          email: email,
          img: img,
        }
      );
      console.log(response.data.img);
    } catch (error) {
      console.error("Error while posting data:", error);
    }
  };

  useEffect(() => {
    const postDataEffect = async () => {
      if (name && email && img) {
        await postData();
        console.log(name, email, img);
      }
    };

    postDataEffect();
  }, [name, email, img]);

  return { login, name, email, img };
};

export default useCustomHook;
