
import { Fragment } from "react";
import { useParams , Route } from "react-router-dom";
import Comment from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES =[
    {id:':q1',author:'aida' , text:'Learning React is fun !'} , 
    {id:':q2',author:'sara' , text:'Learning nothing is fun !'} , 
    {id:':q3',author:'ali' , text:'Learning javaScript is fun !'} , 
    {id:':q4',author:'negar' , text:'Learning c# is fun !'} , 
  ];
  

const Quotes =() =>{
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    
    if(!quote){
        return <p>No qute found</p>
    }

    console.log(quote)
    return (
        <Fragment>
            <HighlightedQuote quote={quote}/> 
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comment />
            </Route>
        </Fragment>
    )
}
export default Quotes;