import styled from "styled-components";

export const BG = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://ifh.cc/g/aqKrml.jpg");
  background-size: cover;
  background-repeat: repeat;
`;

export const TitleBox = styled.div`
  padding-right: 225px;
  padding-top: 50px;

  h1 {
    font-size: 3rem;
    color: #ffffff;
    margin: 0;
    margin-left: 48px;
  }

  p {
    margin-left: 22px;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
  }
`;

export const WriteBox = styled.div`
  width: 25rem;
  height: 31.25rem;
  margin: 0 auto;
  border-radius: 3px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;

export const SearchInput = styled.input`
  width: 45%;
  height: 25px;
  padding-left: 20px;
  border: 2px solid #ffffff;
  border-radius: 6px;
  font-weight: bold;
  background-color: #ffffff;
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

  h3 {
    color: #000000;
    position: relative;
    right: 132px;
    top: 14px;
    margin: 0;
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
`;
