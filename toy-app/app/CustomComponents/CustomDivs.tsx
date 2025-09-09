export function DivwithContent({content}: any){
    return(
    <div>directly derefered attribute: {content}</div>
    );
}

export function DivwithContentFallback({content}: any){
    return(
    <div>Fallback-safe: {content ? content : "Default if prop is null"}</div>
    );
}