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
  background-color: rgb(255, 255, 255);
`;

export const ScoreInput = styled.input`
  width: 20%;
  height: 50px;
  border-radius: 3px;
  border: none;
  padding-left: 20px;
  font-size: 20px;
  margin-left: 35px;
  background-color: rgb(255, 255, 255);
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

export const SubmitButton = styled.button`
  font-weight: bold;
  align-items: center;
  width: 100px;
  height: 45px;
  padding: 0px 16px;
  color: rgb(255, 255, 255);
  border-radius: 8px;
  background-color: rgb(109, 86, 245);
  cursor: pointer;
  border: none;
  font-size: 18px;
  position: relative;
  bottom: 12px;
`;

export const TWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  top: 37px;
  right: 100px;

  div {
    font-size: 50px;
    color: #ffffff;
    font-weight: 600;
    margin-right: 15px;
  }

  p {
    color: #ffffff;
    font-weight: bold;
    position: relative;
    right: 10px;
    margin-top: 10px;
  }
`;
