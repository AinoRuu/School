import React, {Component} from 'react';

class Laskuri extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

addToCounter = () => {
    this.setState({count: this.state.count + 1});
}

emptyCounter = () => {
    this.setState({count: 0});
}

render() {
    


    return (
        <div>
            <button onClick={this.addToCounter}>Kasvata</button>
            <button onClick={this.emptyCounter}>Nollaa</button>
            <Arvo arvo={this.state.count} />
            
        </div>
    );
}
}

class Arvo extends Component {
    render() {
       const textStyle = {color: this.props.arvo > 10 ? 'red': ""};
       return (
        <h1 style={textStyle}>Laskuri on {this.props.arvo}</h1>
       )
    }
}


export {Laskuri, Arvo};