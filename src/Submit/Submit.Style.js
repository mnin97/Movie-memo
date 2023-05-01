import styled from "styled-components";

// 반응형 작업완료

export const WriteBox2 = styled.div`
  width: 25.1rem;
  height: 31.25rem;
  margin: 0 auto;
  border: 3px solid #ffffff;
  border-radius: 3px;
  position: relative;
  top: 100px;

  @media screen and (max-width: 768px) {
    width: 90%;
    border-radius: 6px;
    height: 65%;
    top: 50px;
    padding-bottom: 50px;
  }
`;

export const TitleInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitleInput = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 3px;
  border: none;
  padding-left: 20px;
  font-size: 15px;
  background-color: rgb(255, 255, 255);

  @media screen and (max-width: 768px) {
    width: 70%;
    height: 40px;
    margin-bottom: 20px;
  }
`;

export const ScoreInput = styled.input`
  width: 20%;
  height: 50px;
  border-radius: 3px;
  border: none;
  padding-left: 20px;
  font-size: 15px;
  margin-left: 35px;
  background-color: rgb(255, 255, 255);

  @media screen and (max-width: 768px) {
    width: 17%;
    height: 40px;
    margin-left: 0px;
  }
`;

export const ContentsInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    margin-left: 20px;
  }
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
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 89%;
    height: 250px;
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
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    height: 35px;
    margin-top: 20px;
  }
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

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-left: 37px;
    justify-content: center;
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BackBtn = styled.button`
  font-weight: bold;
  align-items: center;
  width: 100px;
  height: 45px;
  padding: 0px 16px;
  color: rgb(255, 255, 255);
  border-radius: 8px;
  background-color: rgb(236, 106, 94);
  cursor: pointer;
  border: none;
  font-size: 18px;
  position: relative;
  bottom: 12px;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    height: 35px;
    margin-top: 20px;
  }
`;
