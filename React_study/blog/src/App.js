/* eslint-disable no-unused-vars */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [title, change] = useState([["남자 코트"], ["강남 우동 맛집"],["고덕 맛집"]]);
  let [like, like_f] = useState([0, 0, 0]);
  let [modal, setModal] = useState([false, false, false, false]);
  let [text, set_text] = useState("");
  return (
    <div className="App">

      <h1>Study Blog</h1>
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
              }>{ title[i] }</h3>
              <span onClick={() => {
                let copy_like = [...like];
                copy_like[i] = copy_like[i] + 1;
                like_f(copy_like);
              }}>👍</span>
              <span>{ like[i] }</span>
              <button onClick={()=> {
                // Delete 1.
                // let newtitle = title.filter((e, j) => j !== i );
                // let newlike = like.filter((e, j) => j !== i);
                // let newmodal = modal.filter((e,j) => j !== i);
                // setModal(newmodal);
                // like_f(newlike);
                // change(newtitle);
                
                // Delete 2.
                let newtitle = [...title];
                newtitle.splice(i, 1);
                change(newtitle);
                let newlike = [...like];
                newlike.splice(i,1);
                like_f(newlike);
                let newmodal = [...modal];
                newmodal.splice(i,1);
                setModal(newmodal);
              }}>글 삭제</button>
              {
                modal[i] ? <Modal title={title[i]} change = { change }/> : null
              }
            </div>
          )
        })
      }

      <input type="text" value={text} onChange={ (e)=> {
        set_text(e.target.value);
        }
      }/>
      {/* 버튼 누를시 저장한 글을 title 배열에 추가 */}
      <button onClick={()=>{
          change([text, ...title]);
          like_f([0, ...like]);
          setModal([false, ...modal]);
          set_text("");
        }
      }>글 추가</button>

      <br/><br/>
      <button onClick={()=> {
        let sort_title = [...title].sort();
        change(sort_title)
        }
      }>
        정렬
      </button>
      <br/>
      {/* <input type="text" onChange={(e)=>{
        change_text(e.target.value);
        change_main(e.target.value);
        
      }}></input>
      <select></select>
      <textarea></textarea> */}


    </div>
  );
}

function Modal (props) {

  return (
    <div className="modal">
      <h5>{ props.title }</h5>
      <ul>
        <li></li>
        <li></li>
      
      </ul>
    </div>
  )
}
export default App;
