/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Pagination = ({
  pageNumber,
  currentPage,
  setCurrentPage,
  totalProducts,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / pageNumber); i++) {
    pageNumbers.push(i);
  }
  const onPrevioPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSepecificPage = (e) => {
    setCurrentPage(e);
  };
  return (
    <div className=" container ">
      <nav aria-label="..." className="d-flex justify-content-around ">
            <button
              className={`page-link pagination page-item cursor ${
                currentPage === 1 ? "disabled " : ""
              }`}
              onClick={onPrevioPage}>
              Anterior
            </button>
          
        
            <button
              className={`page-link page-item pagination cursor order-2  cursor ${
                currentPage >= pageNumbers.length ? "disabled " : ""
              }`}
              onClick={onNextPage}>
              Siguiente
            </button>
        <ul className="pagination mb-0 cursor order-1 d-flex  gap-3 ">
        
          

          {pageNumbers.map((numberPage) => {
            return (
              <li key={numberPage} className="page-item cursor  ">
                <a
                  onClick={() => {
                    onSepecificPage(numberPage);
                  }}
                  className={`page-link ${
                    numberPage === currentPage ? "active" : " "
                  }`}>
                  {numberPage}
                </a>
              </li>
            );
          })}

         
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
