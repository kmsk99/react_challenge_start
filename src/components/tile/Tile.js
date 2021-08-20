import React from "react";

export const Tile = (props) => {
    return (
        <div className="tile-container">
            {Object.values(props.element).map((value, index) => {
                return <p className={index === 0 ? "tile-title" : "tile"}>{value}</p>;
            })}
        </div>
    );
};
