
import VSider from '@/components/layout/side/index';
import VHeader from '@/components/layout/vheader/index';
import Head from 'next/head';

function LayoutDefault({ children, background = '#fafafa' }) {
    return <div>
        <Head>
            <title>迷人的瓜的博客</title>
            <meta name='keywords' content='迷人的瓜,博客,js,前端,前端开发,golang,go,html,css,js,react,vue,webpack,vuex,redux,hooks,vue3' ></meta>
            <meta name='description' content='迷人的瓜专注前端开发，每周开发记录心得，记录学习技能使用轨迹，提高开发技能。' ></meta>
        </Head>
        <div className='main' style={{ minHeight: '100vh', backgroundColor: background }} >
            <VHeader></VHeader>
            <div className='w_1200 flex_start align_start' >
                <VSider></VSider>
                <div className='page_right flex_1' >
                    {children}
                </div>
            </div>
        </div>

        <style jsx>{`
            .page_right{
                min-height:80vh;
                background-color:#fff;
                margin:90px 0 95px 30px;
            }
        `}</style>
    </div>
}


export default LayoutDefault