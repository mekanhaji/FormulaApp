import React from "react";
import { getAllFormulaNames } from "../../utils/search";
import './Help.css'

export const Help = ({ pushMsg }) => {
    const list = getAllFormulaNames();

    return (
        <div className="help">
            {list.map((item, index) => (
                <button onClick={(e) => pushMsg(item)}>{item}</button>
            ))}
        </div>
    );
};
