import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
    /*
  Define state variables for 
  contacts and appointments 
  */

    const [contacts, setContacts] = useState([{ name: "name", phone: "01044441111", email: "email@naver.com" }]);
    const [appointments, setAppointments] = useState([]);

    const ROUTES = {
        CONTACTS: "/contacts",
        APPOINTMENTS: "/appointments",
    };

    /*
  Implement functions to add data to
  contacts and appointments
  */
    const addContact = (contact) => {
        const updateContacts = [...contacts, { name: contact.name, phone: contact.phone, email: contact.email }];
        setContacts(updateContacts);
    };

    const addAppointment = (appointment) => {
        const updateAppointments = [...appointments, { title: appointment.title, contact: appointment.contact, date: appointment.date, time: appointment.time }];
        setAppointments(updateAppointments);
    };

    return (
        <>
            <nav>
                <NavLink to={ROUTES.CONTACTS} activeClassName="active">
                    Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
                    Appointments
                </NavLink>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={ROUTES.CONTACTS} />
                    </Route>
                    <Route path={ROUTES.CONTACTS}>
                        {/* Add props to ContactsPage */}
                        <ContactsPage contacts={contacts} addContact={addContact} />
                    </Route>
                    <Route path={ROUTES.APPOINTMENTS}>
                        {/* Add props to AppointmentsPage */}
                        <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} />
                    </Route>
                </Switch>
            </main>
        </>
    );
}

export default App;
