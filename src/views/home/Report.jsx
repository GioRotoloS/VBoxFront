import React from 'react';
import Navbar from '../../components/Navbar';

const Report = () => {
    return (

        <div className="report">
            <>
            <Navbar/>
            </>
                <div className="fecha">
                    <input type="date" name="fecha1" id="fecha1"/>
                    <input type="date" name="fecha2" id="fecha2"/>
                    <button>Buscar</button>
                <div className="btn">
                    <button>PDF</button>
                    <button>Excel</button>
                </div>
            </div>
        </div>
    )
}

export default Report;