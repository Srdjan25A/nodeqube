import React, { useEffect } from 'react';
import './contactSectionOne.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ContactSectionOne: React.FC = () => {
    useEffect(() => {
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div>
            <div className="contact-one">
                <div className="container contact-container">
                    <h2>Ready to start your project?</h2>
                    <p>
                        Let's bring your vision to life with expert design and development.
                        100+ Success Stories and Counting!
                    </p>
                </div>

                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/nodeqube2022/30min"
                    style={{ minWidth: '320px', height: '700px' }}
                ></div>

                <div className="container contact-email">
                    <h3>You prefer email communication? Drop us an email!</h3>
                    <a href="mailto:office@nodeqube.com">
                        <button>
                            <img src="mail.png" alt="Mail Icon" />
                            office@nodeqube.com
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSectionOne;
