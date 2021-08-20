import React from "react";

export const TileList = (props) => {
    return (
        <div>
            {props.contacts.map((contact) => (
                <ul key={contact.name}>
                    <li>Name : {contact.name}</li>
                    <li>Phone Number : {contact.phone} </li>
                    <li>Email : {contact.email}</li>
                </ul>
            ))}
        </div>
    );
};
