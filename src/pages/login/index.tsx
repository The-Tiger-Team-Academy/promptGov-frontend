"use client";
import { Roboto } from "next/font/google";
// import styles from "./login.module.css";
import Image from "next/image";
import Button from "@mui/material/Button";
import signInWithGoogle from "@/module/payment/services/signInWithGoogle";
import { NextRouter, useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function LoginPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [img, setImage] = useState<string>('');

  const router = useRouter();

  const postData = async () => {
    try {
      const response = await axios.post('https://fastapigoogle.thetigerteamacademy.net/votes', {
        name,
        email,
        img
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
      if (result) {
        // const user: IUser = result.user;
        setName(result.user.displayName);
        setEmail(result.user.email);
        setImage(result.user.photoURL);
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

  return (
    <div>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "60vw",
          height: "60vh",
          right: "50%",
          top: "62%",
        }}
      >
        <Image
          src="/img/runs_on_paper.jpg"
          alt=""
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "35vw",
          height: "53vh",
          bottom: "70%",
          left: "128%",
        }}
      >
        <Image src="/img/Vector.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "15vw",
          height: "53vh",
          top: "-40%",
          left: "7%",
        }}
      >
        <Image src="/img/Vector_logo.png" alt="" width={62} height={63} />
      </div>

      <div>
        <main></main>
        <div>Welcome!</div>
        <div>Lorem ipsum dolor sit amet consectetur.</div>
        <Button variant="contained" onClick={() => login()}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
