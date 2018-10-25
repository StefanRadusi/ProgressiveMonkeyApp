import * as React from 'react';

interface ListProps {
    list: any[];
}

export class List extends React.Component<ListProps> {
    render() {
        const { list } = this.props;

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Job </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.name}</td>
                                    <td>{row.job}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}