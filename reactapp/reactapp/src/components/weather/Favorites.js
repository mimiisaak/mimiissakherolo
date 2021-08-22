import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { IComboBoxStyles, SelectableOptionMenuItemType, IButtonStyles, } from '@fluentui/react';
import DatePicker from "react-datepicker";
import { DialogContentText } from '@material-ui/core';
import { HashRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom'
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import './Favorites.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from '../weather/store';
import { cityadd, favoritecity } from '../weather/actions';

export default function Favorites() {
    const APIKEY = "PsrXOHf2tohNLpKUAKa8fvVxDBwpM5bz";
    const [cities, setCities] = useState([])
    const [details, setDetails] = useState([]);
    const [reducre, setReducre] = useState(store.getState().arr);

    useEffect(() => {
        reducre.map(i => setCities(cities => [...cities, (i.Key, detailstemp(i.keys))]))
        console.log(cities)

    }, []);
    function newTemp(cityId) {
        setCities(cities => [...cities, (cityId, details.map(i => i.Temperature.Metric.Value))])
    }
    function temperatora2(cityId) {
        console.log(axios.get("http://dataservice.accuweather.com/currentconditions/v1/210841?apikey=DgrqDkN3UnwGDADZfmGjjOATui3tFMjK&language=en&details=false")
            .then(res => res.data)
        );    
    }

    function detailstemp(locationKey) {
        temperatora(locationKey).then(data => setDetails(data))
        console.log(details)
        let t = details.map(i => i.WeatherText)
        console.log(t)
        return t

    }
    function temperatora(locationKey) {
        let arr = []
        console.log(locationKey)
        return axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + locationKey + '?apikey=DgrqDkN3UnwGDADZfmGjjOATui3tFMjK&language=en&details=false')
            .then(res => res.data);

    }
    function changeDefult(obj) {
        store.dispatch(favoritecity(obj));
    }
    function color() {
        var t = new Date().getHours();
        if (t < 10) {
            document.write("Have a good morning!");
            document.body.style.backgroundColor = "yellow";
        } else if (t < 20) {
            document.write("Have a good evening!");
            document.body.style.backgroundColor = "orange";
        } else {
            document.write("Have a good night!");
            document.body.style.backgroundColor = "grey";
        }
    }
    return (
        <div>
            
            <div class="container d-flex justify-content-center">
                <div class="weather">
                    <div class="row">
                        {reducre.length > 0 ?

                            reducre.map(item => <div>{
                                <div class=" col-md-6">
                                    <div class="card"> <span class="icon"><img class="img-fluid" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
                                        <div class="title">
                                            <p>{item.LocalizedName}</p>
                                        </div>
                                        <div class="temp">{detailstemp(item.Key)}<sup>&deg;</sup></div>
                                        <div class="row">
                                            <div class="link-to-home-page"> <Link to='/'><button className="btn" onClick={e => changeDefult(item)}>Watching the weather of the favorite</button></Link></div>
                                        </div>
                                    </div>
                                </div>
                            }</div>)
                            : <h2> No favorites</h2>
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}
