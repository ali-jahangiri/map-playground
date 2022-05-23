import ResultItem from "./ResultItem";

import { ReactComponent as FreshIcon } from "../assets/icons/confetti.svg";

const ResultDirectory = ({ items , itemsLength , hoverOnItemsHandler }) => (
    <div className="resultDirectory">
        {
            !!items.length && <p className="resultDirectory__fullAvaiavbleCount">
                We found <span> {itemsLength}</span> Results for you
            </p>
        }
        {
            !!!items.length && <div className="resultDirectory__waitingForSearch">
            <FreshIcon />
                <div>
                    <p>Search For Somethings</p>
                    <span>You can find best place and hotels for having a perfect weekend </span>
                </div>
            </div>
        }
        {
            items.map((el , i) => (
                <ResultItem {...el} key={i} renderKeyCount={i + 1} onHover={hoverOnItemsHandler} />
            ))
        }
    </div>
)


export default ResultDirectory;
