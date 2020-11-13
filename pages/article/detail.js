import LayoutDefault from "@/layout/default";
import API from "@/api/index";

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
    console.log(article);
    return (
        <LayoutDefault>
            <div>
                <h1 className='text_center'>{article.title}</h1>
                <div className='cont' dangerouslySetInnerHTML={{ __html: article.content }}></div>

                <style>{`
    
        .cont{
            margin:15px;
            padding:15px;
        }
    `}</style>
            </div>
        </LayoutDefault>
    )
}