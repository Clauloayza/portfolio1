import React, {Component} from 'react'; 
import '../css/main.css';
import {Col, Grid, Row, Image} from 'react-bootstrap';
export const Header = () => {
    return (
        <section className="header text-center" id="header">
                <Col md={12} sm={12} xs={12} lg={12}>
                    <h1 className="name">Claudia Loayza Medina</h1>
                    <h2 className="title">Front-End Developer Jr.</h2>
                </Col>
        </section>
    );
}