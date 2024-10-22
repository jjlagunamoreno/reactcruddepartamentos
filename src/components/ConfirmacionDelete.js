import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class ConfirmacionDelete extends Component {
    state = {
        status: false // Usamos 'status' para manejar tanto la eliminación como la redirección
    }
    // Método para eliminar un departamento
    deleteDepartamento = (idDepartamento) => {
        let request = "api/departamentos/" + idDepartamento;
        let url = Global.apiUrlDepartamentos + request;
        axios.delete(url).then(response => {
            console.log("Confirm Delete");
            this.setState({
                status: true // Usamos status para activar la redirección
            });
        });
    }
    // Manejador para cuando se presiona "No"
    handleCancel = () => {
        this.setState({ status: true }); // También usamos status para redirigir cuando se cancela
    }
    render() {
        // Si `status` es true, navegamos a "/"
        if (this.state.status) {
            return <Navigate to="/" />;
        }

        return (
            <div className="container" style={{ padding: "5%", textAlign: "center" }}>
                <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">¿Estás seguro?</h4>
                    <p>Por favor, confirma tu elección:</p>
                    <hr />
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-success mx-2"
                            onClick={() => this.deleteDepartamento(this.props.id)}
                        >
                            Sí
                        </button>
                        <button
                            className="btn btn-danger mx-2"
                            onClick={this.handleCancel}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
