import React from 'react';
import Navbar from '../../components/Navbar';
import {Table, Button} from 'reactstrap';

const Report = () => {

    const user = localStorage.getItem("user")
    console.log(user);
    return (

    

        <div className="report" style={{
        }}>
            <>
            <Navbar/>
            </>
                <div style={{
                    margin: 30
                }}>
                    <div style={{
                        marginLeft:20,
                        
                    }}>
                        <input type="date" name="fecha1" id="fecha1" style={{
                            marginRight: 20
                        }}/>
                        <input type="date" name="fecha2" id="fecha2" style={{
                            marginRight: 20
                        }}/>
                        <Button style={{
                        background: "#0c5aa9"
                        }}>Buscar</Button>
                        <div className="btn" style={{
                            marginLeft: 500,
                            
                        }}>
                            <Button style={{
                            background: "#F40F02",
                            margin: 10
                            }}>PDF
                            </Button>
                            <Button style={{
                            background: "#2d572d"
                            }}>Excel
                            </Button>
                        </div>
                    </div>

                    <div className='text-center'>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    First Name
                                </th>
                                <th>
                                    Last Name
                                </th>
                                <th>
                                    Username
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    Mark
                                </td>
                                <td>
                                    Otto
                                </td>
                                <td>
                                    @mdo
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">
                                    2
                                </th>
                                <td>
                                    Jacob
                                </td>
                                <td>
                                    Thornton
                                </td>
                                <td>
                                    @fat
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                    Larry
                                </td>
                                <td>
                                    the Bird
                                </td>
                                <td>
                                    @twitter
                                </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <Button style={{
                        marginLeft: 1000
                    }} href="/home">Regresar</Button>
                </div>
        </div>
    )
}

export default Report;