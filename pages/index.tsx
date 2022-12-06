import Head from "next/head";
import React, { memo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputText from "../components/InputText";
import { txt } from "../interfaces/dataInterface";
import { BiLockOpenAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import PopUpCard from "../components/PopUpCard";
import Navigations from "../components/Navigations";
import AccessBar from "../components/AccessBar";

const Home = () => {
  const [currentInput, setCurrentInput] = useState("");
  let [textData, settextData] = useState<txt[]>([]);
  const [useBigInp, setUseBigInp] = useState(false);

  const [editable, seteditable] = useState("");

  const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentInput === "/1") {
      setUseBigInp(true);
      setCurrentInput("");
      return;
    } else {
      if (currentInput)
        settextData([
          ...textData,
          { id: uuidv4(), value: currentInput, isHeader: useBigInp },
        ]);
      setCurrentInput("");
      useBigInp && setUseBigInp(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.target.value);
  };

  const handleUpdateTxt = (value: txt) => {
    if (editable === "") {
      textData = textData.filter((data) => data.id !== value.id);
      settextData([...textData]);
    } else {
      textData.map((data) => {
        if (
          data.id === value.id &&
          editable !== data.value &&
          editable.length
        ) {
          return (data.value = editable);
        }
        return data;
      });
      settextData([...textData]);
      setCurrentInput("");
    }
  };

  const isH1 = (txt: string) => {
    return (
      txt[txt.length - 1] === "/" ||
      txt.substring(txt.length - 2, txt.length) === "/1"
    );
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <>
          <Navigations />
          <div className="max-w-2xl m-auto">
            <AccessBar />
            <h1 className="text-4xl border-b-2 p-2 mt-8 mb-5 font-bold">
              Front-end developer test project
            </h1>
            <p className="text-gray-600">
              &apos; Your goal is to make a page that looks exactly like this
              one, and has the ability to create H1 text simply by typing /
              then, typing text, and hitting enter.&apos;
            </p>

            <div className="displayContainer">
              {textData.length
                ? textData.map((data) => (
                    <InputText
                      key={data.id}
                      value={data}
                      textClasses={
                        data.isHeader ? "text-2xl font-bold" : "outline-none"
                      }
                      handleUpdae={handleUpdateTxt}
                      setEditable={seteditable}
                      isH1={isH1(editable) && data.value === editable}
                    />
                  ))
                : ""}

              <form onSubmit={handleInputSubmit}>
                <input
                  type="text"
                  className={
                    useBigInp
                      ? "outline-none py-2 mt-8 text-2xl font-bold"
                      : "outline-none mt-8"
                  }
                  placeholder={
                    useBigInp
                      ? "Heading 1"
                      : "type / for blocks, @ to link docs or people"
                  }
                  value={currentInput}
                  onChange={handleInputChange}
                />
                {isH1(currentInput) && <PopUpCard />}
              </form>
            </div>
          </div>
        </>
      </main>
    </div>
  );
};

export default memo(Home);
