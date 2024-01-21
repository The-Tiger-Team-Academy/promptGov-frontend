import axios from "axios";

const postUrlmessagerecord = async () => {
const user_id = localStorage.getItem("userId")
const url_docx = localStorage.getItem("url_docx")
const nameDoc = localStorage.getItem("nameDoc")
  try {
    const response = await axios.post(
      // "http://127.0.0.1:8000/store_url", //เส้นทดสอบ
      `${process.env.NEXT_PUBLIC_BASEURL}/Users` ?? "",
      {
        user_id: user_id,
        urls: [
          {
            url: url_docx,
            government: nameDoc,
          },
        ],
      }
    );
  } catch (error) {
    console.error("Error while posting data:", error);
  }
};

export default postUrlmessagerecord;
