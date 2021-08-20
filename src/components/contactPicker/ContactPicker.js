import React from "react";

export const ContactPicker = (props) => {
    return (
        <select name="contact" id="contact" required onChange={props.handleContactChange}>
            <option value="" selected="seleted">
                --Please choose an contact--
            </option>
            {props.contacts.map((contact) => (
                <option value={Object.values(contact).join(" - ")}>{Object.values(contact).join(" - ")}</option>
            ))}
        </select>
    );
};
