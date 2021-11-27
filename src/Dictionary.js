import { React, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loadDictionaryFB } from "./redux/modules/dictionary";
import { db } from "./firebase";
import plus from "./plus.png";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const Dictionary = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const dic_Info = useSelector((state) => state.dictionary.word_list);

  // console.log(dic_Info); //데이터가 잘 넘어오는지 확인
  return (
    <ListStyle>
      {dic_Info.map((word_list, index) => {
        return (
          <ItemStyle key={word_list.id}>
            <span>단어</span>
            <p>{word_list.word}</p>
            <span>설명</span>
            <p>{word_list.explanation}</p>
            <span>예시</span>
            <p style={{ color: "blue" }}>{word_list.example}</p>
          </ItemStyle>
        );
      })}
      <Plus
        src={plus}
        onClick={() => {
          history.push("/add");
        }}
      />
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 70vh;
  --ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 8px;
  border: 2px solid green;
  border-radius: 10px;
  background-color: aliceblue;
  & span {
    font-size: 1px;
    text-decoration: underline;
    margin: 5px;
  }
  & p {
    margin: 0 5px 15px 5px;
  }
`;

const Plus = styled.img`
  position: fixed;
  margin-top: 450px;
  margin-left: 300px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export default Dictionary;
