import styled from "styled-components";

export const WriteBox2 = styled.div`
  width: 25rem;
  height: 31.25rem;
  margin: 0 auto;
  border: 3px solid #ffffff;
  border-radius: 3px;
  position: relative;
  top: 100px;
`;

export const TitleInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
`;

export const TitleInput = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 3px;
  border: none;
  padding-left: 20px;
  font-size: 20px;
`;

export const ScoreInput = styled.input`
  width: 20%;
  height: 50px;
  border-radius: 3px;
  border: none;
  padding-left: 20px;
  font-size: 20px;
  margin-left: 35px;
`;

export const ContentsInputWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  padding: 20px;
`;

export const ContentInput = styled.textarea`
  width: 90%;
  height: 300px;

  vertical-align: top;
  border: none;
  resize: none;
  padding: 16px;
  margin-bottom: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  box-sizing: border-box;
  font-family: inherit;

  ::placeholder {
    font-size: 20px;
  }
`;
