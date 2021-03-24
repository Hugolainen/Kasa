import React, { Component } from 'react'

class Dropdown extends Component {
    constructor() {
        super();
        
        this.state = {
          showContent: false,
        }
        
        this.showContent = this.showContent.bind(this);
    }

    showContent(event) {
        event.preventDefault();
        console.log(this.state.showContent);

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
        var classExt="";
        if(this.props.page === "about"){
            classExt += "textBigger";
        }

        return (
            <section className="dropdown">
                <div className="dropdown__title">
                    <h3 className={classExt} type="button" onClick={this.showContent}> 
                        {this.props.title} 
                        {
                            this.state.showContent
                            ? (
                                <i class="fas fa-chevron-up"></i>
                            )
                            : (
                                <i class="fas fa-chevron-down"></i>
                            )
                        }
                        
                    </h3>
                </div>
                {
                    this.state.showContent
                    ? (
                        <div className="dropdown__content">
                            <p className={classExt}> {this.props.content} </p>
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