import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBRow, MDBCol } from "mdbreact";


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        };
    }
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBContainer>
            <div class="d-flex justify-content-between">
            <MDBNavbar color="primary-color" purple-text light transparent expand="md" class="flex-center" style={{ textAlign: "center" }}>
                <MDBNavbarBrand style={{ textAlign: "center" }}>
                
                
                </MDBNavbarBrand>
                <br></br>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav right>
                            <MDBNavItem active>
                            <MDBNavLink to="/"><i className="fas fa-home"></i>
                            Home
                            </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/">
                                <i class="fab fa-pagelines"></i>
                            Parks
                            </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                            <MDBNavLink to="/">
                                <i class="fas fa-hotdog"></i>
                                Restaurants
                                    </MDBNavLink>
                                    </MDBNavItem>
                            <MDBNavItem>
                            <MDBNavLink to="/">
                                <i class="fas fa-baby"></i>
                                Adopt
                                </MDBNavLink>
                                </MDBNavItem>
                                </MDBNavbarNav>
                                </MDBCollapse>
                                </MDBNavbar>
                                </div>
                                <MDBRow style={{ textAlign: "center" }}>
                                <MDBCol style={{ textAlign: "center", backgroundColor: "#303841" }}>
                                <Link className="navbar-brand containerFluid" to="/">
                                <img className="containerFluid" src="https://i.ibb.co/PtW7hMH/dogbanner.png" alt="My dog and Me" />
                                </Link>
                                
                                </MDBCol>
                                </MDBRow>
            </MDBContainer>
            
        );
    }
}

export default Navbar;