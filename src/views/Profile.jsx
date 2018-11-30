import React, { Component } from "react";
import { firestore } from "firebase";

export default class App extends Component {

    state = {
        users: []
    }
    componentDidMount(){
        const db = firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true};
        db.settings(settings);

        const coll = db.collection("games/game1/users");
        /*
        const userRef = coll.doc("me@me").set({
            name: "Moshe", weight: 200, weightGoal: 175
        })
        */
       
       //Updates every time you add something to the database (even from a different computer on the other side of the world)
       //Try it
       coll.onSnapshot(snapshot=> {
           const users = snapshot.docs.map(x=> ({ id: x.id, ...x.data()  }));
           this.setState( { users } );
           console.log(users);
       })
    }
    render(){
        const list_items = this.state.users.map(x=> (
            <li className="list-group-item">
                {x.name}: {x.weight}, Goal: {x.weightGoal}
            </li>
        ))
        return (
            <div>
                <h1>Profile</h1>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">User Profiles</div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {list_items}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}