import React from "react";

export const ContactForm = (props) => {
    return (
        <form className="AddContact" onSubmit={props.handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="name">Name:{props.checkDuplicate(props.name) ? "Name is duplicate" : ""}</label>
                    <input type="text" id="name" name="user_name" value={props.name} required minlength="1" maxlength="20" size="20" onChange={props.handleNameChange} />
                </li>
                <li>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="user_phone" value={props.phone} required minlength="10" maxlength="11" size="20" pattern="[0-9]+" onChange={props.handlePhoneChange} />
                </li>
                <li>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="user_email" value={props.email} required minlength="5" size="20" onChange={props.handleEmailChange} />
                </li>
                <input type="submit" value="Add"></input>
            </ul>
        </form>
    );
};
