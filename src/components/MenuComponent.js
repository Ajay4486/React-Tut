import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class Menu extends Component {    //This is important when u define any class component
   
   constructor(props) {
      super(props);                  // stores properties related to component 
      
     
   }
 
   render() {                                           //return corresponding view for this component
      const menu = this.props.dishes.map((dish) => {
         return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
               <Card onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                     <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
               </Card>
            </div>
         );
      });

      return (
         <div className="container">
            <div className="row">
               {menu}
            </div>
         </div>
      );
   }
}

export default Menu;            //necessary whenever u want this in other file