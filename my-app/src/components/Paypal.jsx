import React, { useRef, useEffect } from 'react';

function Paypal() {

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchace_units: [
                        {
                            amount: {
                                currency_code: "USD",
                                value: "500.00",
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

  return (
    <div>
        <div ref={paypal}></div>
    </div>
  )
}

export default Paypal