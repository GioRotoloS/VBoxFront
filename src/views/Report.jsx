import React from 'react';

const Report = () => {
    return (
        <div className="report">
            <div className="fechas">
                <input type="date" name="fecha1" id="fecha1"/>
                <input type="date" name="fecha2" id="fecha2"/>
                <button>Buscar</button>
            </div>
        </div>
    )
}

export default Report;