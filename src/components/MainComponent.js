import React, { Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Dishdetail from './DishdetailComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component{

  constructor(props){    // stores the states
    super(props);

    this.state = {
      dishes : DISHES,
      selectedDish: null
    };
  }
  
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
 }
  
  render(){
     return (
         <div>
              <Navbar dark color="primary">
                <div className="container">
                  <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
                </div>
              </Navbar>
              <Menu  dishes={this.state.dishes} 
              onClick={(dishId) => this.onDishSelect(dishId)}/>
              <Dishdetail
               dish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDish )[0]}/>                        
               {/* getting access to each and every dish using filter(helps to  supply as a sub- array)  & arrow function help to know that the selectedDish is matched with dish id */}
         </div>
     );
  }
}


export default Main;
