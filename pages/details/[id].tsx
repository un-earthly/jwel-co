import { StarIcon } from "@heroicons/react/solid";
import AddToCartBtn from "../../components/HandleAddToCartBtn"
import { Jewelery } from "../../Interfaces/JwellaryInterface"

const Jewellery = ({ jewl }: Jewelery) => {
    const { img, title, price, desc, category, rating } = jewl;
    return <section>
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt={title} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:m-auto">
                    <h2 className="text-sm title-font tracking-widest">{category}</h2>
                    <h1 className=" text-3xl title-font font-medium mb-1">{title}</h1>
                    <div className="flex mb-4">
                        {Array(Math.ceil(rating.rate)).fill(1).map((_, i) => <StarIcon key={i} className="h-5 text-yellow-500" />)}

                        <span className="mx-2">
                            | {rating.count}
                        </span>
                    </div>
                    <p className="leading-relaxed">{desc}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 mb-5"></div>
                    <div className="flex justify-between">
                        <span className="title-font font-medium text-2xl ">${price}</span>
                        <AddToCartBtn jewl={jewl} />
                    </div>
                </div>
            </div>
        </div>
    </section>
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