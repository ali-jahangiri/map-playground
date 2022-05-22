import { Map, Overlay } from "pigeon-maps";


const FullScreenMap = ({ locationsMarks = [] , defaultMapPosition , currentMapPosition = [] }) => {
    return (
        <div className="fullScreenMap">
            <Map maxZoom={16} minZoom={14} center={currentMapPosition} defaultCenter={defaultMapPosition} defaultZoom={14}>
                {
                    locationsMarks.map((el , i) => (
                        <Overlay  className={`fullScreenMap__overlayItem " ${currentMapPosition[0] === el.latitude && currentMapPosition[1] === el.longitude ? "fullScreenMap__overlayItem--active" : ""}`} width={50} key={i} anchor={[el.latitude , el.longitude]}>
                            <div className="fullScreenMap__overlayItem__content">
                                lroem
                            </div>
                            <span className="fullScreenMap__overlayItem__dot" />
                        </Overlay>
                    ))
                }
            </Map>
        </div>
    )
}


export default FullScreenMap;