import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: '#fff',
            color2: '#ccc',
            gradient: ''
        };
        this.changeFirstValue = this.changeFirstValue.bind(this);
        this.changeSecondValue = this.changeSecondValue.bind(this);
        this.setMyStyle = this.setMyStyle.bind(this);
    }

    changeFirstValue = event => {
        this.setState({color1: event.target.value});
    };

    changeSecondValue = event => {
        this.setState({color2: event.target.value});
    };

    setMyStyle = () => {
        console.log('clicked');
        this.setState({gradient:
            "linear-gradient(" +`${this.state.color1}` + " , " + `${this.state.color2}` + ")"});
        console.log(this.state.gradient);
    };

    render() {
        return (
            <div style={{background: this.state.gradient, height:'100%'} }>
                <div className="form-group">
                    <label htmlFor="firstColor">Первый цвет</label>
                    <input type="text" className="form-control" onChange={this.changeFirstValue} placeholder="Enter first color" />
                    <label htmlFor="secondColor">Второй цвет</label>
                    <input type="text" className="form-control" onChange={this.changeSecondValue} placeholder="Enter first color" />
                    <button type="submit" className="btn btn-primary" onClick={this.setMyStyle} >GO</button>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById("root"));