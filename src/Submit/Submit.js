import { Link } from "react-router-dom";
import { BG, Button, TitleBox } from "../\bMain/Main.Style";
import { v4 as uuidv4 } from "uuid";
import {
  ContentInput,
  ContentsInputWrapper,
  ScoreInput,
  TitleInput,
  TitleInputWrapper,
  WriteBox2,
} from "./Submit.Style";
import { useState } from "react";

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
            onChange={(e) => setScore(e.target.value)}
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
        <Link to="/">
          <Button onClick={PostRegister}>글 등록</Button>
        </Link>
      </WriteBox2>
    </BG>
  );
}
