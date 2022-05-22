import { useEffect, useState } from "react";
import FullScreenMap from "./components/FullScreenMap";
import MainSection from "./components/MainSection";
import { mock } from "./components/mock";
import fetcher from "./utils/fetcher";




function App() {
  const [resultItems, setResultItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const [currentMapPosition, setCurrentMapPosition] = useState([]);


  const hoverOnItemsHandler = ({ latitude , longitude }) => {
    setCurrentMapPosition([latitude , longitude])
  }

  useEffect(() => {

  } , []);


  return (
    <div className="App">
      <MainSection hoverOnItemsHandler={hoverOnItemsHandler} searchResultsItem={mock.businesses} searchValue={searchValue} setSearchValue={setSearchValue} />
      <FullScreenMap currentMapPosition={currentMapPosition} defaultMapPosition={[mock.region.center.latitude , mock.region.center.longitude]} locationsMarks={mock.businesses.map(el => el.coordinates)} />
    </div>
  );
}

export default App;