import axios from "axios";
import { useState } from 'react';
const useMessageRecord = () => {
    const [Nameuniversity, setNameuniversity] = useState('');
    const [Orgra, setOrgra] = useState('');
    const [Tel, setTel] = useState('');
    const [Sal, setSal] = useState('');
    const [Number, setNumber] = useState('');
    const [Date, setDate] = useState('');
    const [Month, setMonth] = useState('');
    const [Year, setYear] = useState('');
    const [Story, setStory] = useState('');
    const [Person, setPerson] = useState('');
    const [P1, setP1] = useState('');
    const [P2, setP2] = useState('');
    const [P3, setP3] = useState('');
    const [Lastly, setLastly] = useState('จึงเรียนมาเพื่อทราบ');
    const [Licent, setLicent] = useState('');
    const [Level, setLevel] = useState('');
    const [Position, setPosition] = useState('');

        const handleSend = async () => {
            try {
                const response = await axios.post(`http://127.0.0.1:8000/generate_document`, {
                    NAMEUNIVERSITY: Nameuniversity,
                    ORGRA: Orgra,
                    TEL: Tel,
                    SAL: Sal,
                    NUMBER: Number,
                    DATE: Date,
                    MONTH: Month,
                    YEAR: Year,
                    STORY: Story,
                    PERSON: Person,
                    P1: P1,
                    LASTLY: Lastly,
                    LICENT: Licent,
                    LEVEL: Level,
                    POSITION: Position
                }, {
                    responseType: 'blob'
                });

                if (response.status === 200) {
                    const fileUrl = URL.createObjectURL(response.data);
                    const link = document.createElement('a');
                    link.href = fileUrl;
                    link.setAttribute('download', 'generated.docx');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    console.error('Failed to generate document');
                }
            } catch (error) {
                console.error('An error occurred', error);
            }
        };
        return { Nameuniversity, Orgra, Tel, Sal, Number, Date, Month, Year, Story, Person, P1, P2, P3, Lastly, Licent, Level, Position, setNameuniversity, setOrgra, setTel, setSal, setNumber, setDate, setMonth, setYear, setStory, setPerson, setP1, setP2, setP3, setLastly, setLicent, setLevel, setPosition, handleSend };
    }

    export default useMessageRecord;