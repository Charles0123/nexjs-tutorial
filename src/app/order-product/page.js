"use client"
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/"); // 導航回首頁
        // router.replace(); // 替換掉當前的history 記錄
        // router.back(); //回上一個頁面
        // router.forward() // 到下一個頁面
    };

    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    );
}

// export default function OrderProduct(params) {
//     return <h1>TEST</h1>
// }