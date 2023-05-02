/*es*/

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "중랑구 코딩 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남우동 맛집",
    "파이썬 득함",
  ]);
  let [좋아요, 좋아요추가] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "20px", margin: "20px" }}>
          ReactBlog
        </h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              좋아요추가(좋아요 + 1);
            }}
          >
            👍
          </span>
          {좋아요}
        </h4>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자코트추천";
            글제목변경(copy);
          }}
        >
          글수정
        </button>
        <button
          onClick={() => {
            let array = [...글제목];
            array.sort();
            글제목변경(array);
            console.log(array);
          }}
        >
          가나다순 정렬
        </button>
        <p>5월 1일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>5월 1일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>5월 1일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
