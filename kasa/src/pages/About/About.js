import React, { Component } from 'react'
import Banner from '../../elements/Banner/Banner';
import Dropdown from '../../elements/Dropdown/Dropdown';


class About extends Component {

    render() {
        const reliabilityText = "The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams.";
        const respectText = "Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform.";
        const serviceText = "Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions.";
        const saftyText = "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests.";

        return (
            <div>
                <Banner page="about" />
                <Dropdown page="about" title="Reliability" content={reliabilityText}/>
                <Dropdown page="about" title="Respect" content={respectText}/>
                <Dropdown page="about" title="Service" content={serviceText}/>
                <Dropdown page="about" title="Safety" content={saftyText}/>
            </div>
        );
    }
  }
export default About;