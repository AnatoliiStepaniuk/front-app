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
        document.title = "Helm + Kubernetes tutorial";
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

        fetch('http://service-a.kubergang.com/a')
            .then(res => res.text())
            .then((data) => {
                this.setState({ respA: data })
            })
            .catch(console.log)
        fetch('http://service-a.kubergang.com/ab')
            .then(res => res.text())
            .then((data) => {
                this.setState({ respAB: data })
            })
            .catch(console.log)
    }

    render(){
        return <div className="App">
            <header className="App-header">
                7.0.0
                <img src={logo} className="App-logo" alt="logo" />

                <h2>{this.state.respA}</h2>
                <h2>{this.state.respAB}</h2>
            </header>
        </div>
    }
}

export default App;
