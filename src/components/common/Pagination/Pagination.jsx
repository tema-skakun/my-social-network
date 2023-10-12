import React, {useState} from "react";
import style from "./Pagination.module.css";
import cn from "classnames";
import {Button} from "antd";

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; ++i) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
    const leftSideOfPortion = (portionNumber - 1) * portionSize + 1;
    const rightSideOfPortion = portionNumber * portionSize;

    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
            <Button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</Button> }
            {pages
                .filter(p => p >= leftSideOfPortion && p <= rightSideOfPortion)
                .map(p => {
                return (<span className={cn({
                    [style.selectedPage]: currentPage === p
                }, style.pageNumber) }
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}</span>)
            })}
            {portionCount > portionNumber &&
            <Button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</Button> }
        </div>
    )
}

export default Pagination;
