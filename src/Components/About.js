import React, {Component} from 'react';
import {Col, Grid, Row, Image} from 'react-bootstrap';
import '../css/main.css';
import perfil2 from '../Img/me.jpg';

export const About = () => {
    return (
        <Row id="about">
        <Col md={2} sm={12} xs={12} lg={2}>
                <div>
                    <p className="aboutme">ABOUT</p>
                    <p className="aboutme me">ME</p>                
                </div>
            </Col>
        <Col md={4} sm={12} xs={12} lg={4}>
                <div>
                    <img src={perfil2} alt="" className="perfil2" responsive/>
                </div>
            </Col>
            <Col md={6} sm={12} xs={12} lg={6} className="pull-left">
                <div className="description">
                    <h1 className="title text-center">Sobre mi</h1>
                    <p>Soy Front-end Developer gracias a la oportunidad que obtuve cursando estudios de programación en el bootcamp que ofrece <a target="_blank" href="http://www.laboratoria.la/"> Laboratoria</a>. En el transcurso del programa he logrado aprender HTML, CSS, JS y REACT.
                    Hace un tiempo culmine mi carrera universitaria de Marketing, obteniendo una formación integral, logrando canalizar en el presente mis capacidades y habilidades, innatas y adquiridas, para lograr alcanzar las metas propuestas en el sector tecnológico. Con Laboratoria he logrado descubrir mi verdadera pasión hacia la programación, diseño y organización de proyectos en equipo. Soy consciente del mundo de oportunidades a la que actualmente las mujeres podemos acceder, equilibrando nuestras oportunidades con nuestras capacidades, y quiero ser parte del gran cambio que este mundo ofrece a nuestra sociedad
                    </p>
                    <div className="icons text-center">
                        
                        <span className="fa-stack fa-lg">
                        <a target="_blank" href="https://www.linkedin.com/in/claudialoayzam/">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-linkedin fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </a> 
                        </span>
                        
                        <span className="fa-stack fa-lg">
                        <a target="_blank" href="https://github.com/Clauloayza">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-github fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </a> 
                        </span>
                    </div>
                </div>
            </Col>
            </Row>
    );
}