import { Routes, Route, Navigate } from "react-router-dom";
import { Game, GameMenu, GameResult } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GameMenu />} />
      <Route path="/game" element={<Game />} />
      <Route path="/result" element={<GameResult />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
