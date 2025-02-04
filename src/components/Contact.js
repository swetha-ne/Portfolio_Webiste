import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
    <section id="contact">
        <h1>Contact Me</h1>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <label>
                Message:
                <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
        </form>
    </section>
);

export default Contact;
