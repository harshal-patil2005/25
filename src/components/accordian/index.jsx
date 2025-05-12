//single selection 
// multi selection

import { useState } from "react";
import data from "./data";
import './styles.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiDelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId);

        if (findIndexOfCurrentId == -1) cpyMutiple.push(getCurrentId)
        else cpyMutiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMutiple);
    }
    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiDelection)}>Enable multi selection </button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem =>
                        <div className="item">
                            <div onClick={enableMultiDelection ?
                                () => handleMultiSelection(dataItem.id) :
                                () => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span> + </span>
                                {
                                    enableMultiDelection
                                    ? multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className="content"> {dataItem.answer} </div>
                                    )
                                    : selected === dataItem.id && (
                                        <div className="content"> {dataItem.answer} </div>
                                    )
                                }
                            </div>
                            {/* {
                                selected === dataItem.id || 
                                multiple.indexOf(dataItem.id) !== -1 ?
                                    <div className="content"> {dataItem.answer} </div>
                                    : null
                            } */}
                        </div>)
                    : <div> No data present </div>
            }
        </div>
    </div>;
}