import Image from "next/image";
import styles from "./paperFlow.module.css";
import { NextRouter, useRouter } from "next/router";
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
      </main>
    </div>
  );
};

export default Paper;
