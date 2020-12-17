// import "./index.less";
import LayoutDefault from "@/layout/default";
import Link from 'next/link';
import { useSelector } from "react-redux";


function ArticleItem({ title, description, id }) {
    return (
        <Link href={'/article/' + id}>
            <a className='art'>
                <p className='tit'>{title}</p>
                <p>{description}</p>
                <style jsx>{`
                      .art{
                        display: block;
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
                    .art .tit{
                        font-size:20px;
                    }
                `}</style>
            </a>
        </Link >
    )
}


function Home() {
    let articles = useSelector(state=>state.articles)
    return (
        <LayoutDefault>
            <div className='home'>
                {
                    articles.map(item => {
                        return <ArticleItem key={item} title={item.title} description={item.description} id={item.id} ></ArticleItem>
                    })
                }

      
            </div>
        </LayoutDefault>
    );
}


export default Home;
