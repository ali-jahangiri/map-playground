import { useState } from "react";
import fetcher from "../utils/fetcher";
import Nav from "./Nav";
import ResultDetails from "./ResultDetails";
import ResultDirectory from "./ResultDirectory";


const MainSection = ({ setSearchValue , searchValue , searchResultsItem = [] , hoverOnItemsHandler , loading }) => {
    const [wasFocusedInitially, setWasFocusedInitially] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [selectedItemDetails, setSelectedItemDetails] = useState(null);
    const [isResultDetailsLoaded, setIsResultDetailsLoaded] = useState(false);


    const fetchSelectedItemDetailsHandler = async id => {
        setIsResultDetailsLoaded(false);
        const res = await fetcher(`businesses/${id}`);
        console.log(res);
        setSelectedItemDetails(res);
        setIsResultDetailsLoaded(true);
    }

    return (
        <div className={`mainSection ${selectedItemId ? "mainSection--detailsMode" : ""} ${wasFocusedInitially ? "mainSection--getFullHeigh" : ""}`}>
            <Nav 
                goBackToDirectoryHandler={() => setSelectedItemId(null)}
                isInDetailsMode={selectedItemId}
                loading={loading} 
                onFocus={setWasFocusedInitially} 
                setSearchValue={setSearchValue} 
                searchValue={searchValue}
            />
            <div className="mainSection__container">
                <ResultDirectory
                    selectItemHandler={id => {
                        setSelectedItemId(id);
                        fetchSelectedItemDetailsHandler(id);
                    }}
                    hoverOnItemsHandler={hoverOnItemsHandler}
                    items={searchResultsItem} 
                    itemsLength={searchResultsItem.length} />
                {
                    selectedItemId && (!isResultDetailsLoaded ? <div className="mainSection__detailsLoading">Loading...</div> : <ResultDetails isInDetailsMode={selectedItemId} {...selectedItemDetails}/>)
                }
            </div>
        </div>
    )
}

export default MainSection;