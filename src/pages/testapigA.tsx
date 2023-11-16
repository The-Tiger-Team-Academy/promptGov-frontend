import React, { useState } from 'react';
import axios from 'axios';

const MyComponent: React.FC = () => {
    const [inputData, setInputData] = useState('');
    const [logoFile, setLogoFile] = useState<File | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();  // Prevent default form submission behavior

        const formData = new FormData();
        if (logoFile) {
            formData.append('logo', logoFile); // แนบไฟล์รูปภาพ (หากมี)
        }
        try {
            // Replace with your API endpoint
            const url = `http://127.0.0.1:8000/generate-docx?data=${inputData}`;
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                responseType: 'blob',
            });

            // Create a URL for the blob
            const fileURL = window.URL.createObjectURL(new Blob([response.data]));
            // Create a temporary link element
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'generated.docx');  // Set the file name for download
            document.body.appendChild(fileLink);

            // Programmatically click the link to trigger the download
            fileLink.click();

            // Clean up: remove the link and revoke the object URL
            fileLink.remove();
            window.URL.revokeObjectURL(fileURL);
        } catch (error) {
            console.error('Error downloading file', error);
        }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setLogoFile(event.target.files[0]); // เซ็ตไฟล์รูปภาพเมื่อมีการเลือก
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Data:
                    <input
                        type="text"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                </label>
                <label>
                    Upload Logo:
                    <input
                        type="file"
                        accept="image/png"
                        onChange={handleFileChange} // เมื่อมีการเลือกไฟล์
                    />
                </label>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default MyComponent;
