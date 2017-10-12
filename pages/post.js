/**
 * Created by oyhanyu on 2017/10/10.
 */
import React from 'react';
import fetch from 'isomorphic-unfetch';
import {Button} from 'antd';
import Layout from '../components/Layout.js';
import PageWrapper from '../components/PageWrapper';

export default class extends React.Component {
    constructor(props) {
        super(props);
        // 将需要改变的数据存储到state中
        this.state = {
            count: props.count
        }
    }
    // 初始化数据，在constructor之前执行
    static async getInitialProps ( {query}) {
        const { name, repo } = query
        const res = await fetch(`https://api.github.com/repos/${name}/${repo}`)
        const repository = await res.json()

        console.log(`Fetched show: ${repository.name}`)
        return { repository, count: 100 }
    }
    handleChange () {
        this.setState({
            count: 10
        })
    }
    render () {
        return (
            <PageWrapper>
                <Layout>
                    <h1>{this.props.repository.full_name}</h1>
                    <h4>Description: {this.props.repository.description}</h4>
                    <p>url: <a href={this.props.repository.html_url}>{this.props.repository.html_url}</a></p>
                    <p>count: {this.state.count}</p>
                    <img src="/static/images/test.jpg" alt="img"/>
                    <Button type="primary" onClick={this.handleChange.bind(this)}>Change</Button>
                </Layout>
            </PageWrapper>
        )
    }
}

/*
const Post =  (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post*/
