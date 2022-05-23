import { useState } from "react";
import Nav from "./Nav";
import ResultDirectory from "./ResultDirectory";


const MainSection = ({ setSearchValue , searchValue , searchResultsItem = [] , hoverOnItemsHandler , loading }) => {
    const [wasFocusedInitially, setWasFocusedInitially] = useState(false);
    return (
        <div className={`mainSection ${wasFocusedInitially ? "mainSection--getFullHeigh" : ""}`}>
            <Nav loading={loading} onFocus={setWasFocusedInitially} setSearchValue={setSearchValue} searchValue={searchValue} />
            <ResultDirectory hoverOnItemsHandler={hoverOnItemsHandler} items={searchResultsItem} itemsLength={searchResultsItem.length} />
        </div>
    )
}

export default MainSection;