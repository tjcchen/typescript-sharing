/**
 * A type narrowing component
 */

interface ImageItem {
    id: number;
    type: 'imageItem';
    title: string;
    imageUrl: string;
}

interface QuoteItem {
    id: number;
    type: 'quoteItem';
    quote: string;
}

export type Item = ImageItem | QuoteItem;

interface ComponentProps {
    items: Item[];
}

export default function Component({ items }: ComponentProps) {
    // [IMPORTANT]
    // 1. Use in operator to make reactjs to differentiate between ImageItem and QuoteItem
    // 2. Or to use quality narrowing ( based on a type property )
    return (
        <ul>
            {
                items.map((item: Item) => {
                    if (item.type === 'imageItem') { // ImageItem. eg: 'title' in item
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
                            </li>
                        );
                    } else { // QuoteItem
                        return (
                            <li key={ item.id }>
                                { item.quote && <p style={{ fontStyle: 'italic' }}>{ item.quote }</p> }
                            </li>
                        );
                    }

                    // return (
                    //     <li key={ item.id }>
                    //         { item.title && <p>{ item.title }</p> }
                    //         {
                    //             item.imageUrl && (
                    //                 <img
                    //                     style={{ maxWidth: '15rem' }}
                    //                     alt={ item.title }
                    //                     src={ item.imageUrl }
                    //                 />
                    //             )
                    //         }
                    //         { item.quote && <p style={{ fontStyle: 'italic' }}>{ item.quote }</p> }
                    //     </li>
                    // );
                })
            }
        </ul>
    );
}