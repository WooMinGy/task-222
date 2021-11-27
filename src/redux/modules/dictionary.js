// dictionary.js
import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

// Actions 타입을 정해준다
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";

// 초깃값 지정
const initialState = {
  word_list: [],
};

// Action Creators
export function loadDictionary(dic_list) {
  return { type: LOAD, dic_list };
}

export function createDictionary(dictionary) {
  return {
    type: CREATE,
    dictionary,
  }; //dictionary = 추가할 값(데이터)
}

//middlewares
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dic_data = await getDocs(collection(db, "dictionary"));
    // console.log(dic_data);
    let dic_list = [];

    dic_data.forEach((d) => {
      // console.log(d.data());
      dic_list.push({ id: d.id, ...d.data() });
    });
    // console.log(dic_list);
    dispatch(loadDictionary(dic_list));
  };
};

export const addDictionaryFB = (dictionary) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), dictionary);
    // const _dictionary = await getDoc(docRef);
    const dictionary_data = { id: docRef.id, ...dictionary };
    // console.log(dictionary_data);

    dispatch(createDictionary(dictionary_data));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      // console.log(state, action);
      return { word_list: action.dic_list };
    }
    case "dictionary/CREATE": {
      const new_dictionary_list = [...state.word_list, action.dictionary];
      // console.log(new_dictionary_list);
      return { word_list: new_dictionary_list };
    }
    default:
      return state;
  }
}
