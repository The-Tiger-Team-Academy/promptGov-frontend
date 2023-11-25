"use client";
import { Roboto } from "next/font/google";
// import styles from "./login.module.css";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { NextRouter, useRouter } from "next/router";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function LoginPage() {
  const router = useRouter();

  const { data: session } = useSession();
  if (session) {
    router.push("/login");
  }

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
        <Button variant="contained" onClick={() => signIn("google")}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
