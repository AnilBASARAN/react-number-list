import React,{Component} from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            nums : [1,2,3,4,5]
        }

        this.remove = this.remove.bind(this);
    }

    remove(num){
        
        this.setState(
            {nums : this.state.nums.filter(x=> x !== num)}
         )
} 

    render(){
        return(
            <div className="number-list-container">
                {this.state.nums.map(x=>
                <NumberItem value ={x} remove = {this.remove} />
                )}
            </div>
        )
    }

}

export default NumberList;

