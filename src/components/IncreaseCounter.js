import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={(e) => {
                        this.props.dispatch(increaseCounter());
                    }}
                >
                    1 artır
                </button>
            </div>
        );
    }
}

function mapDispatchToProops(dispatch) {
    return { action: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToProops)(IncreaseCounter);
