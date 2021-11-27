import { React, useEffect } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loadDictionaryFB } from "./redux/modules/dictionary";
import { db } from "./firebase";
import Dictionary from "./Dictionary";
import AddWords from "./AddWords";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const dic = useSelector((state) => state.dictionary.word_list);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(loadDictionaryFB());
    // console.log(db);
  }, [dic.length]);

  return (
    <div className="App">
      <Container>
        <Title>내 단어장!</Title>
        <Line />
        <Route path="/" exact component={Dictionary} />
        <Route path="/add" component={AddWords} />
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 85vh;
  height: 85vh;
  background-color: #e6e6fa;
  padding: 16px;
  margin: 20px auto;
  border-radius: 20px;
  border: 2px solid #ddd;
`;

const Title = styled.h1`
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 2px ridge #ddd;
`;

export default App;
