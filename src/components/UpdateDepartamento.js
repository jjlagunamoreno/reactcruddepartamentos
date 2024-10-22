import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom'

export default class UpdateDepartamento extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status: false
    }

    updateDepartamento = (e) => {
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let localidad = this.cajaLocalidad.current.value;
        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }
        let request = "api/departamentos";
        let url = Global.apiUrlDepartamentos + request;

        axios.put(url, departamento).then(response => {
            console.log("Update...");
            this.setState({
                status: true
            })
        })
    }
    render() {
        return (
            <div style={{ padding: "5%" }}>
                {
                    this.state.status == true &&
                    (<NavLink to="/"></NavLink>)
                }
                <h1>Update Departamento</h1>
                <NavLink to="/">Atrás</NavLink>
                <hr />
                <from>
                    <label>ID Departamento: </label>
                    <input type='text' ref={this.cajaId} defaultValue={this.props.id} className='form-control' style={{ width: "50%" }} />
                    <label>Nombre Departamento: </label>
                    <input type='text' ref={this.cajaNombre} defaultValue={this.props.nombre} className='form-control' style={{ width: "50%" }} />
                    <label>Localidad Departamento: </label>
                    <input type='text' ref={this.cajaLocalidad} defaultValue={this.props.localidad} className='form-control' style={{ width: "50%" }} />
                    <button onClick={this.updateDepartamento} className='btn btn-warning'>
                        Insertar
                    </button>
                </from>
            </div>
        )
    }
}
