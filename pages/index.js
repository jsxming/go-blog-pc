import "./index.less";
import API from "@/api/index";
import LayoutDefault from "@/layout/default";
import Link from 'next/link';
import {wrapper} from '@/redux/store';
import {setTypes} from '@/redux/actions';
import { useSelector } from "react-redux";

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    let res = await API.queryArticles()
    let typeList = await API.queryTypes()
    store.dispatch(setTypes(typeList))

    return {
        props:{
            res
        }
    }
})




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


function Home({ res={} }) {
    let list = res.list || [];
    let types = useSelector(state=>state.types)
    console.log(types);

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
