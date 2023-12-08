import axios from "axios";
import { useState } from 'react';
interface messageRecord {
    Nameuniversity: string;
    Orgra: string;
    Tel: string;
    Sal: string;
    Number: string;
    Date: string;
    Month: string;
    Year: string;
    Story: string;
    Person: string;
    P1: string;
    P2: string;
    P3: string;
    Lastly: string;
    Licent: string;
    Level: string;
    Position: string;
    setNameuniversity: (Nameuniversity: string) => void;
    setOrgra: (Orgra: string) => void;
    setTel: (Tel: string) => void;
    setSal: (Sal: string) => void;
    setNumber: (Number: string) => void;
    setDate: (Date: string) => void;
    setMonth: (Month: string) => void;
    setYear: (Year: string) => void;
    setStory: (Story: string) => void;
    setPerson: (Person: string) => void;
    setP1: (P1: string) => void;
    setP2: (P2: string) => void;
    setP3: (P3: string) => void;
    setLastly: (Lastly: string) => void;
    setLicent: (Licent: string) => void;
    setLevel: (Level: string) => void;
    setPosition: (Position: string) => void;
    handleSend: () => void;

}

const useMessageRecord = (): messageRecord => {
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

    const messageRecord = {
        Nameuniversity,
        Orgra,
        Tel,
        Sal,
        Number,
        Date,
        Month,
        Year,
        Story,
        Person,
        P1,
        P2,
        P3,
        Lastly,
        Licent,
        Level,
        Position,
        setNameuniversity,
        setOrgra,
        setTel,
        setSal,
        setNumber,
        setDate,
        setMonth,
        setYear,
        setStory,
        setPerson,
        setP1,
        setP2,
        setP3,
        setLastly,
        setLicent,
        setLevel,
        setPosition,
        handleSend
    }
    return messageRecord;
}

export default useMessageRecord;
