import Image from "next/image";
import styles from "./paperFlow.module.css";
import svg from "./icon.png.svg";

const Paper = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>PaperFlow</h1>
        <p className={styles.description}>เลือกประเภทเอกสาร</p>

        <div className={styles.grid}>
          <button className={styles.card}>
            <Image src={svg} alt="logo" width={150} height={150}></Image>
            <p>บันทึกข้อความ</p>
          </button>

          <button className={styles.card}>
            <Image src={svg} alt="logo" width={150} height={150}></Image>
            <p>ขอความอนุเคราะห์</p>
          </button>

          <button className={styles.card}>
            <Image src={svg} alt="logo" width={150} height={150}></Image>
            <p>ใบลา/ใบลากิจ</p>
          </button>

          <button className={styles.card}>
            <Image src={svg} alt="logo" width={150} height={150}></Image>
            <p>จิตอาสา</p>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Paper;
