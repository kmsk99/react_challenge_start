import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
    const getTodayString = () => {
        const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    return (
        <form className="AddAppointment" onSubmit={props.handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={props.title} required maxlength="20" size="20" onChange={props.handleTitleChange} />
                </li>
                <li>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={props.date} onChange={props.handleDateChange} required min={getTodayString} />
                </li>
                <li>
                    <label htmlFor="time">Time:</label>
                    <input type="time" id="time" name="time" value={props.time} onChange={props.handleTimeChange} required />
                </li>
                <li>
                    <label htmlFor="contact">Contact:</label>
                    <ContactPicker contacts={props.contacts} contact={props.contact} handleContactChange={props.handleContactChange} />
                </li>
                <input type="submit" value="Add"></input>
            </ul>
        </form>
    );
};
