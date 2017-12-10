import React, {Component} from 'react';
import {Col, Grid, Row, Image} from 'react-bootstrap';
import skills from '../Img/herramientas.jpg';
import '../css/main.css';

export const Skills = () => {
    return (
        <Row className="skills all">
            
            <Col md={4} sm={12} lg={4} xs={12}  responsive>
            <ul className="no-bullets">
                    <li>
                        <span className="ability-title">REDUX</span>
                        <span className="ability-score">
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle-o" aria-hidden="true"></i>
                            <i className="fa fa-circle-o" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">REACT</span>
                        <span className="ability-score">
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle-o" aria-hidden="true"></i>
                            <i className="fa fa-circle-o" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">JAVASCRIPT/ES6</span>
                        <span className="ability-score">
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle-o" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">JQUERY</span>
                        <span className="ability-score">
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle-o" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">GITHUB</span>
                        <span className="ability-score">
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">HTML</span>
                        <span className="ability-score">
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">CSS/SASS</span>
                        <span className="ability-score">
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                        </span>
                    </li>                    
                    <li>
                        <span className="ability-title">BOOTSTRAP</span>
                        <span className="ability-score">
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">REACT BOOTSTRAP</span>
                        <span className="ability-score">
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle-o" aria-hidden="true"></i>
                            <i className="fa fa-circle-o" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">MARKETING</span>
                        <span className="ability-score">
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle filled" aria-hidden="true"></i>
                            <i className="fa fa-circle-o" aria-hidden="true"></i>
                        </span>
                    </li>
                </ul>
            </Col>
            <Col md={4} sm={12} lg={4} xs={12}>
                <div>
                     <img src={skills} alt="" className="skillsImg" responsive/>
                </div>
            </Col>
            <Col md={4} sm={12} lg={4} xs={12}>
            <div>
                    <p className="myskills">MY</p>
                    <p className="myskills skillsmatch">SKILLS</p>                
                </div>
            </Col>
        </Row> 
    );
}