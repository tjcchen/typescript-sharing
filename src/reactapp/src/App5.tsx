/**
 * TypeScript Generic Components
 * - Generics allow for reusable type safety
 * - Generic Constraints
 *   * If you have some knowledge about the Type
 */

import DataGrid from './components/DataGrid';

export default function App5() {
    const users = [
        { id: 1, name: 'John', age: 55 },
        { id: 2, name: 'Mitchel', age: 23 },
        { id: 3, name: 'Mike', age: 55 },
    ];

    return (
        <>
            <DataGrid items={ users } />
        </>
    );
}