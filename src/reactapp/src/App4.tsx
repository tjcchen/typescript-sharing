/**
 * TypeScript Enums
 * - Do not use Enums( but use union types instead )
 * - Great if you know a value should be either A or B( or C, or D )
 * 
 * Links:
 * https://react-typescript-cheatsheet.netlify.app/docs/basic/troubleshooting/types/#enum-types
 */

import { useState } from "react";

// Details
// Shipping
// Payment

export default function App4() {
    const [checkoutStep, setCheckoutStep] = useState('Details');

    // Logic check
    return (
        <>
            { checkoutStep === 'Details' &&
                <>
                    <h1>Details</h1>
                    <button type="button" onClick={() => setCheckoutStep('Shipping')}>Next</button>
                </>
            }
            { checkoutStep === 'Shipping' &&
                <>
                    <h1>Shipping</h1>
                    <button type="button" onClick={() => setCheckoutStep('Payment')}>Next</button>
                </>
            }
            { checkoutStep === 'Payment' &&
                <>
                    <h1>Payment</h1>
                </>
            }
        </>
    );
}