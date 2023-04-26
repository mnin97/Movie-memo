import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://ifh.cc/g/aqKrml.jpg");
  background-size: cover;
  background-repeat: repeat;
`;

export const BigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background-color: antiquewhite;
`;

export const ScoreBox = styled.div`
  width: 20%;
  height: 50px;
  background-color: aqua;
  margin-left: 10px;
`;

export const ContentBox = styled.div`
  width: 61.5%;
  height: 300px;
  background-color: #ffffff;
  margin-top: 10px;
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
