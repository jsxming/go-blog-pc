
import VSider from '@/components/layout/side/index';
import VHeader from '@/components/layout/vheader/index';
import Head from 'next/head';

function LayoutDefault({ children, background = '#fafafa' }) {
  return <div>
    <Head>
      <title>小明同学的博客</title>
      <meta name='keywords' content='小明同学,博客,js,前端,前端开发,golang,go,html,css,js,react,vue,webpack,vuex,redux' ></meta>
      <meta name='description' content='小明同学专注前端开发，每周开发记录心得，记录学习技能使用轨迹，提高开发技能。' ></meta>
    </Head>
    <div className='main' style={{ height: '100vh', backgroundColor: background }} >
      <VHeader></VHeader>
      <div className='flex_1 w_1200 flex_start align_start'>
          <VSider></VSider>
          <div className='page_right flex_1' style={{marginLeft:60,minHeight:'80vh',backgroundColor:'#fff'}} >
            {children}
          </div>
      </div>
    </div>
  </div>
}


LayoutDefault.getInitialProps = async ()=>{
  console.log('adfasdfadfa getInitialProps');
  return {
    props:{}
  }
}


export default LayoutDefault