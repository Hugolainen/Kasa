import React, { Component } from 'react'
import data from '../../assets/data.json'

import Tag from '../../elements/Tag/Tag';
import Carousel from '../../elements/Carousel/Carousel';
import Dropdown from '../../elements/Dropdown/Dropdown';
import Host from '../../elements/Host/Host';
import Rating from '../../elements/Rating/Rating';

class Accommodation extends Component {
    
    // Get the index of the accomodation in the data.json file based on its id
    getIndex(id, data){
        for(let i=0; i<data.length; i++){
            if(id === data[i].id){
                return i;
            }
        }
        console.log("No match found");
        return 0;
    }
    
    render() {
        // Gets the accomodation
        const id=this.props.match.params.id;
        const index = this.getIndex(id, data);
        const accomodation = data[index];

        // Generates the tag list
        const tagList = [];
        accomodation.tags.forEach((element)=>{
            tagList.push(<Tag key={element} tagContent={element}/>)
        });

        return (
            <div>
                <Carousel pictureList={accomodation.pictures}/>
                <div className="accomodationInfo">
                    <div className="accomodationInfo__desc1">
                        <h2> {accomodation.title} </h2>
                        <p className="accomodationInfo__desc1__midItem"> {accomodation.Location} </p>
                        <ul className="taglist">
                            {tagList}
                        </ul>
                    </div>
                    <div className="accomodationInfo__desc2">
                        <Host name={accomodation.host.name} picture={accomodation.host.picture}/>
                        <Rating rating={accomodation.rating}/>
                    </div>
                </div>

                <div className="DropdownMenus">
                    <Dropdown page="accomodation" title="Description" content={accomodation.description}/>
                    <Dropdown page="accomodation" title="Equipements" content={accomodation.Amenities}/>
                </div>
            </div>
        );
    }
  }
export default Accommodation;