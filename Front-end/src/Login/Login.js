import React, { Component } from 'react';
import './style.css'
import Logo from '../img/logo.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loginbtn } from '../Action/Login'




class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { req: false, msg_req: "Username and Password is require!", value: "" }
    }

    btnLogin() {
        const user = this.getUser.value
        const pass = this.getPass.value

        if (user === "") {
            this.setState({ req: true })
        }
        if (pass === "") {
            this.setState({ req: true })
        }
        else {
            this.setState({ req: false })
            this.props.Loginbtn(user, pass)
        
        }
    }
    
    render() {
        localStorage.setItem("status",this.state.value)
        return (
            <div>
                <div id="Web_1920__1">
                    <div className="Rectangle1" >
                        <h5 className="title">ยินดีต้อนรับสู่ งานกองทุนการศึกษา</h5>
                        <h6 className="title-news">ข่าวสาร</h6>
                        <div className="news-box">
                            <div className="list-news">
                                {this.props.token}
                            </div>
                        </div>
                    </div>
                    <div className="Rectangle2">
                        <h4 className="logo-login">เข้าสู่ระบบ</h4>

                        {this.state.req ? (< span className="err-alert">{this.state.msg_req}</span>) : (< span className="err-alert"></span>)}
                        <img src={Logo} className="logo" />
                        <input type="text" className="txt " ref={(input) => this.getUser = input} placeholder="ชื่อผู้ใช้" />
                        <input type="password" className="txt" ref={(input) => this.getPass = input} placeholder="รหัสผ่าน" />
                        {this.props.err ? (< span className="err-alert">{this.props.msg}</span>) : (< span className="err-alert"></span>)}
                        <Link to="/employee" className="forgot-password">ลืมรหัสผ่าน ?</Link>
                        <button className="btn-login" onClick={() => this.btnLogin()} >เข้าสู่ระบบ</button>
                        <button className="btn-regis" >ลงทะเบียน</button>
                        <div className="news-box-m">
                            <select onChange={m => this.setState({ value: m.target.value })}>
                                <option value="student">นักศึกษา</option>
                                <option value="employee">พนักงาน</option>
                                <option value="advisor">ที่ปรึกษา</option>
                                <option value="director">กรรมการ</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        err: state.Loginreduce.err,
        msg: state.Loginreduce.msg,
        status: state.Loginreduce.status,
        token: state.Loginreduce.token
    }
}

export default connect(mapStateToProps, { Loginbtn })(Login)