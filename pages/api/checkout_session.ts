import NextCors from "nextjs-cors";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async (req: any, res: any) => {
    const { items, email } = req.body;
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    });
    const transformedItems = items.map((item: any) => ({
        description: item.desc,
        quantity: item.quantity,
        price_data: {
            currency: "usd",
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.img]
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
        success_url: `https://jwel-co.vercel.app/success`,
        cancel_url: `https://jwel-co.vercel.app/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item: any) => item.img)),
        }
    })

    res.status(200).json({ id: session.id })

}