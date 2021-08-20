import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
    /*
  Define state variables for 
  contact info and duplicate check
  */
    const contacts = props.contacts;
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkDuplicate(name)) {
            alert("Name is duplicate");
        } else {
            const contact = {
                name: name,
                phone: phone,
                email: email,
            };
            props.addContact(contact);
            setName("");
            setPhone("");
            setEmail("");
        }
        /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    };

    /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
    useEffect(() => {});

    const checkDuplicate = (input) => {
        const isDuplicate = contacts.some((item) => {
            return item.name === input;
        });
        return isDuplicate;
    };

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={name}
                    phone={phone}
                    email={email}
                    handleNameChange={handleNameChange}
                    handlePhoneChange={handlePhoneChange}
                    handleEmailChange={handleEmailChange}
                    handleSubmit={handleSubmit}
                    checkDuplicate={checkDuplicate}
                />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList contacts={contacts} />
            </section>
        </div>
    );
};
