import {Avatar,Divider,Tooltip} from 'antd';
import {GithubOutlined,WechatOutlined,QqOutlined} from '@ant-design/icons';
import  './index.less';

let iconSize = {
    fontSize:30,
}
export default function SiderLeft() {
    return (
        <aside className='side h_100'>
            <div >
              <Avatar className='u_avatar' size={120} src='/img/dlam.jpg' />
              <h4 className='u_name' >小明同学丶</h4>
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