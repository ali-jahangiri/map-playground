import ResultItem from "./ResultItem";

const ResultDirectory = ({ items , itemsLength , hoverOnItemsHandler }) => (
    <div className="resultDirectory">
        <p className="resultDirectory__fullAvaiavbleCount">
            We found <span> {itemsLength}</span> Results for you
        </p>
        {
            items.map((el , i) => (
                <ResultItem {...el} key={i} renderKeyCount={i + 1} onHover={hoverOnItemsHandler} />
            ))
        }
    </div>
)


export default ResultDirectory;
