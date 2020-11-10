import "./index.less";
import API from "@/api/index";
import LayoutDefault from "@/layout/default";
import { Button } from "antd";


// getStaticProps
export async function getServerSideProps() {
    return {
        props: {

        },
    };
}


function Home({ }) {
    return (
        <LayoutDefault>
            <h1>hello world </h1>
        </LayoutDefault>
    );
}


export default Home;
