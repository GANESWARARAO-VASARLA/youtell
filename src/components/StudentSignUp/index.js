import {Component} from "react"
import {Link} from "react-router-dom"
import "./index.css"

const studentTodoList=[
    {userName:"rajesh",
password:"268726"}
]


class StudentSignUp extends Component {
    state={userInput:"",passwordInput:""}
    onChangeUserName=(event)=>{
        this.setState({userInput:event.target.value})
    }

    onChangePassword=(event)=>{
        this.setState({passwordInput:event.target.value})
    }

    onSignUp=(event)=>{
        const {history} = this.props
    
        event.preventDefault()
        const {userInput,passwordInput}=this.state

        if (userInput!=="" && passwordInput!==""){
            const userDetials={
                userName:userInput,
                password:passwordInput
            }
            studentTodoList.push(userDetials)
            localStorage.setItem("studentTodoList",JSON.stringify(studentTodoList))
            
            history.replace("/studentlogin")
        }else{
            alert("Enter valid details and sign up")
        }

        
    }
    render(){
        const{userInput,passwordInput}=this.state
    return (
        <div className="student_signup_container">
            <h1 className="signupheading">Sign up here to continue...</h1>
            <form  className="form" id="form">
                <label  className="label" for="userName">User Name</label>
                <input className="input" id="userName" value={userInput} onChange={this.onChangeUserName} type="text" placeholder="Enter Your User Name"/>
                <label className="label" for="password">Password</label>
                <input className="input" id="password" value={passwordInput} onChange={this.onChangePassword} type="password" placeholder="Enter Your Password"/>
                <div className="signupButtonContainer">
                <button className="signupButton" onClick={this.onSignUp}>Sign up</button>
                </div>
            </form>
            <p className="requestLogin"> If you have already have an account <Link to="/studentlogin"><span className="login">login here</span></Link></p>
        </div>
    )
}
}

export default StudentSignUp