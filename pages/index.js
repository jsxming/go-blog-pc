import "./index.less";
import LayoutDefault from "@/layout/default";
import Link from 'next/link';
import { useSelector } from "react-redux";


function ArticleItem({ title, description, id }) {
    return (
        <Link href={'/article/' + id}>
            <a className='art'>
                <p className='tit'>{title}</p>
                <p>{description}</p>
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
