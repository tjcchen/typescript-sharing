import React from 'react';
import { Address } from '../interfaces/interfaces';

interface InlineDocumentionTSProps {
    address: Address;
}

export default function InlineDocumentationTS({
  address
}: InlineDocumentionTSProps) {
    return (
        <>
            <p>{ address.suite }</p>
        </>
    );
}