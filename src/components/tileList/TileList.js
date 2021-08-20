import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
    return (
        <div>
            {props.contacts.map((contact) => {
                return <Tile contact={contact} />;
            })}
        </div>
    );
};
