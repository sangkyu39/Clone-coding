import React, { useState, useEffect } from "react";

import { dbService } from "../fbase";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import Nweet from "../components/Nweet";

const Home = (params) => {
  const [nweet, setNweet] = useState("");
  const userObj = params.userObj;
  const [nweets, setNweets] = useState([]);

  //get database v.1
  // const getNweets = async () => {
  //   // const q = query(collection(dbService, "nweets"));
  //   // const querySnapshot = await getDocs(q);
  //   const dbNweets = await getDocs(query(collection(dbService,"nweets")));
  //   dbNweets.forEach((document) => {
  //     const nweetObject = {
  //       ...document.data(),
  //       id: document.id,
  //     };
  //     // setNweets에 함수를 넣어 prev (전 값)에 데이터 베이스 값을 추가한 배열 입력
  //     setNweets((prev) => [nweetObject, ...prev]);
  //   });
  // };
  // //선언 후 호출
  // useEffect(() => {
  //   getNweets();

  // }, []);
  //get database v.2
  useEffect(() => {
    const q = query(
      collection(dbService, "nweets"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);

  // add database
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // 문서 추가
      const docRef = await addDoc(collection(dbService, "nweets"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>

      <div>
        {/* {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.text}</h4>
          </div>
        ))} */}
        {nweets.map((nweet) => (
          <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
        ))}
      </div>
    </div>
  );
};
export default Home;
