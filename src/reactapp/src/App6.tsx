/**
 * Type Narrowing
 * - Most popular use case: component props
 * - the props can be either of type A or B ( or C, or D ... )
 * - Discriminated Unions
 * - in operator narrowing
 * - equality narrowing ( based on a 'type' property )
 */

import Component, { Item } from './components/component';

export default function App5() {
    const items: Item[] = [
        {
            id: 1,
            title: 'A nice sunset',
            imageUrl: 'https://img.freepik.com/free-vector/rice-field-terraces-illustration_107791-5424.jpg?w=2000&t=st=1657443356~exp=1657443956~hmac=a04cf62b3d4d632186d2520ac643ea05ced0f13b543d8bee236cda4c23ff2c3c'
        },
        {
            id: 2,
            quote: 'This is a short quote, please look at this part'
        }
    ];

    return <Component items={items} />
}