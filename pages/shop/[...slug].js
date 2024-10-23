import {useRouter} from 'next/router'

export default function Shop(){
    const router = useRouter();
    const {slug} = router.query; // slug 是一個數據組

    return (
        <div>
            <h1>Shop Page</h1>
            <p>Slug: {JSON.stringify(slug)}</p>
        </div>
    )
}