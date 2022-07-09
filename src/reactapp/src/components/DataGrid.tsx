/**
 * A DataGrid component
 */

interface Item {
    id: number;
}

interface DataGridProps<T> {
    items: T[];
}

function DataGrid<T extends Item>({ items }: DataGridProps<T>) {
    return (
        <>
            <ul>
                {
                    items.map((item: T) => (
                        <li key={ item.id }>{ JSON.stringify(item) }</li>
                    ))
                }
            </ul>
        </>
    );
}

export default DataGrid;