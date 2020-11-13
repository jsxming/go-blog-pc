import "./index.less";
import API from "@/api/index";
import LayoutDefault from "@/layout/default";
import Link from 'next/link';
import { Button } from "antd";


// getStaticProps
export async function getServerSideProps() {
    let res = await API.queryArticles()
    return {
        props: {
            res
        },
    };
}


function ArticleItem({ title, description, id }) {
    return (
        <Link href={'/article/detail?id=' + id}>
            <div className='art'>
                <p className='tit'>{title}</p>
                <p>{description}</p>
                <style jsx>{`
                    .art{
                        cursor:pointer;
                        border-radius:8px;
                        border:1px solid #eeeeee;
                        padding:30px 15px;
                        margin:15px;
                        transition:all .25s linear;
                    }
                    .art:hover{
                        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
                    }
                    .tit{
                        font-size:20px;
                    }
                `}</style>
            </div>
        </Link >
    )
}


function Home({ res }) {
    let list = res.list || [];

    return (
        <LayoutDefault>
            <div>
                {
                    list.map(item => {
                        return <ArticleItem key={item} title={item.title} description={item.description} id={item.id} ></ArticleItem>
                    })
                }
            </div>
        </LayoutDefault>
    );
}


export default Home;
