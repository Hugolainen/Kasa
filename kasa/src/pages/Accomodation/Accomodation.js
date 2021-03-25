import React, { Component } from 'react'
import Tag from '../../elements/Tag/Tag';
import data from '../../assets/data.json'
import Carousel from '../../elements/Carousel/Carousel';
import Dropdown from '../../elements/Dropdown/Dropdown';
import Host from '../../elements/Host/Host';
import Rating from '../../elements/Rating/Rating';

class Accommodation extends Component {
    render() {
        const tagList = [];
        data[0].tags.forEach((element)=>{
            tagList.push(<Tag key={element} tagContent={element}/>)
        });


        return (
            <div>
                <Carousel pictureList={data[1].pictures}/>
                <div className="accomodationInfo">
                    <div className="accomodationInfo__desc1">
                        <h2> {data[0].title} </h2>
                        <p className="accomodationInfo__desc1__midItem"> {data[0].Location} </p>
                        <ul className="taglist">
                            {tagList}
                        </ul>
                    </div>
                    <div className="accomodationInfo__desc2">
                        <Host name={data[0].host.name} picture={data[0].host.picture}/>
                        <Rating rating={data[1].rating}/>
                    </div>
                </div>

                <div className="DropdownMenus">
                    <Dropdown page="accomodation" title="Description" content={data[0].description}/>
                    <Dropdown page="accomodation" title="Equipements" content={data[0].Amenities}/>
                </div>
            </div>
        );
    }
  }
export default Accommodation;