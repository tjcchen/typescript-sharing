/**
 * A type narrowing component
 */

interface ImageItem {
    id: number;
    title: string;
    imageUrl: string;
}

interface QuoteItem {
    id: number;
    quote: string;
}

export type Item = ImageItem | QuoteItem;

interface ComponentProps {
    items: Item[];
}

export default function Component({ items }: ComponentProps) {
    // [IMPORTANT] Use in operator to make reactjs to differentiate between ImageItem and QuoteItem
    return (
        <ul>
            {
                items.map((item: Item) => {
                    if ('title' in item) { // ImageItem
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