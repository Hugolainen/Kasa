import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
    render() {
        return (
            <div>
                <section className="notFound">
                    <p className="notFound__error"> 404 </p>
                    <p className="notFound__message"> Oops! It looks like this page doesn’t exist. </p>
                    <Link to={"/"}>
                        <p className="notFound__goBack"> Go back to home page </p>
                    </Link>
                </section>
            </div>
        );
    }
  }
export default NotFound;