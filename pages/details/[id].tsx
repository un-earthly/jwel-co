import ProductDetails from '../../components/CartDetails'

const Jewellery = ({ jwellary }) => {
    return <div className='h-screen flex items-center justify-center p-20'>
        <ProductDetails jewl={jwellary} />
    </div>


}

export default Jewellery


export async function getServerSideProps(context) {
    const id = context.query.id;
    console.log(id)
    const jwellary = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json());
    return {
        props: {
            jwellary,
        },
    };
}