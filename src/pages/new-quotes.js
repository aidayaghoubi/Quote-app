import { Fragment } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';

const NewQuotes = () => {
    const history = useHistory();

    const AddQuoteHandler = (props) => {
        console.log(props)

        history.push('/quotes')

    }

    return <Fragment>
        <QuoteForm onAddQuote={AddQuoteHandler} />
    </Fragment>

}
export default NewQuotes;