/**
 * TypeScript useState
 * - Type Interface vs Type Annotation
 * - Union types
 * - Do not nest objects in your interfaces [important]
 * - Organizing interfaces
 */

import { useState } from "react";
import { User } from "./interfaces/interfaces";

export default function App1() {
    // union type
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = () => setUser({
        name: 'Andy',
        age: 23,
        country: 'the Netherlands',
        address: {
            street: 'Main street',
            number: 88,
            zip: '21345'
        },
        admin: false
    });

    return (
        <>
            <button onClick={ fetchUser }>Fetch user on click</button>
            { user && <p>{`Welcome ${user.name} from ${user.country}!`}</p> }
        </>
    );
}