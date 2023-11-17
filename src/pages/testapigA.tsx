import React, { useState, useRef } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const createDocuments: React.FC = () => {
    const [inputData, setInputData] = useState('');
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('Upload Logo');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files) {
    //         setSelectedFile(event.target.files[0]);
    //     }
    // };

    // const handleClick = () => {
    //     fileInputRef.current?.click();
    // };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        if (logoFile) {
            formData.append('logo', logoFile);
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


            const fileURL = window.URL.createObjectURL(new Blob([response.data]));
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'generated.docx');
            document.body.appendChild(fileLink);

            fileLink.click();

            fileLink.remove();
            window.URL.revokeObjectURL(fileURL);
        } catch (error) {
            console.error('Error downloading file', error);
        }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setLogoFile(event.target.files[0]);
        }
    };

    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: "center", justifyContent: 'center', border: '1px solid black' }}>
                    <label>
                        {/* Input Data: */}
                        <input
                            type="text"
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                            style={{ borderRadius: '10px', height: '50px' }}
                            placeholder='Input data'
                        />
                    </label>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: "center", justifyContent: 'center', border: '1px solid black' }}>
                    <label>
                        {/* Upload Logo: */}
                        <input
                            type="file"
                            // accept="image/png"
                            onChange={handleFileChange}
                        />
                    </label>
                    <button type="submit" onClick={handleSubmit} style={{ borderRadius: '5px', height: '35px', backgroundColor: 'pink' }}>SUBMIT</button>
                </div>

            </Grid>
            {/* <Grid item xs={12}>
                <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: "center", justifyContent: 'center', border: '1px solid black' }}>
                    <button type="submit" onClick={handleSubmit}>SUBMIT</button>
                </div>
            </Grid> */}
        </Grid>
    );
};

export default createDocuments;
