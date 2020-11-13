import Link from 'next/link';
export default function SiderLeft() {
    return (
        <aside className='side h_100'>
            <ul>
                <li className='nav_i'>
                    <Link href='/'>首页</Link>
                </li>
                <li className='nav_i'>
                    <Link href='/'>关于我</Link>
                </li>
            </ul>
            <style>{`
                .side{
                    width:450px;
                    background-image:url(/img/sider.jpg);
                    background-size: cover;
                    background-position:center center;
                    background-repeat:no-repeat;
                }

                .nav_i{
                    cursor:pointer;
                    padding-right:30px;
                    margin:20px 0;
                    font-weight:600;
                    font-size:16px;
                    text-align:right;
                }
                a{
                    color:#ffffff;
                }
            `}</style>
        </aside>
    )
}