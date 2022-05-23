import { useCallback, useState } from "react";
import FullScreenMap from "./components/FullScreenMap";
import MainSection from "./components/MainSection";
import { mock } from "./components/mock";
import debounce from "./utils/debounce";
import fetcher from "./utils/fetcher";

const DEFAULT_STATE = {
  loading : false,
  result : {
    businesses : [],
    region : {},
  },
  error : null,
}


function App() {

  const [searchValue, setSearchValue] = useState("");
  const [request, setRequest] = useState(DEFAULT_STATE);
  const [currentMapPosition, setCurrentMapPosition] = useState([]);



  const changeRequestHandler = (key , value) => {
    setRequest(prev => ({
      ...prev,
      [key] : value
    }))
  }

  const debouncedOnSearchValueChangeHandler = useCallback(debounce(async passedValue => {
    const res = await fetcher(`businesses/search?term=travel&location=${passedValue}`)
    if(res?.error) changeRequestHandler("error" , res?.error);
    else changeRequestHandler("result" , res);
    changeRequestHandler("loading" , false);
  } , 280) , []);

  const hoverOnItemsHandler = ({ latitude , longitude }) => {
    setCurrentMapPosition([latitude , longitude])
  }
  
  return (
    <div className="App">
      <MainSection
        loading={request.loading}
        hoverOnItemsHandler={hoverOnItemsHandler} 
        searchResultsItem={request.result.businesses} 
        searchValue={searchValue} 
        setSearchValue={value => {
          setSearchValue(value);
          debouncedOnSearchValueChangeHandler(value);
          changeRequestHandler("loading" , true)
        }}
      />
      <FullScreenMap
        currentMapPosition={currentMapPosition} 
        defaultMapPosition={[mock.region.center.latitude , mock.region.center.longitude]} 
        locationsMarks={request.result.businesses.map(el => ({ coordinates : el.coordinates , name : el.name }))}
      />
    </div>
  );
}

export default App;