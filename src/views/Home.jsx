import React from 'react';
import { Link } from 'react-router-dom';
import p2 from "../img/p2.jpg";
import p1 from "../img/p1.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p5 from "../img/p5.jpg";
import p6 from "../img/p6.jpg";

const Home = () => {
    return (
        <div className="home">

            <h1>Tabla de Proyectos</h1>

            <div className="projects">
                <div className="fila">
                    <div className="project">
                        <div className="img">
                            <img src={p1} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link">
                                <h1>Prueba 1</h1>
                                <p></p>
                            </Link>
                        </div>
                    </div>
                    <div className="project">
                        <div className="img">
                            <img src={p2} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link">
                                <h2>Prueba 2</h2>
                                <p></p>
                            </Link>
                        </div>
                    </div>
                    <div className="project">
                        <div className="img">
                            <img src={p3} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link">
                                <h1>Prueba 3</h1>
                                <p></p>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="fila">
                    <div className="project">
                        <div className="img">
                            <img src={p4} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link">
                                <h1>Prueba 4</h1>
                                <p></p>
                            </Link>
                        </div>
                    </div>
                    <div className="project">
                        <div className="img">
                            <img src={p5} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link">
                                <h1>Prueba 5</h1>
                                <p></p>
                            </Link>
                        </div>
                    </div>
                    <div className="project">
                        <div className="img">
                            <img src={p6} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link">
                                <h1>Prueba 6</h1>
                            </Link>
                        </div>
                    </div>
                </div>
                    
            </div>

        </div>
    )
}

export default Home;