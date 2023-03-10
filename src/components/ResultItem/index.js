import "./index.css"

const ResultItem = (props) => {
    const {itemDetails} = props
    const {firstNumber,secondNumber,operator,result}=itemDetails
    return (
        <li className="item_container">
            <h1 className="first_heading">First Number : <span className="first_span">{firstNumber}</span></h1>
            <h1 className="first_heading">Second Number : <span className="first_span">{secondNumber}</span></h1>
            <h1 className="first_heading">Operator: <span className="first_span">{operator}</span></h1>
            <h1 className="result_heading">The Answer is : <span className="first_span">{result}</span></h1>
        </li>
    )
}

export default ResultItem