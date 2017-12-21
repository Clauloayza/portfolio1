import React, {Component} from 'react'; 
import '../css/main.css';
import {Col, Grid, Row, Image} from 'react-bootstrap';
import icono from '../Img/icono.png';
export const Icono = () => {
    return (
        <section className="icono text-center" id="icono">
                <Col md={12} sm={12} xs={12} lg={12}>
                
                    <img src={icono} alt="" className="icono text-center" responsive/>
                
                </Col>
        </section>
    );
}