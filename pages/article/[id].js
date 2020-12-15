import LayoutDefault from "@/layout/default";
import API from "@/api/index";
import Head from 'next/head';
import "./index.less"

export async function getServerSideProps({ query }) {
    let { id } = query;
    let res = await API.queryArticle({ id })
    return {
        props: {
            article: res
        }
    }
}



export default function ArtDetail({ article }) {
    return (
        <LayoutDefault>
            <Head>
                <title>{article.title}</title>
                {/* <meta name='keywords' content={article.title} ></meta>
                <meta name='description' content={article.title} ></meta> */}
            </Head>
            <div className='article_box'>
                <h1 className='text_center'>{article.title}</h1>
                <div className='cont' dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
        </LayoutDefault>
    )
}