import React,{ Component } from 'react'
import './index.css'

class Main extends Component {
    render () {
        return (
            <div className = 'main'>
                <img src = 'https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png' alt=""/>
                <div className = 'mask'></div>
                <div className = 'form'>
                    <form>
                        <div className = 'text'>
                            <p>If not now, when?</p>
                            <p>If not me, who?</p>
                            <p>此时此刻，非我莫属！</p>
                            <div className = 'search'>
                                <div className = 'mask'></div>
                                <input type = 'text' className = 'inputArea' placeholder = '请输入职位关键词'></input>
                                <input type = 'submit' value = '搜索'></input>
                            </div>
                            <div className = 'hotSearch'>
                                热门搜索：
                                <a href="333">Java</a>
                                <a href="333">IOS</a>
                                <a href="333">数据</a>
                                <a href="333">安全</a>
                                <a href="333">搜索</a>
                                <a href="333">算法</a>
                                <a href="333">运营</a>
                                <a href="333">视觉</a>
                                <a href="333">交互</a>
                                <a href="333">前端</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Main