import { useRouter } from 'next/router'
import ProductDetails from '../../components/ProductDetails'

const Jewellery = () => {
    const router = useRouter()
    const { id } = router.query

    return <div className='h-screen flex items-center justify-center p-20'>
        <ProductDetails />
    </div>


}

export default Jewellery