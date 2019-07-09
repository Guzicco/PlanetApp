import React from "react";
import "./Pagination.scss";

const Pagination = ({ count, setPage, page }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(count / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container">
      <ul className="list-group">
        <a
          className="list-group-item"
          href="#!"
          onClick={() => (page !== 1 ? setPage(page - 1) : null)}
        >
          <li> - </li>
        </a>
        {pageNumbers.map(number => {
          return (
            <a
              className="list-group-item"
              key={number}
              href="!#"
              onClick={() => setPage(number)}
            >
              <li>{number}</li>
            </a>
          );
        })}
        <a
          className="list-group-item"
          href="#!"
          onClick={() =>
            page === pageNumbers[pageNumbers.length - 1]
              ? null
              : setPage(page + 1)
          }
        >
          <li> + </li>
        </a>
      </ul>
    </nav>
  );
};

export default Pagination;
