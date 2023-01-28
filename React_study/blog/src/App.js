/* eslint-disable no-unused-vars */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [title, change] = useState([["남자 코트", 0], ["강남 우동 맛집", 1],["고덕 맛집", 2]]);
  let [like, like_f] = useState([0, 0, 0]);
  let [modal, setModal] = useState([false, false, false, false]);
  let [text, change_text] = useState('');
  let [main, change_main] = useState('제목');
  return (
    <div className="App">

      {/* <div className="background">
        <h1>{ title[0] }<button onClick={() => {
          // < ... > 를 통해 괄호를 제거 후 다시 괄호를 씌워 새로운 공간 생성
          let copy = [...title];
          copy[0][0] = "여자코트 추천";
          change(copy)
          }}>변경</button></h1>
          <h1>{ title[1] }</h1>
          <h1>{ title[2] }</h1>
      </div> */}
      <h1>{ main }</h1>
      {
        title.map(function(a, i) {
          return (
            <div className="info" key={a}>
              <h3 onClick={
                () => {
                  let copy_modal = [...modal];
                  copy_modal[i] = !copy_modal[i];
                  setModal(copy_modal);
                }
              }>{ title[i][0] }</h3>
              <span onClick={() => {
                let copy_like = [...like];
                copy_like[i] = copy_like[i] + 1;
                like_f(copy_like);
              }}>👍</span>
              <span>{ like[i] }</span>
              {
                modal[i] ? <Modal title={title[i]} color={'yellow'} change = { change }/> : null
              }
            </div>
          )
        })
      }
      <button onClick={()=> {
        let sort_title = [...title].sort();
        change(sort_title)
        }
      }>
        정렬
      </button>
      <br/>
      <input type="text" onChange={(e)=>{
        change_text(e.target.value);
        change_main(e.target.value);
        
      }}></input>
      <select></select>
      <textarea></textarea>


    </div>
  );
}

function Modal (props) {

  return (
    <div className="modal" style={{background : props.color}}>
      <h1>{ props.title }</h1>
      <ul>
        <li>1.</li>
        <li>3. </li>
      
      </ul>
    </div>
  )
}
export default App;
