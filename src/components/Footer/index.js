import React from "react";
import { Container } from "react-bootstrap";
import { appBrandName } from "../../config";
import { NavlinkContent } from "../AppNavbar";
import Copy from "./Copy";

const Footer = () => <footer>
    <Container 
        className="d-flex justify-content-evenly align-items-center my-2"
        style={{ fontSize: "0.75rem" }}
        >
        <Copy appBrandName={appBrandName()} />
        <div className="d-flex"><NavlinkContent /></div>
    </Container>
</footer>;

export default Footer;