import React, { useState } from 'react';
import axios from 'axios';

const MyComponent: React.FC = () => {
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
  const [Lastly, setLastly] = useState('');
  const [Licent, setLicent] = useState('');
  const [Level, setLevel] = useState('');
  const [Position, setPosition] = useState('');
  const [Licent2, setLicent2] = useState('');
  const [Level2, setLevel2] = useState('');
  const [Position2, setPosition2] = useState('');

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
        P2: P2,
        P3: P3,
        LASTLY: Lastly,
        LICENT: Licent,
        LEVEL: Level,
        POSITION: Position,
        LICENT2: Licent2,
        LEVEL2: Level2,
        POSITION2: Position2
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

  return (
    <div>
      <textarea placeholder='ชื่อมหาลัย' value={Nameuniversity} onChange={(e) => setNameuniversity(e.target.value)} />
      <textarea placeholder='หน่วยงาน' value={Orgra} onChange={(e) => setOrgra(e.target.value)} />
      <textarea placeholder='โทรศัพท์' value={Tel} onChange={(e) => setTel(e.target.value)} />
      <textarea placeholder='โทรสาร' value={Sal} onChange={(e) => setSal(e.target.value)} />
      <textarea placeholder='ที่' value={Number} onChange={(e) => setNumber(e.target.value)} />
      <textarea placeholder='วันที่' value={Date} onChange={(e) => setDate(e.target.value)} />
      <textarea placeholder='เดือน' value={Month} onChange={(e) => setMonth(e.target.value)} />
      <textarea placeholder='ปี' value={Year} onChange={(e) => setYear(e.target.value)} />
      <textarea placeholder='เรื่อง' value={Story} onChange={(e) => setStory(e.target.value)} />
      <textarea placeholder='เรียน' value={Person} onChange={(e) => setPerson(e.target.value)} />
      <textarea placeholder='ย่อหน้าแรก' value={P1} onChange={(e) => setP1(e.target.value)} />
      <textarea placeholder='ย่อหน้าสอง' value={P2} onChange={(e) => setP2(e.target.value)} />
      <textarea placeholder='ย่อหน้าอื่นๆ' value={P3} onChange={(e) => setP3(e.target.value)} />
      <textarea placeholder='คำลงท้าย' value={Lastly} onChange={(e) => setLastly(e.target.value)} />
      <textarea placeholder='ลายเซ็นชื่อ' value={Licent} onChange={(e) => setLicent(e.target.value)} />
      <textarea placeholder='ตำแหน่ง' value={Level} onChange={(e) => setLevel(e.target.value)} />
      <textarea placeholder='สังกัด' value={Position} onChange={(e) => setPosition(e.target.value)} />
      <textarea placeholder='ลายเซ็นชื่อคนที่2' value={Licent2} onChange={(e) => setLicent2(e.target.value)} />
      <textarea placeholder='ตำแหน่งคนที่2' value={Level2} onChange={(e) => setLevel2(e.target.value)} />
      <textarea placeholder='สังกัดคนที่2' value={Position2} onChange={(e) => setPosition2(e.target.value)} />
      <button onClick={handleSend}>ส่ง</button>
    </div>
  );
};

export default MyComponent;
