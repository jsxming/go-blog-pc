import React from 'react';
import {Avatar} from 'antd';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import {HomeOutlined} from '@ant-design/icons';
import  "./index.less"



export default function VHeader(){

    let r = useRouter()
    return (
        <header className='g_header '>
            <div className='w_1200 flex_between'>
                <img src='/img/logo.png' className='logo pointer' onClick={()=>{r.push('/')}} />
                <div >
                <Link  href='/'  >
                    <a className='nav_i flex_start'>
                        <HomeOutlined className='h_icon' />
                        <span>首页</span>
                    </a>
                </Link>
            </div>
            </div>
        </header>
    )
}