import { Link } from "react-router-dom";
import { BG } from "../\bMain/Main.Style";
import { v4 as uuidv4 } from "uuid";
import {
  BackBtn,
  BtnWrapper,
  ContentInput,
  ContentsInputWrapper,
  ScoreInput,
  SubmitButton,
  TWrapper,
  TitleInput,
  TitleInputWrapper,
  WriteBox2,
} from "./Submit.Style";
import { useState } from "react";
import { BackButton } from "../Detail/Detail.Style";

export default function SubmitPage() {
  const [title, setTitle] = useState(""); // 상태값을 관리하기위해 useState를 사용
  const [score, setScore] = useState(0);
  const [content, setConent] = useState("");

  const PostRegister = () => {
    const post = {
      title: title,
      score: score,
      content: content,
      id: uuidv4(), // 아이디 생성
    };
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  return (
    <BG>
      <TWrapper>
        <div>Collecter</div>
        <p>좋아하는 영화를 기록해보자!</p>
      </TWrapper>
      <WriteBox2>
        <TitleInputWrapper>
          <TitleInput
            type="text"
            placeholder="제목을 입력해주세요"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <ScoreInput
            type="number"
            placeholder="평점"
            onChange={(e) => {
              return e.target.value <= 10
                ? setScore(e.target.value)
                : (alert("10점 까지만 입력가능"), (e.target.value = ""));
            }}
          />
        </TitleInputWrapper>
        <ContentsInputWrapper>
          <ContentInput
            type="text"
            placeholder="내용을 입력해주세요"
            onChange={(e) => {
              setConent(e.target.value);
            }}
          />
        </ContentsInputWrapper>
        <BtnWrapper>
          <Link to={"/"}>
            <BackBtn>뒤로가기</BackBtn>
          </Link>
          <Link to="/">
            <SubmitButton onClick={PostRegister}>등록</SubmitButton>
          </Link>
        </BtnWrapper>
      </WriteBox2>
    </BG>
  );
}
