import { useState } from "react";
import Paginator from "./Paginator/Paginator";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const handleChangePage = (changedPage) => {
    setPage(changedPage);
  };
  return (
    <div className="page-wrapper">
      <Paginator
        itemCount={122}
        onChange={handleChangePage}
        currentPage={page}
      />
    </div>
  );
}

export default App;
