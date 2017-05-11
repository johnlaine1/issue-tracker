import React, { Component } from 'react';
import IssueRow from './IssueRow';

class IssueTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Issue ID</th>
                        <th>Issue Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_id="5" issue_title="Squash those bugs" />
                </tbody>
            </table>
        );
    }
}

export default IssueTable;