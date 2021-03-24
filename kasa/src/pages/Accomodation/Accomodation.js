import React, { Component } from 'react'
import Tag from '../../elements/Tag/Tag';
import data from '../../assets/data.json'
import Carousel from '../../elements/Carousel/Carousel';
import Dropdown from '../../elements/Dropdown/Dropdown';

class Accommodation extends Component {
    render() {
        const tagList = [];
        data[0].tags.forEach((element)=>{
            tagList.push(<Tag key={element} tagContent={element}/>)
        });


        return (
            <div>
                <Carousel pictureList={data[1].pictures}/>
                
                <ul className="taglist">
                    {tagList}
                </ul>
                <div className="DropdownMenus">
                    <Dropdown page="accomodation" title="Description" content={data[0].description}/>
                    <Dropdown page="accomodation" title="Equipements" content={data[0].Amenities}/>
                </div>
            </div>
        );
    }
  }
export default Accommodation;