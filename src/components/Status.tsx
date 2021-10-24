type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props:StatusProps) => {
    let message:string;
    if(props.status === 'loading'){
        message = 'Loading...';
    }else if(props.status === 'success'){
        message='Data Fetched Successfully'
    }else{
        message='Error Fetching data'
    }
    return (
        <div>
            <h2>Status- {message}</h2>
        </div>
    )
}