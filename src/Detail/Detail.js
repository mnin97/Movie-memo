import { useState } from "react";
import {
  BackButton,
  Background,
  BigWrapper,
  ButtonWrapper,
  DeleteButton,
  LogoTitle,
  ScoreBox,
  StyledTextArea,
  Title,
  TitleBox,
  TitleWrapper,
} from "./Detail.Style";
import { Link, useParams } from "react-router-dom";

export default function DetailPage() {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")));
  const { id } = useParams();
  const post = posts.find((a) => a.id === id);

  const [title, setTitle] = useState(post.title);
  const [score, setScore] = useState(post.score);
  const [content, setContent] = useState(post.content);

  const handleSave = () => {
    const updatedPosts = posts.map((p) => {
      if (p.id === id) {
        p.title = title;
        p.score = score;
        p.content = content;
      }
      return p;
    });
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handleDelete = () => {
    const updatedPosts = posts.filter((p) => p.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    console.log(post.id); // logs the deleted post ID to the console
  };

  return (
    <Background>
      {post && (
        <BigWrapper>
          <LogoTitle>
            <Title>Collecter</Title>
          </LogoTitle>
          <TitleWrapper>
            <TitleBox
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ScoreBox
              value={score}
              onChange={(e) => {
                const Score = e.target.value;
                if (Score <= 10) {
                  setScore(Score);
                } else {
                  alert("10점까지 입력가능");
                }
              }}
            />
          </TitleWrapper>
          <StyledTextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <ButtonWrapper>
            <Link to="/">
              <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
            </Link>
            <Link to="/">
              <BackButton onClick={handleSave}>확인</BackButton>
            </Link>
          </ButtonWrapper>
        </BigWrapper>
      )}
    </Background>
  );
}
