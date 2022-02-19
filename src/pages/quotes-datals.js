
import { Fragment } from "react";
import { useParams , Route } from "react-router-dom";
import Comment from '../components/comments/Comments'


const Quotes =() =>{
    const params = useParams()

    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comment />
            </Route>
        </Fragment>
    )
}
export default Quotes;