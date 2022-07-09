/**
 * TypeScript Generic Components
 * - Generics allow for reusable type safety
 * - Generic Constraints
 *   * If you have some knowledge about the Type
 */

import DataGrid from './components/DataGrid';

export interface User {
    id: number;
    name: string;
    age: number;
}

export interface Order {
    orderId: number;
    quantity: number;
    amount: number;
}

export default function App5() {
    const users = [
        { id: 1, name: 'John', age: 55 },
        { id: 2, name: 'Mitchel', age: 23 },
        { id: 3, name: 'Mike', age: 55 },
    ];

    const orders = [
        { id: 1, quantity: 5, amount: 75 },
        { id: 2, quantity: 2, amount: 20 },
        { id: 3, quantity: 1, amount: 40 },
    ];

    return (
        <>
            <DataGrid items={ users } />

            <br/>

            <DataGrid items={ orders } />
        </>
    );
}