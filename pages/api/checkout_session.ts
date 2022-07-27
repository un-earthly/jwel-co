const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async (req: any, res: any) => {
    const { items, email } = req.body;
    const transformedItems = items.map((item: any) => ({
        description: item.description,
        quantity: item.quantity,
        price_data: {
            currency: "usd",
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image]
            }
        }
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ["BD", "US", "CA"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item: any) => item.image)),
        }
    })

    res.status(200).json({ id: session.id })

}