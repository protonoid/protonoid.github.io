
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import './style.scss';

class Header extends React.Component {
    render() {
        const metaData = [];
        if (this.props.attrib.title) {
            metaData.push(
                <title key={'title'}>{this.props.attrib.title}</title>
            );
        }
        if (this.props.attrib.description) {
            metaData.push(
                <meta key={'description'} name="description" content={this.props.attrib.description} />
            );
        }
        return (
            <>
                <Head>
                    {metaData}
                    <meta charSet="utf-8" />
                    <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
                </Head>
                <nav className="d-flex align-items-center">
                    <div className="container">
                        <ul>
                            <li>
                                <Link href={'/blogs'}>
                                    <a>Blogs</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Header;
