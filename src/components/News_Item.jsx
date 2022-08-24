import React, { Component } from 'react'

export class News_Item extends Component {

    render() {
        let { title, description, image_url, news_url, news_provider, time, author } = this.props;

        return (

            <a href={news_url} target='_blank'>
                <div className="mx-10 my-4 max-w-sm rounded-md overflow-hidden shadow-lg hover:outline outline-cyan-400" >
                    <img className="w-full" src={image_url} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">
                            {description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 ">
                        <a className="inline-block text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {news_provider}
                        </a>
                        <a className="inline-block text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {new Date(time).toDateString()}
                        </a>
                        <a className="inline-block text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {author}
                        </a>
                        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                    </div>
                </div>
            </a>

        )
    }
}

export default News_Item