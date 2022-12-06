import Head from "next/head";
import React, { memo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputText from "../components/InputText";
import { txt } from "../interfaces/dataInterface";
import { BiLockOpenAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import PopUpCard from "../components/PopUpCard";

const Home = () => {
  const [currentInput, setCurrentInput] = useState("");
  let [textData, settextData] = useState<txt[]>([]);
  const [editable, seteditable] = useState("");

  const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    settextData([...textData, { id: uuidv4(), value: currentInput }]);
    setCurrentInput("");
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
    return txt[txt.length - 1] === "/";
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
          <nav className="flex flex-wrap items-center text-gray-400 justify-between p-4">
            <div className="nav-links flex gap-2">
              <div>Main /</div>
              <div>Getting started /</div>
              <div> Front-end developer test project</div>
            </div>
            <div className="flex gap-2 divide-x-2 topbar-action-buttons m-4">
              <div className="flex items-center">
                <BiLockOpenAlt /> <button> Editing</button>
              </div>

              <div className="flex align-middle items-center">
                <button> Publish Space </button>
                <RiArrowDropDownLine />
              </div>
            </div>
          </nav>
          <div className="max-w-2xl m-auto">
            <h1
              className="
    text-4xl border-b-2
    p-2
    "
            >
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
                      textClasses={"h1 outline-none"}
                      handleUpdae={handleUpdateTxt}
                      setEditable={seteditable}
                      isH1={isH1(editable) && data.value === editable}
                    />
                  ))
                : ""}

              <form onSubmit={handleInputSubmit}>
                <input
                  type="text"
                  className="outline-none"
                  placeholder="type / for blocks, @ to link docs or people"
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
