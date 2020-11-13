
import VSider from '@/components/layout/sider';
import Head from 'next/head';


function LayoutDefault({ children, background = '#fff' }) {
  return <div>
    <Head>
      <title>小明的博客</title>
      <meta name='keywords' content='小明同学,博客,js,前端,golang,go,html,css,js,react,vue,webpack,vuex,redux' ></meta>
      <meta name='description' content='小明同学的博客' ></meta>
    </Head>
    <div className='main flex_start align_start' style={{ height: '100vh', backgroundColor: background }} >
      <VSider></VSider>
      <div className='flex_1'>
        {children}
      </div>
    </div>
  </div>
}


export default LayoutDefault