import React from "react";
import { useState, useEffect } from "react";
import { YMaps, Map, TypeSelector, Placemark, RouteButton, ListBox, ListBoxItem} from "@pbe/react-yandex-maps";
import './Map.css';

const mapState = {center:[54.74, 55.96], zoom:12}

const districts = [
    {
        data: { content: 'Дёмский'}, 
        options: { selectOnClick: false },
        coords: [54.69610004300832,55.83554929882804],
        zoom:13,
    },
    {
        data: { content: 'Калининский'}, 
        options: { selectOnClick: false },
        coords: [54.78440889326537,56.10842189191253],
        zoom:13,
    },
    {
        data: { content: 'Кировский'}, 
        options: { selectOnClick: false },
        coords: [54.688253576341744,55.981650624368925],
        zoom:13,
    },
    {
        data: { content: 'Ленинский'}, 
        options: { selectOnClick: false },
        coords: [54.76455610594412,55.91630088166696],
        zoom:13,
    },
    {
        data: { content: 'Октябрьский'}, 
        options: { selectOnClick: false },
        coords: [54.76507958355239,56.01759386289431],
        zoom:13,
    },
    {
        data: { content: 'Орджоникидзевский'}, 
        options: { selectOnClick: false },
        coords: [54.81760702202982,56.09063583268755],
        zoom:13,
    },
    {
        data: { content: 'Советский'}, 
        options: { selectOnClick: false },
        coords: [54.735108827531,55.95830687395495],
        zoom:13,
    },
];


function Maps() {
    const [center, setCenter] = useState(mapState.center);
    const [zoom, setZoom] = useState(mapState.zoom);
    const onItemClick = (coords, newZoom) => {
            setCenter(coords);
            setZoom(newZoom);
        };
    
    const [points, setPoints] = useState([]);
    const [selectedPoint, setSelectedPoint] = useState(true);
    useEffect(() => {
        fetch('./map.json')
        .then((response) => response.json())
        .then((json) => setPoints(json))
        .catch(error => console.error('Ошибка загрузки данных', error))
        .finally(() =>setSelectedPoint(false));
        }, []);

    const handlePointClick = (point) => {
        setSelectedPoint(point);
    }

    return (
        <div>
            <div className='Points'>
                <p>Достропримечательности</p>
                <ul>
                    {points.map(point => (
                        <li key={point.id} onClick={() => handlePointClick(point)}>
                            {point.name} 
                        </li>
                    ))}
                </ul>
            </div>
        
        <div className='MapContent'>
            <YMaps query={{apikey: '5e76ca79-c21f-46a6-b182-f683f2307998'}}>
                
                <Map state={{ center, zoom, controls: ["zoomControl", "fullscreenControl"]}} 
                    width={'100%'}
                    height={'500px'}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    >
                    <ListBox data = {{content: 'Выберите район'}} options={{float:"right"}}>
                      {districts.map((district) => (
                       <ListBoxItem
                         data={district.data}
                         options={district.options}
                         onClick={() => onItemClick(district.coords, district.zoom)}
                         key={district.data.content}
                         
                        />
                        ))}
                    </ListBox>
                    {points.map(point => (
                        <Placemark key={point.id} geometry={point.coords} />
                    ))}
                    {selectedPoint && (
                        <Placemark geometry={selectedPoint.coords} options={{preset: 'islands#redDotIcon'}} />
                    )}
                      <TypeSelector options={{ float: "right" }} /> 
                      <RouteButton options={{ float: "left" }} /> 
                    
                </Map>
            </YMaps>          
        </div>
     </div>   
    );
}
export default Maps;
