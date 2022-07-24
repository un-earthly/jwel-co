import { useRouter } from 'next/router'

const Jewellery = () => {
    const router = useRouter()
    const { id } = router.query

    return <p>Jewellery: {id}</p>

    //  <div className="ui grid container">
    //         {
    //             !product ? (
    //                 <div>...Loading</div>
    //             ) :
    //                 (
    //                     <div className="ui placeholder segment">
    //                         <div className="ui two column stackable center aligned grid">
    //                             <div className="ui vertical divider">AND</div>
    //                             <div className="middle aligned row">
    //                                 <div className="column lp">
    //                                     <img className="ui fluid image" alt="" src={product.image} />
    //                                 </div>
    //                                 <div className="column rp">
    //                                     <h1>{product.title}</h1>
    //                                     <h2 className="ui teal tag label">
    //                                         ${product.price}
    //                                     </h2>
    //                                     <h3 className="ui brown block header">{product.category}</h3>
    //                                     <p>{product.description}</p>
    //                                     <div className="ui vertical animated button" tabIndex="0">
    //                                         <div className="hidden content">
    //                                             <i className="shop icon"></i>
    //                                         </div>
    //                                         <div className="visible content">Add to Cart</div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 )}
    //     </div>
}

export default Jewellery