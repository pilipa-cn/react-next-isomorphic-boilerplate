/**
 * Created by oyhanyu on 2017/10/10.
 */
import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import PageWrapper from '../components/PageWrapper';
import Layout from '../components/Layout.js';

/*function getPosts () {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js'},
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
    ]
}

const PostLink = ({ post }) => (
    <li>
        <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
        </Link>

    </li>
)

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {getPosts().map((post) => (
                <PostLink key={post.id} post={post}/>
            ))}
        </ul>
        <style jsx global>{`
      h1, a {
        font-family: "Arial";
        color: red;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </Layout>
)*/

const Index = (props) => {
    return (
        <PageWrapper>
            <Layout>
                <h1>react repositories in github</h1>
                <p>
                    total count is : {props.data.total_count}, all list :
                </p>
                <ul>
                    {
                        props.data.items.map( (item, index) => {
                            return (
                                <li key={index}>
                                    Name:
                                    <Link href={`/post?name=${item.owner.login}&repo=${item.name}`}>
                                        <a>{item.full_name}</a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <style jsx>
                    {`
                      h1, a {
                        font-family: "Arial";
                        color: red;
                      }

                      ul {
                        padding: 0;
                      }

                      li {
                        list-style: none;
                        margin: 5px 0;
                        font-size: 14px;
                      }

                      a {
                        text-decoration: none;
                        color: blue;
                      }

                      a:hover {
                        opacity: 0.6;
                      }
                    `}
                    </style>
            </Layout>
        </PageWrapper>
    )
};

Index.getInitialProps = async function() {
    const res = await fetch('https://api.github.com/search/repositories?q=react&p=2')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        data
    }
}

export default Index;
/*
const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-nextjs" title="Hello Next.js"/>
            <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
            <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
        </ul>
    </Layout>
)*/
