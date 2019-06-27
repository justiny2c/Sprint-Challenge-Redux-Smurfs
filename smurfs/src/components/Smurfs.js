import React from "react";
import {connect} from "react-redux";

import { getData, deleteSmurf } from "../actions";

class Smurfs extends React.Component {
    componentDidMount(){
        this.props.getData();
    }

    deleteSmurf = (e, id) => {
        e.preventDefault();
        this.props.deleteSmurf(id)
    }

    render(){
        return (
            <div>
                {this.props.smurfs.map(smurf => {
                    return (
                    <div>
                    <h3>{smurf.name}</h3>
                    <p>age: {smurf.age}</p>
                    <p>height: {smurf.height}</p>

                    <button
                        onClick={e => this.deleteSmurf(e, smurf.id)}>X</button>         

                    </div> )
                })}

            </div>
        )
    }


}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect (
    mapStateToProps, { getData, deleteSmurf })(Smurfs)