import { useState } from "react";
import {
  BackButton,
  Background,
  BigWrapper,
  ButtonWrapper,
  DeleteButton,
  ScoreBox,
  StyledTextArea,
  TitleBox,
  TitleWrapper,
} from "./Detail.Style";
import { Link, useParams } from "react-router-dom";

export default function DetailPage() {
  const [posts] = useState(JSON.parse(localStorage.getItem("posts")));
  const { id } = useParams();
  const post = posts.find((a) => a.id === id);

  const ContentBox = ({ content }) => {
    return <StyledTextArea value={content} readOnly />;
  };

  const handleDelete = () => {
    const updatedPosts = posts.filter((p) => p.id !== id);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    if (post) {
      console.log(post.id); // logs the deleted post ID to the console
    }
  };

  return (
    <Background>
      {post && (
        <BigWrapper>
          <>
            <TitleWrapper>
              <TitleBox>{post.title}</TitleBox>
              <ScoreBox>{post.score}</ScoreBox>
            </TitleWrapper>
            <ContentBox content={post.content} />
            <ButtonWrapper>
              <Link to={"/"}>
                <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
              </Link>
              <Link to={"/"}>
                <BackButton>뒤로가기</BackButton>
              </Link>
            </ButtonWrapper>
          </>
        </BigWrapper>
      )}
    </Background>
  );
}
