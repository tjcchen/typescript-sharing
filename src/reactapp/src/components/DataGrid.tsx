/**
 * A DataGrid component
 */
import { User } from '../App5';

interface DataGridProps {
    // Do NOT use any
    items: User[];
}

function DataGrid({ items }: DataGridProps) {
    return (
        <>
            <ul>
                {
                    items.map((item: any) => (
                        <li>{ JSON.stringify(item) }</li>
                    ))
                }
            </ul>
        </>
    );
}

export default DataGrid;