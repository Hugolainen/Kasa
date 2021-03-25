import React, { Component } from 'react'

class Dropdown extends Component {
    constructor() {
        super();
        
        this.state = {
          showContent: false,
        }
        
        this.showContent = this.showContent.bind(this);
    }

    // Manage the click event on the dropdown title bar (extend, retract)
    showContent(event) {
        event.preventDefault();

        if(this.state.showContent){
            this.setState({
                showContent: false,
            });
        }
        else{
            this.setState({
                showContent: true,
            });
        }
    }

    render() {
        // Manage the classes based on the webpage (about != accomodation)
        var textExt="";
        var dropboxExt="dropdown";
        if(this.props.page === "about"){
            textExt += "textBigger";
        }
        if(this.props.page === "accomodation"){
            dropboxExt += " dropdown--thinner";
        }

        // Generates the content of the dropdown based on the input type 
        // (string formating for the 'list' data input)
        const dropdownContent = [];
        if(typeof(this.props.content) == "string"){
            dropdownContent.push(<p key={this.props.content} className={textExt}> {this.props.content} </p>);
        }
        else{
            this.props.content.forEach(element => {
                dropdownContent.push(<p key={element} className={textExt}> {element} </p>);
            });
        }

        return (
            <section className={dropboxExt}>
                <div className="dropdown__title">
                    <h3 className={textExt} type="button" onClick={this.showContent}> 
                        {this.props.title} 
                        {
                            this.state.showContent
                            ? (
                                <i className="fas fa-chevron-up"></i>
                            )
                            : (
                                <i className="fas fa-chevron-down"></i>
                            )
                        }
                        
                    </h3>
                </div>
                {
                    this.state.showContent
                    ? (
                        <div className="dropdown__content">
                            {dropdownContent}
                        </div>
                    )
                    : (
                    null
                    )
                }

            </section>
        );
    }
  }
export default Dropdown;