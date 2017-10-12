/**
 * Created by oyhanyu on 2017/10/11.
 */
import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Layout from '../../components/Layout.js';
import stylesheet from './question.less';

export default () => (
    <PageWrapper>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Layout>
            <p>
                <span>Info:</span>
                <span className="ospan">This is the question page</span>
            </p>
        </Layout>
    </PageWrapper>
)