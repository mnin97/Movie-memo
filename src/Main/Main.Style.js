import styled from "styled-components";

export const BG = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1596385016692-771fe11c32ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80");

  background-size: cover;
`;

export const TitleBox = styled.div`
  padding-right: 17rem;

  h1 {
    font-size: 2rem;
    color: #ffffff;
    margin: 0;
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
  border: 3px solid #ffffff;
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
  opacity: 0.8;
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
  opacity: 0.8;
`;

export const PostBox = styled.div`
  width: 100%;
  height: 380px;
`;

export const Post = styled.div`
  width: 90%;
  height: 70px;
  border: 2px solid #ffffff;
  border-radius: 6px;
  margin-left: 20px;
  background-color: #ffffff;
  opacity: 0.8;

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
  margin-right: 18px;
  font-weight: bold;
  align-items: center;
  height: 32px;
  padding: 0px 16px;
  color: rgb(255, 255, 255);
  border-radius: 8px;
  background-color: rgb(52, 120, 246);
  cursor: pointer;
  border: none;
`;
