import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
    /*
  Define state variables for 
  appointment info
  */
    const [title, setTitle] = useState("");
    const [contact, setContact] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContactChange = (e) => {
        setContact(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const appointment = {
            title: title,
            contact: contact,
            date: date,
            time: time,
        };
        props.addAppointment(appointment);
        setTitle("");
        setContact("");
        setDate("");
        setTime("");
        /*
    Add contact info and clear data  
    */
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                    title={title}
                    contact={contact}
                    date={date}
                    time={time}
                    contacts={props.contacts}
                    handleTitleChange={handleTitleChange}
                    handleContactChange={handleContactChange}
                    handleDateChange={handleDateChange}
                    handleTimeChange={handleTimeChange}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList elements={props.appointments} />
            </section>
        </div>
    );
};
