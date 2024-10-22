import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuDepartamentos from './MenuDepartamentos'
import HomeDepartamentos from './HomeDepartamentos'
import CreateDepartamentos from './CreateDepartamentos'
import DetalleDepartamento from './DetalleDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import ConfirmacionDelete from './ConfirmacionDelete'

export default class Router extends Component {

    render() {
        function DetalleDepartamentoElement(params) {
            let { iddepartamento } = useParams();
            return (<DetalleDepartamento id={iddepartamento} />)
        }
        function UpdateDepartamentoElement(params) {
            let { id, nombre, localidad } = useParams();
            return (<UpdateDepartamento id={id} nombre={nombre} localidad={localidad} />)
        }
        function ConfirmacionDeleteElement(params) {
            let { id } = useParams();
            return (<ConfirmacionDelete id={id} />)
        }
        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path="/" element={<HomeDepartamentos />}></Route>
                    <Route path="/create" element={<CreateDepartamentos />}></Route>
                    <Route path="/detalles/:iddepartamento"
                        element={<DetalleDepartamentoElement />}></Route>
                    <Route path="/update/:id/:nombre/:localidad"
                        element={<UpdateDepartamentoElement />}></Route>
                    <Route path="/confirmaciondelete/:id" element={<ConfirmacionDeleteElement />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
