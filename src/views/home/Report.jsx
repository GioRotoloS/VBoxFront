import React from 'react';
import Navbar from '../../components/Navbar';
import {Table} from 'reactstrap';

const Report = () => {
    return (

        <div className="report">
            <>
            <Navbar/>
            </>
                <div style={{
                    margin: 30
                }}>
                    <div style={{
                        
                    }}>
                        <input type="date" name="fecha1" id="fecha1"/>
                        <input type="date" name="fecha2" id="fecha2"/>
                        <button>Buscar</button>
                        <div className="btn">
                            <button>PDF</button>
                            <button>Excel</button>
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
                </div>
        </div>
    )
}

export default Report;