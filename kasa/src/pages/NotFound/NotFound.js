import React, { Component } from 'react'

class NotFound extends Component {
    render() {
        return (
            <div>
                <section className="notFound">
                    <p className="notFound__error"> 404 </p>
                    <p className="notFound__message"> Oops! It looks like this page doesn’t exist. </p>
                    <p className="notFound__goBack"> Go back to home page </p>
                </section>
            </div>
        );
    }
  }
export default NotFound;