import styled from "styled-components";

export const BG = styled.div`
  max-width: 100%;
  height: 100vh;
  background-image: url("https://ifh.cc/g/M92haW.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  overflow: auto;
  overflow-x: hidden;
`;

export const TitleBox = styled.div`
  margin: 0 auto;
  padding-right: 225px;
  padding-top: 50px;

  h1 {
    font-size: 50px;
    font-weight: bold;
    color: #ffffff;
    margin-left: 50px;
    margin-bottom: 10px;
  }

  p {
    margin-left: 22px;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 35px;

    h1 {
      font-size: 36px;
      margin-left: 0px;
    }

    p {
      margin-left: 0px;
    }
  }
`;

export const WriteBox = styled.div`
  width: 25rem;
  height: 31.25rem;
  margin: 0 auto;
  border-radius: 3px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 60%;
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  width: 45%;
  height: 25px;
  padding-left: 20px;
  border: 2px solid #ffffff;
  border-radius: 6px;
  font-weight: bold;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    width: 60%;
    margin-bottom: 10px;
  }
`;

export const FilterInput = styled.input`
  width: 30%;
  height: 25px;
  margin-left: 10px;
  padding-left: 20px;
  border: 2px solid #ffffff;
  border-radius: 6px;
  font-weight: bold;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    width: 60%;
    margin-left: 0px;
  }
`;

export const PostBox = styled.div`
  width: 100%;
  max-height: 380px;
  overflow: auto;
`;

export const Post = styled.div`
  width: 90%;
  height: 75px;
  border: 2px solid #ffffff;
  border-radius: 6px;
  margin-left: 20px;
  background-color: #ffffff;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  h3 {
    color: #000000;
    font-weight: bold;
    font-size: 20px;
    padding-left: 20px;
    padding-top: 25px;
  }

  p {
    color: rgb(109, 86, 245);
    font-size: 20px;
    font-weight: bold;
    padding-right: 20px;

    padding-top: 10px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  font-weight: bold;
  align-items: center;
  height: 35px;
  padding: 0px 16px;
  color: rgb(255, 255, 255);
  border-radius: 8px;
  background-color: rgb(109, 86, 245);
  cursor: pointer;
  border: none;
  margin-top: 10px;
  margin-right: 15px;
`;
