import "./index.less";
import API from "@/api/index";
import LayoutDefault from "@/layout/default";
import Link from 'next/link';


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
        <Link href={'/article/' + id}>
            <a className='art'>
                <p className='tit'>{title}</p>
                <p>{description}</p>
            </a>
        </Link >
    )
}


function Home({ res }) {
    let list = res.list || [];

    return (
        <LayoutDefault>
            <div className='home'>
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
