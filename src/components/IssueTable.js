import React, { Component } from 'react';
import IssueRow from './IssueRow';
import issueData from '../issueData';

class IssueTable extends Component {    
    renderRows() {
        const rows = issueData.map((issue) => 
        <IssueRow issue_id={issue.id} issue={issue} />
        );
        return rows;
    } 
    render() {
        return (
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th>Issue ID</th>
                        <th>Issue Title</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Completion Date</th>
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