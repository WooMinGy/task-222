import { React, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDictionaryFB } from "./redux/modules/dictionary";
import { db } from "./firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import Dictionary from "./Dictionary";

const AddWords = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const WordInput = useRef("");
  const ExplanationInput = useRef("");
  const ExampleInput = useRef("");

  const addDictionary = () => {
    dispatch(
      addDictionaryFB({
        word: WordInput.current.value,
        explanation: ExplanationInput.current.value,
        example: ExampleInput.current.value,
      })
    );
  };

  return (
    <ListStyle>
      <h3>단어 추가하기</h3>
      <OneBox>
        <span>단어</span>
        <br />
        <input type="text" ref={WordInput} />
      </OneBox>

      <OneBox>
        <span>설명</span>
        <br />
        <input type="text" ref={ExplanationInput} />
      </OneBox>

      <OneBox>
        <span>예시</span>
        <br />
        <input type="text" ref={ExampleInput} />
      </OneBox>
      <AddButton
        onClick={() => {
          addDictionary();
          history.push("/");
        }}
      >
        추가하기!
      </AddButton>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  margin: 30px 0;
  flex-direction: column;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 70vh;
`;

const OneBox = styled.div`
  width: 98%;
  height: 100px;
  margin: 2.5px 5px;

  & span {
    font-size: 1px;
    text-decoration: underline;
    margin: 5px;
  }
  & input {
    width: 90%;
    height: 50%;
    margin-top: 5px;
    background: aliceblue;
    border: 2px solid green;
    border-radius: 5px;
  }
`;

const AddButton = styled.button`
  margin: auto auto 80px auto;
  width: 120px;
  height: 40px;
  background: #e7d8eb;
  border: 2px solid #673ab7;
  border-radius: 20px;
  cursor: pointer;
`;

export default AddWords;
