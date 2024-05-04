import React,{Component} from "react";

class NumberItem extends Component{
    constructor(props){
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle(evt){
        
        this.props.remove(this.props.value);
        
    }

    render(){
        return(
        <div className="number-item-container">
            <i>{this.props.value} - </i>
            <button onClick={this.clickHandle} > X </button>
            </div>
        )
    }
}
export default NumberItem;