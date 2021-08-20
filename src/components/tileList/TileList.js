import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
    return (
        <div>
            {props.elements.map((element) => {
                return <Tile element={element} />;
            })}
        </div>
    );
};
