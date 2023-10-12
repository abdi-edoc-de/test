import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-row">
                    <div className="logo">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="logo-image"
                        />
                    </div>
                    <div className="navigation">
                        <a href="#" className="footer-link">
                            Terms of Service
                        </a>
                        <a href="#" className="footer-link">
                            Privacy Policy
                        </a>
                        <a href="#" className="footer-link">
                            Legal Disclaimer
                        </a>
                        <a href="#" className="footer-link">
                            Refund Policy
                        </a>
                        <a href="#" className="footer-link">
                            Terms of Use
                        </a>
                    </div>
                </div>
                <div className="lineFooter"></div>
                <p className="disclaimer">
                    Disclaimer: GovAssist is not affiliated with any United
                    States government agency or department. Costs for consulting
                    services do NOT include any government application, medical
                    examination, filing, or biometric fees. This website does
                    not provide legal advice and we are not a law firm. None of
                    our customer service representatives are lawyers and they
                    also do not provide legal advice. We are a private,
                    internet-based travel and immigration consultancy provider
                    dedicated to helping individuals travel to the United
                    States. You may apply by yourself directly at
                    travel.state.gov or at uscis.gov. GovAssist is affiliated
                    with the UT law firm GovAssist Legal which provides legal
                    services on immigration matters. Only licensed immigration
                    professionals can provide advice, explanation, opinion, or
                    recommendation about possible legal rights, remedies,
                    defenses, options, selection of forms, or strategies.
                </p>
            </div>
            <div className="copyFooter">
                <p>
                    {" "}
                    Copyright &copy; 2016-2023 GovAssist, LLC All Rights
                    Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
