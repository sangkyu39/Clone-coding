/* eslint-disable no-unused-vars */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'test text';
  let [title, change] = useState(["남자 코트", "강남 우동 맛집","고덕 맛집"]);
  let [like, like_f] = useState(1);



  return (
    <div className="App">

      <div className="background">
        <h1 style={{fontSize : '16px'}}>{ title[0] }<button onClick={() => {
          // < ... > 를 통해 괄호를 제거 후 다시 괄호를 씌워 새로운 공간 생성
          let copy = [...title];
          copy[0] = "여자코트 추천";
          change(copy)
          }}>변경</button></h1>
          <h1>{ title[1] }</h1>
          <h1>{ title[2] }</h1>
      </div>
      <button onClick={()=> {
        let sort_title = [...title].sort();
        change(sort_title)
        }
      }>
        정렬
      </button>
      <p>{ post }</p>
      <br></br>
      <p>{ post }<button onClick={() => {like_f(like + 1)}}>👍</button>{ like }</p>
      <div></div>
    </div>
  );
}

export default App;
