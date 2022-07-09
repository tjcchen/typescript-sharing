/**
 * A DataGrid component
 */

interface DataGridProps {
    // Do NOT use any
    items: any[];
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