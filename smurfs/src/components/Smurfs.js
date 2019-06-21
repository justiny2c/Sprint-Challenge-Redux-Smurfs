import React from "react";
import {connect} from "react-redux";

import { getData } from "../actions";

class Smurfs extends React.Component {
    componentDidMount(){
        this.props.getData();
    }

    // deleteSmurf = e => {
    //     e.preventDefault();
    //     {this.props.smurfs.map(smurf => {
    //         return (
    //             this.props.deleteSmurf(smurf.id)
    //         )
    //     }

    //     )}
    // }

    render(){
        return (
            <div>
                {this.props.smurfs.map(smurf => {
                    return (
                    <div>
                    <h3>{smurf.name}</h3>
                    <p>age: {smurf.age}</p>
                    <p>height: {smurf.height}</p>
{/* 
                    <button
                        onClick={this.deleteSmurf}>X</button>          */}

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
    mapStateToProps, { getData })(Smurfs)