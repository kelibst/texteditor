import React, { useReducer, useState } from "react";
import Head from "next/head";
import { TextProvider, useText } from "../context";
import textReducer from "../reducers/TextValues";
import { txtInterface } from "../interfaces/dataInterface";
import Navigations from "../components/Navigations";
import AccessBar from "../components/AccessBar";
import ShowText from "../components/ShowText";
import InputForm from "../components/InputForm";

const Index = () => {
  const [showPopUp, setshowPopUp] = useState({ isPopUp: false, type: 0 });
  console.log(showPopUp);
  return (
    <div>
      <Head>
        <title>NotionLike Text Editor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigations />
        <div className="max-w-2xl m-auto">
          <AccessBar />
          <h1
            id="header"
            className="text-4xl border-b-2 p-2 mt-8 mb-5 font-bold"
          >
            Front-end developer test project
          </h1>
          <p className="text-gray-600">
            Your goal is to make a page that looks exactly like this one, and
            has the ability to create H1 text simply by typing / then, typing
            text, and hitting enter.
          </p>
          <TextProvider>
            <ShowText />
            <InputForm
              allowable={{
                showPopUp: showPopUp,
                setshowPopUp: setshowPopUp,
              }}
            />
          </TextProvider>
        </div>
      </main>
    </div>
  );
};

export default Index;
