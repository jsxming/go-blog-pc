import {Avatar,Divider} from 'antd';
import {GithubOutlined,WechatOutlined,QqOutlined} from '@ant-design/icons';
import  './index.less';

let iconSize = {
    fontSize:30
}
export default function SiderLeft() {
    return (
        <aside className='side h_100'>
            <div >
              <Avatar className='u_avatar' size={120} src='/img/dlam.jpg' />
              <h4 className='u_name' >小明同学丶</h4>
              <Divider plain>社交账号</Divider>
              <div className='flex_around'>
                  <GithubOutlined style={iconSize} />
                  <WechatOutlined style={iconSize} />
                  <QqOutlined style={iconSize}  />
              </div>
            </div>
        </aside>
    )
}