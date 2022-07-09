/**
 * A DataGrid component
 */

import { Order, User } from "../App5";

interface DataGridProps<T> {
    // Do NOT use any
    items: T[];
}

function DataGrid({ items }: DataGridProps<User | Order>) {
    return (
        <>
            <ul>
                {
                    items.map((item) => (
                        <li>{ JSON.stringify(item) }</li>
                    ))
                }
            </ul>
        </>
    );
}

export default DataGrid;