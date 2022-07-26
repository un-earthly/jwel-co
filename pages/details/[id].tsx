import AddToCartBtn from "../../components/HandleAddToCartBtn"
import { Jewelery } from "../../Interfaces/JwellaryInterface"

const Jewellery = ({ jewl }: Jewelery) => {
    const { image: img, title, price, description: desc, category, rating } = jewl
    console.log(jewl)
    return <div className='h-screen flex items-center justify-center p-20'>
        <img src={img} alt="" />
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{category}</p>
            <p>{desc}</p>
            <p>{rating.rate}</p>
            <AddToCartBtn jewl={jewl} />

        </div>
    </div>
}

export default Jewellery


export async function getServerSideProps(context: any) {
    const id = context.query.id;
    const jewl = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json());
    return {
        props: {
            jewl,
        },
    };
}