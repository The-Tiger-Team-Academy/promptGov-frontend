import Image from "next/image";
import styles from "./paperFlow.module.css";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import CancelModal from "./components/cancelModal";
import HandleSuccessModal from "@/module/payment/hooks/handleSuccessModal";
import HandleCancelModal from "@/module/payment/hooks/handleCancelModal";
import SuccessModel from "./components/successModal";
// TODO : This function should be moved to a separate file
const NavigatToPages = (router: NextRouter, path: string) => {
  switch (path) {
    case 'record':
      router.push('/createDocuments/pages/messageRecord')
      break;
    case 'please':
      router.push('')
      break;
    case 'bye':
      router.push('')
      break;
    case 'good':
      router.push('')
      break;
    default:
      break;
  }
}

//TODO : should be use MUI component
const Paper = () => {
  const router = useRouter();
  const { session_id, cancel } = router.query;

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  useEffect(() => {
    // Check if session_id exists in the URL
    if (session_id) {
      setShowSuccessDialog(true);
      const fileUrl = localStorage.getItem("messageRecord") || '';
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "generated.docx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // Check if cancel parameter exists in the URL
    if (cancel) {
      setShowCancelDialog(true);
    }
  }, [session_id, cancel]);

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
    // Redirect or additional logic
  };

  const handleCloseCancelDialog = () => {
    setShowCancelDialog(false);
    // Redirect or additional logic
  };


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>PaperFlow</h1> */}
        <p className={styles.description}>เลือกประเภทเอกสาร</p>

        <div className={styles.grid}>
          <button className={styles.card} onClick={() => NavigatToPages(router, "record")}>
            <Image src="/icon.png.svg" alt="logo" width={150} height={150}></Image>
            <p>บันทึกข้อความ</p>
          </button>

          <button className={styles.card}>
            <Image src="/icon.png.svg" alt="logo" width={150} height={150}></Image>
            <p>ขอความอนุเคราะห์</p>
          </button>

          <button className={styles.card}>
            <Image src="/icon.png.svg" alt="logo" width={150} height={150}></Image>
            <p>ใบลา/ใบลากิจ</p>
          </button>

          <button className={styles.card}>
            <Image src="/icon.png.svg" alt="logo" width={150} height={150}></Image>
            <p>จิตอาสา</p>
          </button>
        </div>
        <CancelModal open={showCancelDialog} handleClose={handleCloseCancelDialog} />
        <SuccessModel open={showSuccessDialog} handleClose={handleCloseSuccessDialog} />

      </main>
    </div>
  );
};

export default Paper;
