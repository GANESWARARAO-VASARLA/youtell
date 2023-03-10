import {Component} from "react"
import {Link} from "react-router-dom"
import { GrWorkshop } from "react-icons/gr";
import { TiGroupOutline } from "react-icons/ti";
import "./index.css"

class Home extends Component{
    render(){
  return (
    <div className="home_container">
        <h1 className="heading">Welcome to You Tell I do</h1>
        <p className="caption">The student masters application making the calculations more easier to understand </p>
        <div className="container">
        <div className="teacher_container">
          <h1 className="profile">Master</h1>
        <GrWorkshop className="teacherIcon"/>
        <Link to="/mastersignup">
        <button className="masterButton" type="button">Sign up</button>
        <p className="caption">already have an accound ? <Link to="/masterlogin"><span>login here</span></Link></p>
        </Link>
        </div>

        <div className="student_container">
        <h1 className="profile">Student</h1>
        <TiGroupOutline className="teacherIcon"/>
        <Link to="/studentsignup">
        <button className="studentButton" type="button">Sign up</button>
        <p className="caption">already have an accound ? <Link to="/studentlogin"><span>login here</span></Link></p>
        </Link>
        </div>
        </div>

    </div>
  )
}
}

export default Home