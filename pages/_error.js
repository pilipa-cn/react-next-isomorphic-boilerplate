/**
 * Created by oyhanyu on 2017/10/10.
 * override the default error page
 */
import React from 'react'

export default class Error extends React.Component {
    static getInitialProps({ res, jsonPageRes }) {
        const statusCode = res
            ? res.statusCode
            : jsonPageRes ? jsonPageRes.status : null
        return { statusCode }
    }

    render() {
        var page404 = (
          <span>404</span>
        );
        var error = (
            <span>error</span>
        );
        return (
            <p>
                {
                    this.props.statusCode && this.props.statusCode === 404 ? page404
                    : error }
            </p>
        )
    }
}