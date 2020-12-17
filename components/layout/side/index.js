import {Avatar,Divider,Tooltip,Tag} from 'antd';
import {GithubOutlined,WechatOutlined,QqOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import {queryArticles} from '@/redux/actions';

import  './index.less';
import { useRouter } from 'next/dist/client/router';

let iconSize = {
    fontSize:30,
}

const TAGS_TYPE =['magenta','red','volcano','orange','gold','lime','green','cyan','blue','geekblue','purple'];

export default function SiderLeft() {  
    let types = useSelector(state=>state.types)
    let dispatch = useDispatch()
    let  router= useRouter()

    let query= (type)=>{
        if(router.pathname !=='/')return
        dispatch(queryArticles({type}))
    }


    return (
        <aside className='side h_100'>
            <div>
              <Avatar className='u_avatar' size={120} src='/img/dlam.jpg' />
              <h4 className='u_name' >小明同学丶</h4>
              <div className='tags flex_center flex_wrap'>
                <Tag className='pointer' style={{marginBottom:15}}  onClick={()=>{query()}} color='success'  >全部</Tag>
                {
                    types.map(item=>{
                        let index = parseInt(Math.random()*11)
                        return <Tag className='pointer' style={{marginBottom:15}} color={TAGS_TYPE[index]} key={item.id+100} onClick={()=>{query(item.id)}} >{item.name}</Tag>
                    })
                }
              </div>
              <footer className='foot'>
                <Divider plain>社交账号</Divider>
                <div className='flex_around'>
                <Tooltip placement="top" title={<a href='https://github.com/jsxming' target='__blank' style={{color:'#fff'}} >jsxming</a>}>
                    <GithubOutlined style={iconSize} />
                </Tooltip>
                <Tooltip placement="top" title="tm511526">
                    <WechatOutlined style={iconSize} />
                </Tooltip>
                <Tooltip placement="top" title="923727421">
                    <QqOutlined style={iconSize}  />
                </Tooltip>
                </div>
              </footer>
            </div>
        </aside>
    )
}