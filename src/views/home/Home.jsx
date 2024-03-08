import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../../components/Navbar';
import nofotos from "../../img/nofotos.png";
import {Button, Card, CardBody, CardGroup, CardImg, CardTitle, Row, Col} from 'reactstrap';


const Home = () => {

    const [posts, setPosts] = useState([])


    useEffect(()=>{
        const fetchData = async ()=>{
            try{

                const res = await axios.get(`http://localhost:5500/api/posts/companies`)
                setPosts(res.data);

            }catch(err){
                console.log(err)}
        };
        fetchData();

    },[]);

    return (
        <div className="home" style={{

        }}>
            <>
            <Navbar/>
            </>
            
            <div className='container fluid justify-content-center text-center' style={{
                width: 700,
                marginTop: 10,
                marginBottom: 10
            }}>
                <Row xs={1} md={3} style={{
                    marginTop: 10,
                }}>
                    {posts.map((companies)=>(
                        <Col>
                            <Card className='m-2 p-1 border rounded' key={companies.cid} style={{
                                width: "220px"
                            }}>
                                {/* <CardImg alt="Card image cap" src={companies.picture} top width="100%" height="100px"/> */}
                                {companies.picture?(
                                        <CardImg alt="Card image cap" src={companies.picture} top width="100%" height="100px"/>
                                    ) : (
                                        <CardImg alt="Card image cap" src={nofotos} top width="100%" height="100px"/>
                                    )}
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {companies.name}
                                    </CardTitle>
                                    <Button href= {`/report/${companies.cid}`} style={{
                                        background: "#0c5aa9"
                                    }}>
                                        Reporte
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
    )
}

export default Home;