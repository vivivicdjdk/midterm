import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import index from "./Component/index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        안녕하세요 {': )'}
        <br />
        "도전하는 개발자" 조예진입니다.
        </header>

      <div className="container">
        <nav>
          <Link to={'/'} id="link_index"><img id="nav_img" src="https://github.com/vivivicdjdk/Myportfolio-react/blob/gh-pages/image/me.JPG" alt="나의 사진!!!"/></Link>
          <Link to={"/introduction"}>나의 소개</Link>
          <Link to={"/project"}>프로 젝트</Link>
          <Link to={"/contact"}>Contact </Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" Component={index} />
            <Route path="/introduction" Component={Introduction} />
            <Route path="/project" Component={Project} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </main>
      </div>
      <footer>
        <i>
          Copyright 2023. 지은이 all rights reserved.
          <br />
          연락처 : 010-8906-3946
        </i>
      </footer>
    </BrowserRouter>
  );
}

export default App;
