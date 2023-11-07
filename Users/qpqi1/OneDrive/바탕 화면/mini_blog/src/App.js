import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import Global from "./component/Global";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #fff;
`;

function App(props) {
  return (
    <>
      <Global />
      <BrowserRouter>
        <MainTitleText>장정운의 미니 블로그</MainTitleText>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="post-write" element={<PostWritePage />} />
          <Route path="post/:postId" element={<PostViewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;