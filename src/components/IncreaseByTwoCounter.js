import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={(e) => {
                        this.props.dispatch(increaseByTwoCounter());
                    }}
                >
                    2 artır
                </button>
            </div>
        );
    }
}

function mapDispatchToProops(dispatch) {
    return { action: bindActionCreators(increaseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProops)(IncreaseByTwoCounter);
