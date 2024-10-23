import { notFound } from "next/navigation";

export default function ReviewDetail({params}){
    if(parseInt(params.reviewid)>1000){
        notFound();
    }
    return <h1>
        Review {params.reviewid} for Product {params.productid}</h1>
}