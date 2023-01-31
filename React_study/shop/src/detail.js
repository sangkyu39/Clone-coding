/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import styled from 'styled-components';

/* eslint-disable jsx-a11y/alt-text */
export default function Detail(props) {
  
  // url 정보를 가져옴 
  let { id } = useParams();

  let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px;
  `
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ props.shoes[id].title } </h4>
          <p>{ props.shoes[id].content }</p>
          <p>{ props.shoes[id].price }</p>
          <button className="btn btn-danger">주문하기</button>
          <YellowBtn>버튼</YellowBtn>
        </div>
      </div>
    </div>
  );
}
