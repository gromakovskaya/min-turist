import React, { Component} from "react";

export class ShowFullItem extends Component{
    render(){
        return(
            <div className='full-item'>
                <div>
                    <div className='image'><img src={"./pic/" + this.props.item.img} /></div>                
                    <h3>{this.props.item.arc}</h3>
                    <p>{this.props.item.desc}</p>
                    <div className='more' onClick={() => this.props.onShowItem(this.props.item)}>⭢</div>
                </div>
                
            </div>
        )
    }
}
export default ShowFullItem;