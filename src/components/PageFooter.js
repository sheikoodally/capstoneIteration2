import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';


export default class PageFooter extends Component{
  state={
    isOpen:false
}
handleToggle = () =>{
    this.setState({isOpen:!this.state.isOpen})
}
render() {
    return (
      <MDBFooter color="stylish-color-dark" className="page-footer font-small">
      <MDBContainer fluid className="row text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Footer IS STILL UNDER CONSTRUCTION
            </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Team Member
            </h5>
            <ul className="list-unstyled text-md-left mx-auto">
              <li>
                <a href="sheikoodally.com">Sheik Oodally</a>
              </li>
              <li>
                <a href="#!">Chris Vuong</a>
              </li>
              <li>
                <a href="#!">Austin Boakes</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Contact Us
            </h5>
            <ul className="list-unstyled text-md-left mx-auto">
              <li>
                <a href="#!">sheikoodally@hotmail.com</a>
              </li>
              <li>
                <a href="#!">hvuong7031@conestogac.on.ca</a>
              </li>
              <li>
                <a href="#!">aboakes1855@conestogac.on.ca</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Others
            </h5>
            <ul className="list-unstyled text-md-left mx-auto">
              <li>
                <Link to="/privacypol"> Privacy Policy</Link>
              </li>
              <li>
                <Link to="/postpol"> Posting Policy</Link>
              </li>
              <li>
                <Link to="/helpdesk"> Help Desk</Link>
              </li>
              <li>
                <Link to="/termuse"> Term of uses</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-instagram"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
    )
  }
}