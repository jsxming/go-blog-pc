
// import Header from '@/components/layout/header';


function LayoutDefault({ children, background = '#fff' }) {
  return <div>
    <div className='main' style={{ minHeight: 'calc(100vh - 178px)', backgroundColor: background }} >
      {children}
    </div>
  </div>
}


export default LayoutDefault