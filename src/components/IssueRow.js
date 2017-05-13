import React, { Component } from 'react';

class IssueRow extends Component {
    render() {
        const {id, title, status, owner, created, effort, completionDate} = this.props.issue;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{status}</td>
                <td>{owner}</td>
                <td>{created.toDateString()}</td>
                <td>{effort}</td>
                <td>{completionDate.toDateString()}</td>
            </tr>
        );
    }
}

IssueRow.propTypes = {
    issue_id: React.PropTypes.number.isRequired,
    issue_title: React.PropTypes.string
};
IssueRow.defaultProps = {
    issue_title: 'No title was set'
}

export default IssueRow;