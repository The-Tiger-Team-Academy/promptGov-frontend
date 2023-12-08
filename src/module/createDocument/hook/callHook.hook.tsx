// useCustomHook.ts
import { useState, useEffect } from 'react';
import useMessageRecord  from './useMessageRecord.hook';
import useGenerate from './useGenerate.hook';

export const useCustomHook = () => {
  const { Nameuniversity, Orgra, Tel, Sal, Number, Date, Month, Year, Person, P1, Lastly, Licent, Level, Position, setNameuniversity, setOrgra, setTel, setSal, setNumber, setDate, setMonth, setYear, setStory, setPerson, setP1, setLastly, setLicent, setLevel, setPosition, handleSend } = useMessageRecord();
  const { responsechat, generateDocument, chat, setChat } = useGenerate();
  const [isLoading, setIsLoading] = useState(false);

  const geneRate = () => {
    generateDocument();
    setIsLoading(true);
  }

  useEffect(() => {
    if (responsechat) {
      setIsLoading(false);
    }
  }, [responsechat]);

  const gettwoSet = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setStory(e.target.value);
    setChat(e.target.value);
  };

  useEffect(() => {
    if (responsechat) {
      setP1(responsechat);
    }
  }, [responsechat]);

  return {
    Nameuniversity,
    Orgra,
    Tel,
    Sal,
    Number,
    Date,
    Month,
    Year,
    Person,
    P1,
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
    setLastly,
    setLicent,
    setLevel,
    setPosition,
    handleSend,
    responsechat,
    generateDocument,
    chat,
    setChat,
    isLoading,
    geneRate,
    gettwoSet
  };
};