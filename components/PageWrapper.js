/**
 * Created by oyhanyu on 2017/10/10.
 */
import React from 'react';
import Head from 'next/head';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = (props) => (
    <div>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <link rel='stylesheet' href='https://cdn.bootcss.com/antd/2.13.3/antd.css' />
        </Head>
        <div style={layoutStyle}>
            {props.children}
        </div>
        {/* set global style */}
        <style jsx global>
            {`
                body {
                    font-size: 14px;
                    background-color: #fff;
                }
            `}
        </style>
    </div>

)

export default Layout;