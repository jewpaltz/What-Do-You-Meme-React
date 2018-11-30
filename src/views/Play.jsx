import React, { Component } from "react";
import * as api from "../services/api_access";

export default class App extends Component {

    state = {
        players: [
            { id: 777, name: "Moshe", fbid: 809, score: 33 },
            { id: 777, name: "Moshe", fbid: 8090, score: 33 },
        ]
    }

    componentDidMount(){
        const loopTimer = setInterval(this.refresh, 1000);
    }

    refresh = () => {
        api.GetState().then(x=> this.setState(x))
    }

    render() {
        const players = this.state.players.map(p => (
            <li key={p.id}
                class="list-group-item">
                <img src={`https://graph.facebook.com/${p.fbid}/picture`} />
                <h5>{p.name}</h5>
                <span class="badge badge-success">
                    Dealer
                </span> &nbsp;
                <span class="badge badge-primary badge-pill">{p.score}</span>
            </li>

        ) );
      return (
        <div className="card">
            <div className="card-header">
                Play Game
            </div>
            <div className="card-body">
                
            <ul class="list-group list-group-flush">
                {players}
            </ul>
            </div>
        </div>
      )
    }
}