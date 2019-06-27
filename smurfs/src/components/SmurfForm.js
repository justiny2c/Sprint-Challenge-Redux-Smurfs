import React from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions"

class SmurfForm extends React.Component {
    state = {
        name:"",
        age:"",
        height: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    addSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({
            name:"",
            age:"",
            height: '',
        })
    }

    render(){
        return(
            <div>
                <input
                    placeholder="smurf name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}/>
                <input
                    placeholder="smurf age"
                    name="age"
                    onChange={this.handleChange}
                    value={this.state.age}/>               
                <input
                    placeholder="smurf height (in cm)"
                    name="height"
                    onChange={this.handleChange}
                    value={this.state.height}/>
                <button
                    onClick={this.addSmurf}>Add Smurf</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    addingSmurf: state.addingSmurf,
    error: state.error,
    smurfs: state.smurfs
})

export default connect (
    mapStateToProps, { addSmurf })(SmurfForm)