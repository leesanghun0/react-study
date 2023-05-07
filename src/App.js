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

  //[동적인 UI만드는 step]
  //1.html css로 미리 디자인 완성
  //2.UI현재 상태를 state로 저장
  //3.state에 따라 UI가 어떻게 보일지 작성

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(2);
  let [입력값, 입력값변경] = useState("");

  [1, 2, 3, 4].map(function (a) {
    console.log(a);
  });

  // ------------------map함수의 기능-------------
  //1.array자료 캣수만큼 함수안의 코드를 실행시켜줌
  //2.함수의 파라미터는 array안에 있던 자료임
  //3.return에 적으면 array로 담아줌

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "20px", margin: "20px" }}>
          ReactBlog
        </h4>
      </div>
      {/* <div className="list">
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
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>5월 1일 발행</p>
      </div> */}

      {
        //조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
        //1 == 1 ? "맞음음" : "아님"
        // modal == true ? <Modal /> : null
      }
      {/* {history % 2 == 0 ? setModal(false) : setModal(true)} */}

      <h4>{post}</h4>

      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  좋아요추가(좋아요 + 1);
                }}
              >
                👍
              </span>
              {좋아요}
            </h4>
            <p>5월 1일 발행</p>
          </div>
        );
      })}

      {
        //조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
        //1 == 1 ? "맞음음" : "아님"
        modal == true ? (
          <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} />
        ) : null
      }
      {/* {history % 2 == 0 ? setModal(false) : setModal(true)} */}

      {/* <Modal></Modal>
      <Modal />

      <Button /> */}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      />
    </div>
  );
}
//컴포넌트 만드는법
//1.function() 만들기 function app 바깥쪽에
//2.return() 안에 html 담기
//3.<함수명></함수명> 쓰기

//컴포넌트로 만들면 좋은 유형
//1.반복적인 HTML축약할때
//2.큰페이지들
//3.자주 변경되는 THML UI

//숙제 컴포넌트 만들어보기!!

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(["여자 코트 추천", "강남우동 맛집", "파이썬 득함"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

function Button() {
  return (
    <div className="r-button">
      <h5>버튼</h5>
    </div>
  );
}
export default App;

//props
//(무조건)부모->자식 state 전송하려면 props문법 사용
//1.<자식컴포넌트 작명={state이름}>
//2.props파라미터 등록 후 props.작명 사용
