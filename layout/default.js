
import VSider from '@/components/layout/sider';


function LayoutDefault({ children, background = '#fff' }) {
  return <div>
    <div className='main flex_start align_start' style={{ height: '100vh', backgroundColor: background }} >
      <VSider></VSider>
      <div className='flex_1'>
        {children}
      </div>
    </div>
  </div>
}


export default LayoutDefault