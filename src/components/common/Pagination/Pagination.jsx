import React from "react";
import style from "./Pagination.module.css";

let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; ++i) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return (<span
                    key={p}
                    className={currentPage === p ? style.selectedPage : style.notSelectedPage}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}
                    </span>)
            })}
        </div>
    )
}

export default Pagination;
