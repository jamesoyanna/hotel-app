import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
export class Services extends Component {
state = {
    services:[
     {
         icon: <FaCocktail />,
         title: "Free Cocktail",
         info: "Loremum ipsum text ready for the new cocktail"
     },
     {
         icon: <FaHiking />,
         title: "Endless Hiking",
         info: "Loeum ipsum test.going on a hiking mood now"
     },
     {
         icon: <FaShuttleVan />,
         title: "Free shuttle",
         info:
         "Get the best ride on van round the town. it affordable" 
     },

     {
         icon: <FaBeer />,
         title: "Strongest Beer",
         info:
         "Loreump ipsum detty december. Get the best drink"
     }
    ]
}
    render() {
        return (
            <section className="section">
              <Title title="Services" />
              <div className="services-center">
                  
              </div>
            </section>
        );
    }
}

export default Services;
