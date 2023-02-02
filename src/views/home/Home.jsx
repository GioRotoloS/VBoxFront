import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import nofotos from "../../img/nofotos.png";


const Home = () => {
    return (
        <div className="home">
            <>
            <Navbar/>
            </>
            <div className="projects">
                <div className="fila">
                    <div className="project">
                        <div className="img">
                           <img src={nofotos} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to="/report">
                                <h1>Prueba 1</h1>
                                <p></p>
                            </Link>
                        </div>
                    </div>
                    <div className="project">
                        <div className="img">
                        <img src={nofotos} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link">
                                <h1>Prueba 2</h1>
                                <p></p>
                            </Link>
                        </div>
                    </div>
                    <div className="project">
                        <div className="img">
                        <img src={nofotos} alt="" />
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
                        <img src={nofotos} alt="" />
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
                        <img src={nofotos} alt="" />
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
                        <img src={nofotos} alt="" />
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