import React from 'react';
import { Row } from "./components/Row";
import { Banner } from './components/Banner';
import { Nav } from './components/Nav';
import './App.css';
import { requests } from "./api/request";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      {/* オリジナル作品 */}
      <Row
        title="Netflix独占配信"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      {/* 人気急上昇中の作品 */}
      <Row title="人気急上昇の作品" fetchUrl={requests.feactTopRated} /> 
      {/* アクション映画 */}
      {/* <Row title="Action Movies" fetchUrl={requests.feactActionMovies} /> */}
      {/* コメディ映画 */}
      <Row title="コメディ映画" fetchUrl={requests.feactComedyMovies} />
      {/* ホラー映画 */}
      {/* <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} /> */}
      {/* ロマンス映画 */}
      <Row title="ロマンス映画" fetchUrl={requests.feactRomanceMovies} />
      {/* ドキュメンタリー映画 */}
      <Row title="ドキュメンタリー映画" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
