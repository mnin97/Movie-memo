import styled from "styled-components";

// 반응형 수정완료

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://ifh.cc/g/M92haW.jpg");
  background-size: cover;
  background-repeat: repeat;
  text-align: center;
`;

export const LogoTitle = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: rgb(255, 255, 255);
  font-weight: bold;
`;

export const StyledTextArea = styled.textarea`
  width: 43%;
  border-radius: 5px;
  height: 300px;
  background-color: #ffffff;
  margin-top: 10px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  font-family: inherit;

  @media screen and (max-width: 768px) {
    width: 80%;
    font-family: inherit;
  }
`;

export const BigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  width: 58%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const TitleBox = styled.input`
  width: 40%;
  height: 50px;
  background-color: white;
  font-size: 25px;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding-left: 30px;

  @media screen and (max-width: 768px) {
    width: 58%;
    font-size: 20px;
  }
`;

export const ScoreBox = styled.input`
  width: 10%;
  text-align: center;
  height: 50px;
  background-color: white;
  font-size: 25px;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: rgb(109, 86, 245);
  margin-left: 1.5vw;

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 20%;
    font-size: 25px;
    margin-left: 1vw;
  }
`;

export const ContentBox = styled.textarea`
  width: 43%;
  border-radius: 5px;
  height: 300px;
  background-color: #ffffff;
  margin-top: 10px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 45.5%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const DeleteButton = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: rgb(236, 106, 94);
  color: #ffffff;
  font-weight: 900;
  font-size: 16px;
  cursor: pointer;
`;

export const BackButton = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: rgb(109, 86, 245);
  color: #ffffff;
  font-weight: 900;
  font-size: 16px;
  cursor: pointer;
`;
