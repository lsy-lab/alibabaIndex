import React,{ Component } from 'react'
import './index.css'

class Head extends Component {
    render () {
        return (
            <header>
                <div className = 'head'>
                    <div className = 'head-inner'>
                        <a href="https://job.alibaba.com/zhaopin/index.htm" className = 'logo'>
                            <img src = 'https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png' alt=""/>
                        </a>
                        <i className = 'shu'>|</i>
                        <i className = 'she'>社招官网</i>
                        <ul>
                            <li>
                                <a href= "https://job.alibaba.com/zhaopin/index.htm" className = 'active'>首&nbsp;&nbsp;页</a>
                            </li>
                            <li>
                                <a href = 'https://job.alibaba.com/zhaopin/positionList.htm'>社会招聘</a>
                            </li>
                            <li>
                                <a href="https://campus.alibaba.com">校园招聘</a>
                            </li>
                            <li>
                                <a href="https://job.alibaba.com/zhaopin/about.htm">了解阿里</a>
                            </li>
                            <li>
                                <a href="https://job.alibaba.com/zhaopin/apply.htm">个人中心</a>
                            </li>
                            <div className = 'login'>                               
						        欢迎来到阿里巴巴集团招聘！	
                                <a style={{color:'#fff'}} href="https://passport.alibaba.com/login.htm?appName=hrjob&params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm%3Fspm%3Da2obv.11410903.0.0.12f144f6NgpnYy">登陆</a>
                                &nbsp;|&nbsp;
                                <a style={{color:'#fff'}} href="https://reg.taobao.com/member/reg/fill_mobile.htm">注册</a>																				
                            </div>
                        </ul>
                    </div>
                </div>
            </header>    
        )
    }
}

export default Head