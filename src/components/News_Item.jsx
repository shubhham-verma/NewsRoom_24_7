import React, { Component } from 'react'

export class News_Item extends Component {

    render() {
        let { title, description, image_url, news_url, news_provider, time, author } = this.props;

        return (

            <div >
                <div className="mx-10 my-4 max-w-sm rounded-md overflow-hidden shadow-lg hover:outline outline-cyan-400"
                    onClick={() => { window.open(news_url, "_blank") }}
                    style={{ cursor: "pointer" }}>
                    {/* <img className="w-full" src={image_url} alt="Sunset in the mountains" /> */}
                    <img
                        className="w-full"
                        src={image_url}
                        alt="Sunset in the mountains"
                        onError={e => { e.target.onerror = null; e.target.src = "https://images.pexels.com/photos/1928151/pexels-photo-1928151.jpeg"; }}
                    />
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
            </div>

        )
    }
}

export default News_Item