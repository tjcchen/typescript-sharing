/**
 * A type narrowing component
 */

export interface Item {
    id: number;
    title?: string;
    imageUrl?: string;
    quote?: string;
}

interface ComponentProps {
    items: Item[];
}

export default function Component({ items }: ComponentProps) {
    return (
        <ul>
            {
                items.map((item: Item) => {
                    return (
                        <li key={ item.id }>
                            { item.title && <p>{ item.title }</p> }
                            {

                                item.imageUrl && (
                                    <img
                                        style={{ maxWidth: '15rem' }}
                                        alt={ item.title }
                                        src={ item.imageUrl }
                                    />
                                )
                            }
                            { item.quote && <p>{ item.quote }</p> }
                        </li>
                    )
                })
            }
        </ul>
    );
}