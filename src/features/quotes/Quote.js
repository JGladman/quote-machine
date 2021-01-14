import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectQuote, selectAuthor, selectStatus, fetchQuote, selectError } from './quotesSlice'

export const Quote = () => {
    const quote = useSelector(selectQuote)
    const author = useSelector(selectAuthor)
    const error = useSelector(selectError)
    const dispatch = useDispatch()

    const status = useSelector(selectStatus)

    const onNewQuoteClicked = async () => {
        dispatch(fetchQuote())
    }

    useEffect(() => {
        async function fetchQuote() { onNewQuoteClicked() }
        fetchQuote()
        // eslint-disable-next-line
    }, [])

    let content

    if (status === "loading") {
        content = <div>Loading...</div>
    } else if (status === "succeeded" || status === "idle") {
        content = <div>
            <h1>{quote}</h1>
            <h2>{author}</h2>
            <button onClick={onNewQuoteClicked}>New Quote</button>
            <a href="https://twitter.com/intent/tweet" target="_top" rel="noopener noreferrer">
                <button>Tweet</button>
            </a>
        </div>
    } else if (status === "failed") {
        content = <div>{error}</div>
    }

    return (
        <div className="container">{content}</div>
    )
}