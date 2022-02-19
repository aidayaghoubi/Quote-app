import { useParams } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";


const DUMMY_QUOTES =[
    {id:'q1',author:'aida' , text:'Learning React is fun !'} , 
    {id:'q2',author:'sara' , text:'Learning nothing is fun !'} , 
    {id:'q3',author:'ali' , text:'Learning javaScript is fun !'} , 
    {id:'q4',author:'negar' , text:'Learning c# is fun !'} , 
];

const AllQuotes = () => {
   


    return (
        <div>
           <QuoteList data={DUMMY_QUOTES} /> 

        </div>
    )
    
}
export default AllQuotes;