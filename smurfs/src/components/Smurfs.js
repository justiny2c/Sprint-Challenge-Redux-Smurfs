import React from "react";
import {connect} from "react-redux";

import { getData } from "../actions";

class Smurfs extends React.Component {
    componentDidMount(){
        this.props.getData();
    }

    render(){
        return (
            <div>
                {this.props.smurfs.map(smurf => {
                    return (
                    <div>{smurf.name}</div> )
                })}

            </div>
        )
    }


}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect (
    mapStateToProps, { getData })(Smurfs)