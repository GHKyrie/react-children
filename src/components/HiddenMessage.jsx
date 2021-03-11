import {Component} from "react";

class HiddenMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: (props.hide) ? props.hide : true
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({hidden: nextProps.hide});
    }

    hide() {
        const hidden = true;
        this.setState({hidden});
    }

    show() {
        const hidden = false;
        this.setState({hidden});
    }

    render() {
        const {children} = this.props;
        const {hidden} = this.state;
        return (
            <p onMouseEnter={this.show}
               onMouseLeave={this.hide}>
                {(hidden) ?
                    children.replace(/[a-zA-Z0-9]/g, "x") :
                    children
                }
            </p>
        )
    }
}

export default HiddenMessage;