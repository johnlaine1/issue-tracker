import React, { Component } from 'react';
import IssueRow from './IssueRow';
import issueData from '../issueData';

class IssueTable extends Component {    
    renderRows() {
        const rows = issueData.map((row) => 
        <IssueRow issue_id={row.issue_id} issue_title={row.issue_title} />
        );
        return rows;
    } 
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
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

export default IssueTable;