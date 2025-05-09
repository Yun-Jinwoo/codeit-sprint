import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "./Paginator.css";

const Paginator = ({ itemCount, currentPage, onChange }) => {
  const totalPages = Math.ceil(itemCount / 10);
  const pageNumArr = new Array(totalPages).fill(0).map((_, index) => index + 1); // [1, 2, 3, 4, ... , 11, 12, 13]
  // 5개 단위로 자르기
  const startPage = Math.floor((currentPage - 1) / 5) * 5;
  const currentGroup = pageNumArr.slice(startPage, startPage + 5); // [1, 2, 3, 4, 5], [6, 7, 8, 9, 10]

  const goToPrevGroup = () => {
    if (currentPage === 1) return;
    const start = currentPage - 1;
    onChange(start);
  };

  const goToNextGroup = () => {
    if (currentPage >= totalPages) return;
    const start = currentPage + 1;
    onChange(start);
  };

  return (
    <>
      <div className="paginator">
        <button disabled={currentPage <= 1} onClick={goToPrevGroup}>
          <SlArrowLeft />
        </button>
        {currentGroup.map((num) => (
          <button
            key={num}
            className={num === currentPage ? "active" : ""}
            onClick={() => onChange(num)}
          >
            {num}
          </button>
        ))}
        <button disabled={currentPage >= totalPages} onClick={goToNextGroup}>
          <SlArrowRight />
        </button>
      </div>
    </>
  );
};
export default Paginator;
