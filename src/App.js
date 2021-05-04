import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            respA: "",
            respAB: ""
        }
    }

    componentDidMount() {

        // Promise.all([
        //     fetch('http://localhost:8081/a'),
        //     fetch('http://localhost:8081/ab')
        // ])
        //     .then(([respA, respAB]) => {
        //         this.setState({
        //             respA: respA.text(),
        //             respAB: respAB.text()
        //         });
        //     })
        //     .catch(console.log)

        fetch('http://34.116.200.62/a')
            .then(res => res.text())
            .then((data) => {
                this.setState({ respA: data })
            })
            .catch(console.log)
        fetch('http://34.116.200.62/ab')
            .then(res => res.text())
            .then((data) => {
                this.setState({ respAB: data })
            })
            .catch(console.log)
    }

    render(){
        return <div className="App">
            <header className="App-header">
                3.0.0
                <img src={logo} className="App-logo" alt="logo" />

                <iframe width="560" height="315" src="https://www.youtube.com/embed/2tLp-7ZwDz0?autoplay=1&start=28" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

                <h2>What's Up, Thug?</h2>

                <h1>{this.state.respA}</h1>
                <h1>{this.state.respAB}</h1>
            </header>
        </div>
    }
}

export default App;
