import { Metadata } from "next";

export const generateMetadata = async ({ params }) => {
    const title = await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`review ${params.productid}`)
        },100)
    })
    return{
        title: `Product ${title}`
    }
};


export default function ProductDetails({ params }) {
    return <h1>Details about Product {params.productid}</h1>;
}