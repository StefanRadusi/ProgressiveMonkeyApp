import * as React from 'react';
import * as style from './style.css';
import { List } from './List';

interface AppState {
    data: any;
};

class App extends React.Component<{}, AppState> {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/dummydata')
        .then( res => res.json())
        .then(json => {
            this.setState({
                data: json.data
            });
        });
    }

    render() {
        return (
            <div className={style.app}>
                <h1 className={style.title}> This is the Propgressive Monkey App </h1>
                <List 
                    list = {this.state.data}
                />
                <img src='assets/img/monkey.jpg'/>
            </div>
        )
    }
}

export default App;