import { Fragment } from 'react';
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuotes =() =>{

    const funs = (props) => {

        console.log(props)
    }

    return <Fragment>
         <QuoteForm  onAddQuote={funs}/>
    </Fragment> 
    
}
export default NewQuotes;