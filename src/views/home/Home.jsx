import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import nofotos from "../../img/nofotos.png";
import {Button, Card, CardBody, CardGroup, CardImg, CardTitle} from 'reactstrap'


const Home = () => {
    return (
        <div className="home">
            <>
            <Navbar/>
            </>
            
            <div className='container justify-content-center text-center' style={{
        width: 700,
        marginTop: 10,
        marginBottom: 10
      }}>
                <CardGroup style={{
                    marginTop: 10,
                }}>
                    <Card className='m-2 p-1 border rounded'>
                        <CardImg alt="Card image cap" src={nofotos} top width="100%" height="100px"/>
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <Button href='/report' style={{
                                background: "#0c5aa9"
                            }}>
                                Reporte
                            </Button>
                        </CardBody>
                    </Card>
                    <Card className='m-2 p-1 border rounded'>
                        <CardImg alt="Card image cap" src={nofotos} top width="100%" height="100px"/>
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <Button href='/report' style={{
                                background: "#0c5aa9"
                            }}>
                                Reporte
                            </Button>
                        </CardBody>
                    </Card>
                    <Card className='m-2 p-1 border rounded'>
                        <CardImg alt="Card image cap" src={nofotos} top width="100%" height="100px"/>
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <Button href='/report' style={{
                                background: "#0c5aa9"
                            }}>
                                Reporte
                            </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
                <CardGroup style={{
                    marginTop: 10
                }}>
                <Card className='m-2 p-1 border rounded'>
                        <CardImg alt="Card image cap" src={nofotos} top width="100%" height="100px"/>
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <Button href='/report' style={{
                                background: "#0c5aa9"
                            }}>
                                Reporte
                            </Button>
                        </CardBody>
                    </Card>
                    <Card className='m-2 p-1 border rounded'>
                        <CardImg alt="Card image cap" src={nofotos} top width="100%" height="100px"/>
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <Button href='/report' style={{
                                background: "#0c5aa9"
                            }}>
                                Reporte
                            </Button>
                        </CardBody>
                    </Card>
                    <Card className='m-2 p-1 border rounded'>
                        <CardImg alt="Card image cap" src={nofotos} top width="100%" height="100px"/>
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <Button href='/report' style={{
                                background: "#0c5aa9"
                            }}>
                                Reporte
                            </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>

        </div>
    )
}

export default Home;