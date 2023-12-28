import axios from "axios";

const useMessageRecorddownload = () => {

  const handleSenddownload = async () => {
    try {
      const response = await axios.get(
        // "http://127.0.0.1:8000/download/messageRecord/",//เส้นทดสอบ
        process.env.NEXT_PUBLIC_DOWNLOAD_DOC_RECORD || "",
        {
          responseType: "blob",
        }
      );

      if (response.status === 200) {
        const fileUrl = URL.createObjectURL(response.data);
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", "generated.docx");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("Failed to generate document");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return {handleSenddownload};
};
export default useMessageRecorddownload;
