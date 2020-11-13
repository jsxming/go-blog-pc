import LayoutDefault from "@/layout/default";
import API from "@/api/index";
import Head from 'next/head';


export async function getServerSideProps({ query }) {
    let { id } = query;
    let res = await API.queryArticle({ id })
    console.log(res);
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
                <meta name='keywords' content={article.title} ></meta>
                <meta name='description' content={article.title} ></meta>
            </Head>
            <div>
                <h1 className='text_center'>{article.title}</h1>
                <div className='cont bf-container' dangerouslySetInnerHTML={{ __html: article.content }}></div>

                <style>
                    {`
    
        .cont{
            margin:15px;
            padding:15px;
        }
    `}</style>
            </div>
        </LayoutDefault>
    )
}