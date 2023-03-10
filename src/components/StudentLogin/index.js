import {Component} from "react"
import {Redirect} from "react-router-dom"
import "./index.css"


class StudentLogin extends Component {
    state={userInput:"",passwordInput:""}

    onChangeUserName=(event)=>{
        this.setState({userInput:event.target.value})
    }

    onChangePassword=(event)=>{
        this.setState({passwordInput:event.target.value})
    }

    onLogin=()=>{
        const {userInput,passwordInput}=this.state

        const todoList=localStorage.getItem("studentTodoList")
        const parsedList=JSON.parse(todoList)

        const userDetails={
            userName:userInput,
            password:passwordInput
        }

        let isUserFound=false

        for (let user of parsedList){
            if (user.userName===userDetails.userName && user.password===userDetails.password){
                isUserFound=true
            }
        }

        if (isUserFound){
            const {history} =this.props
            history.replace("/studentpage")
        }else{
            const {history} =this.props
            alert("user not found sign up to continue")
            history.replace("/studentsignup")
        }

    }

    

    render(){
        const{userInput,passwordInput}=this.state
    return (
        <div className="student_login_container">
            <h1 className="signupsuccess">Login here to Continue...</h1>
            <form  className="form" id="form">
                <label  className="label" for="userName">User Name</label>
                <input className="input" id="userName" value={userInput} onChange={this.onChangeUserName} type="text" placeholder="Enter Your User Name"/>
                <label className="label" for="password">Password</label>
                <input className="input" id="password" value={passwordInput} onChange={this.onChangePassword} type="password" placeholder="Enter Your Password"/>
                <div className="signinButtonContainer">
                <button className="signinButton" onClick={this.onLogin}>Log in</button>
                </div>
            </form>
        </div>
    )
}
}

export default StudentLogin