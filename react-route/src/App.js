import { Route, Routes } from 'react-router-dom';
import { Index } from './page/Index';
import { Profile } from './page/Profile';
import { Board } from './page/Board';
import BoardDetail from './page/BoardDetail';
import { Practice } from './page/Practice';
import Student from './page/Student';
import { NotFound } from './page/NotFound';

function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <a href="/profile">프로필</a>
          </li>
          <li>
            <a href="/board">게시판</a>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="/practice" element={<Practice />} />
        {/* 실습 라우팅 */}
        <Route path="/student/:name" element={<Student />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
