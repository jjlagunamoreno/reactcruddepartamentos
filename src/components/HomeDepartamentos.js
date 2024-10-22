import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import loadingImage from '../assets/images/loading.gif'
import { NavLink } from 'react-router-dom'

export default class HomeDepartamentos extends Component {
    state = {
        status: false,
        departamentos: []
    }
    loadDepartamentos = () => {
        let request = "api/departamentos";
        let url = Global.apiUrlDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                status: true,
                departamentos: response.data
            })
        })
    }
    // deleteDepartamento = (idDepartamento) => {
    //     let request = "api/departamentos/" + idDepartamento;
    //     let url = Global.apiUrlDepartamentos + request;
    //     axios.delete(url).then(response => {
    //         console.log("Delete");
    //         this.loadDepartamentos();
    //     })
    // }
    componentDidMount = () => {
        this.loadDepartamentos();
    }
    render() {
        if (this.state.status == false) {
            return (
                <div style={{ padding: "5%", textAlign: "center" }}>
                    <img src={loadingImage}></img >
                </div>
            )
        } else {
            return (
                <div style={{ padding: "5%", textAlign: "center" }}>
                    <h1>Home Departamentos</h1>

                    <table className='table table-light'>
                        <thead>
                            <tr>
                                <th>ID DEPARTAMENTO</th>
                                <th>NOMBRE</th>
                                <th>LOCALIDAD</th>
                                <th>opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((departamento, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{departamento.numero}</td>
                                            <td>{departamento.nombre}</td>
                                            <td>{departamento.localidad}</td>
                                            <td>
                                                <NavLink to={"/detalles/" + departamento.numero}>Detalles</NavLink> |
                                                <NavLink to={"/update/" + departamento.numero + "/" + departamento.nombre + "/" + departamento.localidad}>Update</NavLink> |
                                                <NavLink to={"confirmaciondelete/" + departamento.numero}><button className='btn btn-danger'>Delete</button></NavLink>
                                                {/* <button className='btn btn-danger' onClick={() => {
                                                    this.deleteDepartamento(departamento.numero);
                                                }}>
                                                    Delete
                                                </button> */}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
