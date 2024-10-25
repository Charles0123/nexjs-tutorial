import Link from 'next/link';

export default function Home() {
    return <>
        <h1>Hello Next js</h1>
        <Link href="/blog">Blog</Link>
        <hr></hr>
        <Link href="/products">Products</Link>
    </>
} 