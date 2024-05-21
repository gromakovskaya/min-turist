import React, { Component} from "react";


export class Item extends Component{
    render(){
        return(
            <div className='item'>
                <div className="image"><img src={"./pic/" + this.props.item.img} /></div>
                <h2>{this.props.item.title}</h2>                
                <div className='more' onClick={() => this.props.onShowItem(this.props.item)} >⭢</div>
            </div>
        )
    }
}