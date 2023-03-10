import ResultItem from "../ResultItem"
import "./index.css"

const StudentPage =(props)=>{
    const allListItem=localStorage.getItem("allCalculationsLists")
    const parsedCalculations=JSON.parse(allListItem).reverse()

    

    const onClickLogout=()=>{
        const {history} = props
        console.log("hi")
        history.replace("/studentlogin")
    }

    return (
        <div className="results_list_container">
            <div className="heading_logout_container">
            <h1 className="main_heading">Check The Activity Here : </h1>
            <button className="logout_button" type="button" onClick={onClickLogout}>Logout</button>
            </div>
            <ul className="list_container">
            {parsedCalculations.map(eachItem => (
          <ResultItem key={eachItem.id} itemDetails={eachItem} />
        ))}
            </ul>
        </div>
    )
}

export default StudentPage