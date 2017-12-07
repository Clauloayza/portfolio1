import React, {Component} from 'react';
import '../css/main.css';
import asientos from '../Img/Projects/reserva.png';
import whatsapp from '../Img/Projects/whatsapp.png';
import invitations from '../Img/Projects/registrationApp.png';
import bicilocas from '../Img/Projects/biciLocas.png';
import firtsportfolio from '../Img/Projects/portfolio.png';
import hackerapi from '../Img/Projects/hackerApi.png';
import lyft from '../Img/Projects/lyft.png';
import scoreboard from '../Img/Projects/scoreboard.png';
import triviamvc from '../Img/Projects/triviamvc.png';
import routing from '../Img/Projects/routing.png';
import {Col, Grid, Row, ProgressBar, ControlLabel} from 'react-bootstrap';

export const Portfolio = ({title}) => {
    return (
        <div className="projects">
            <Grid >
            <Row>
            <Col md={4} sm={12} xs={12} lg={4}>
                <div>
                    <p className="portfolioimages">MY<p className="portfolioimages me">PORTFOLIO</p></p>
                                  
                </div>
            </Col>
            </Row> 
            <Row>
                <Col sm={12} md={4} lg={4} xs={12}>
                    <div className="portafolioMap" >
                    <a
                        href="https://github.com/Clauloayza/seatsReserve"
                        target="_blank"
                        className="contact-icon">
                        <img className="thumbnail" src={asientos} alt="" className="" responsive/>
                    </a>
                        <div className="caption">
                            <h3 className="dark-letter">Reserva de Asientos</h3>
                            <p className="italic">Reservar asientos, nunca había sido más sencillo (model)</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} xs={12}>
                    <div className="portafolioMap">
                    <a
                        href="https://github.com/Clauloayza/ProyectoWhatsapp"
                        target="_blank"
                        className="contact-icon">
                        <img className="thumbnail" src={whatsapp} alt="" className="" responsive/>
                    </a>
                        <div className="caption">
                            <h3 className="dark-letter">Whatsapp</h3>
                            <p className="italic">Mensajea con tus amigos</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} xs={12}>
                    <div className="portafolioMap">
                    <a
                        href="https://github.com/Clauloayza/RegistrationAppMVC"
                        target="_blank"
                        className="contact-icon">
                        <img className="thumbnail" src={invitations} alt="" className="" responsive/>
                    </a>
                        <div className="caption">
                            <h3 className="dark-letter">Invitados</h3>
                            <p className="italic">Checklist con tus invitados de tu boda</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={4} lg={4} xs={12}>
                    <div className="portafolioMap">
                    <a
                        href="https://github.com/Clauloayza/bicis-locas-lvl2"
                        target="_blank"
                        className="contact-icon">
                        <img className="thumbnail" src={bicilocas} alt="" className="" responsive />
                    </a>
                        
                        <div className="caption">
                            <h3 className="dark-letter">Registro para elegir una bicicleta</h3>
                            <p className="italic">Elige un tipo de bicicleta, muy necesarios!</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} xs={12}>
                    <div className="portafolioMap">
                    <a
                        href="https://github.com/Clauloayza/proyectoPortfolio"
                        target="_blank"
                        className="contact-icon">
                        <img className="thumbnail" src={firtsportfolio} alt="" className="" responsive/>
                    </a>
                        <div className="caption">
                            <h3 className="dark-letter">Mi primer portfolio</h3>
                            <p className="italic">Conóceme un poco</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} xs={12}>
                    <div className="portafolioMap">
                    <a
                        href="https://github.com/Clauloayza/hacker"
                        target="_blank"
                        className="contact-icon">
                        <img className="thumbnail" src={hackerapi} alt="" className="" responsive/>
                    </a>
                        
                        <div className="caption">
                            <h3 className="dark-letter">Hacker api</h3>
                            <p className="italic">Encuentra por nombre de author</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={4} lg={4} xs={12}>
                    <div className="portafolioMap">
                    <a
                        href="https://github.com/Clauloayza/lyft-jquery-map"
                        target="_blank"
                        className="contact-icon">
                        <img className="thumbnail" src={lyft} alt="" className="" responsive/>
                    </a>
                        <div className="caption">
                            <h3 className="dark-letter">Modo movil lyft</h3>
                            <p className="italic">Pide un taxi y el modelo para que puedan recogerte, aplicación</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} xs={12}>
                    <div className="portafolioMap">
                    <a
                        href="https://github.com/Clauloayza/proyectoSass"
                        target="_blank"
                        className="contact-icon">
                        <img className="thumbnail" src={scoreboard} alt="" className="" responsive/>
                    </a>
                        <div className="caption">
                            <h3 className="dark-letter">Scoreboard</h3>
                            <p className="italic">Controla y agrega a jugadores en sus partidas</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} xs={12}>
                    <div className="portafolioMap">
                    <a
                        href="https://github.com/Clauloayza/deepdiveMVC"
                        target="_blank"
                        className="contact-icon">
                        <img className="thumbnail" src={triviamvc} alt="" className="" responsive/>
                    </a>
                        <div className="caption">
                            <h3 className="dark-letter">Trivia </h3>
                            <p className="italic">Escoge las alternativas, algo curioso!</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={4} md={4} lg={4} xs={12}>
                    <div className="portafolioMap">
                    <a
                        href="https://github.com/Clauloayza/router"
                        target="_blank"
                        className="contact-icon">
                        <img className="thumbnail" src={routing } alt="" className="" responsive/>
                    </a>
                        <div className="caption">
                            <h3 className="dark-letter">Router</h3>
                            <p className="italic">Platarforma más completa</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4} md={4} lg={4} xs={12}>
                   
                </Col>
            </Row>
        </Grid>
        </div>
        
    );
}