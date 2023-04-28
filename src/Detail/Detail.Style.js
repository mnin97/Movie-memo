import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://ifh.cc/g/M92haW.jpg");
  background-size: cover;
  background-repeat: repeat;
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
  width: 100%;
  display: flex;
  justify-content: center; /* Center horizontally */
`;

export const TitleBox = styled.div`
  width: 40%;
  height: 50px;
  background-color: white;
  font-size: 25px;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScoreBox = styled.div`
  width: 20%;
  height: 50px;
  background-color: white;
  margin-left: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: rgb(109, 86, 245);
`;

export const ContentBox = styled.textarea`
  width: 58%;
  border-radius: 5px;
  height: 300px;
  background-color: #ffffff;
  margin-top: 10px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
`;

export const ButtonWrapper = styled.div`
  width: 61.5%;
  display: flex;
  justify-content: space-between;
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
