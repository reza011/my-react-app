import React, {Component} from 'react';

export default class FirstComponent extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const elememt = (<div> این یک المان ساده است</div>)
        return (<div className= "comptext">
            <h3>این یک کامپوننت است</h3>
            {elememt}
            {this.props.textdisplay}
        </div>)
    }
}