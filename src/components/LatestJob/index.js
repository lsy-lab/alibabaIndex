import React,{ Component } from 'react'
import './index.css'
import InfiniteScrollingList from '../InfiniteScroll/InfiniteScrollingList';

class Work extends Component {
    
    render () {
        const data = [
            { name: '口碑-商业数据产品专家 -餐饮产品', address: '杭州',time:'6分钟前' },
            { name: '阿里健康-整合营销专家-大自营', address: '杭州',time:'6分钟前' },
            { name: '蚂蚁金服-成都地区简历通道-支付宝', address: '杭州',time:'6分钟前' },
            { name: '企业智能事业部-IT技术专家-杭州', address: '杭州',time:'16分钟前' },
            { name: '淘宝-手淘店铺产品专家/高级产品经理', address: '杭州',time:'16分钟前' },
            { name: '云智能基础产品事业部-云安全-公关专家-杭州', address: '杭州',time:'26分钟前' },
            { name: '游戏事业群-游戏前端工程师（cocos2D-X）-XC', address: '上海',time:'26分钟前' },
            { name: '蚂蚁金服-金融应用架构专家/高级专家-北京/杭州', address: '北京',time:'36分钟前' },
            { name: '蚂蚁金服-产品经理/产品专家-智能客服', address: '杭州',time:'36分钟前' },
          ];
        return (
            <div className = 'works-box'>
                <div className = 'works'>
                        <div className="left2">
                            <InfiniteScrollingList
                                data={data}
                                //speed = '1000'
                                // height={height}
                                // width={width}
                                url={"https://job.alibaba.com/zhaopin/positionList.html?"}
                                title={'最新职位'}
                            />
                        </div>
                    <div className = 'right'>
                        <a href="33" className = 'one'>
                            <img src = 'https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png' alt= ""/>
                        </a>
                        <a href="33" className = 'two'>
                            <img src = 'https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg' alt= ""/>
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Work