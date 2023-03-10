import {Component} from "react"
import { v4 as uuidv4 } from 'uuid';
import "./index.css"

const allCalculationsList=[
    {
    firstNumber:"six",
    secondNumber:"seven",
    operator:"plus",
    id:22,
    result:13
    }
]

class MasterPage extends Component {
    state={firstNumber:"",operator:"plus",secondNumber:"",answer:""}

    onChangeFirstNumber=(event)=>{
        this.setState({firstNumber:event.target.value})
    }

    onChangeSecondNumber=(event)=>{
        this.setState({secondNumber:event.target.value})
    }

    getNumber=(firstNumber)=>{
        switch (firstNumber){
            case "one":
                return 1;
            case "two":
                return 2;
            case "three":
                return 3;
            case "four":
                return 4;
            case "five":
                return 5;
            case "six":
                return 6;
            case "seven":
                return 7;
            case "eight":
                return 8;
            case "nine":
                return 9;
            default:
                return null;
        }
    }

    getResult=(first,second,operator)=>{
        
        switch (operator){
            case "plus":
                return first + second;
            case "minus":
                return first - second;
            case "multiply":
                return first * second;
            case "division":
                return first / second;
            default:
                return null
        }
    }

    onChangeOperator=(event)=>{
        this.setState({operator:event.target.value})
    }
    
    onClickGetResult=()=>{
        const {firstNumber,secondNumber,operator} = this.state

        const first=this.getNumber(firstNumber)
        const second=this.getNumber(secondNumber)

        const result=this.getResult(first,second,operator)

        const calculationsDetails={
            firstNumber,
            secondNumber,
            operator,
            id:uuidv4(),
            result
        }

        allCalculationsList.push(calculationsDetails)
        console.log(allCalculationsList)
        localStorage.setItem("allCalculationsLists",JSON.stringify(allCalculationsList))

        
        this.setState({answer:result})
        
        
        
    }

    onClickLogout=()=>{
        const {history} = this.props
        history.replace("/masterlogin")
    }

    render(){
        const {answer}=this.state

        return (
            <div className="master_page_container">
                <form id="form" className="formContainer">
                    <div className="firstNumberContainer">
                        <label for="firstNumber" className="firstNumber">Enter the number here for ex: nine</label>
                        <input id="firstNumber" onChange={this.onChangeFirstNumber} className="inputField" type="text" placeholder="enter number"/>
                    </div>
                    <div className="selectContainer">
                        <select onChange={this.onChangeOperator} className="selector">
                            <option value="plus">plus</option>
                            <option value="minus">minus</option>
                            <option value="multiply">multiply</option>
                            <option value="division">division</option>
                        </select>
                    </div>
                    <div className="secondNumberContainer">
                        <label for="secondNumber" className="secondNumber">Enter the number here for ex: nine</label>
                        <input id="secondNumber" onChange={this.onChangeSecondNumber} className="inputField" type="text" placeholder="enter number"/>
                    </div>
                </form>
                <button className="resultButton" type="button" onClick={this.onClickGetResult}>Result</button>
                <div className="resultContainer">
                    <h1 className="resultHeading"> Answer : <span className="resultSpan">{answer}</span></h1>
                </div>
                <div className="logoutButtonContainer">
                    <button className="logoutButton" type="button" onClick={this.onClickLogout}>Logout</button>
                </div>
            </div>
        )
    }
}

export default MasterPage