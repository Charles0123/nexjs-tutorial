export default function Docs({params}){
    const {slug} = params;

    // return (
    //     <div>
    //          <h1>Shop Page</h1>
    //          <p>Slug: {JSON.stringify(slug)}</p>
    //     </div>
    // )
    if(slug?.length===2){
        return (
            <h1>
                Viewing docs for feature {slug[0]} and {slug[1]}
            </h1>
        );
    }else if(slug?.length === 1){
        return <h1>Viewing docs for feature {slug[0]}</h1>
    }
    return <h1>Docs Home Page</h1>
}