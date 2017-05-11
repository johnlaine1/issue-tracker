import React, { Component } from 'react';

class IssueRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.issue_id}</td>
                <td>{this.props.issue_title}</td>
            </tr>
        );
    }
}

export default IssueRow;