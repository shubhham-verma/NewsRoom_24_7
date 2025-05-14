import React, { Component } from 'react'
import News_Item from './News_Item'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            total_results: 0,

        }
        document.title = `Newsroom_24/7 - ${this.capitalizeFirstLetter(this.props.category)}`
    }

    fetchMoreData = async () => {
        try {
            this.setState({ loading: true });
            // let url = `https://newsapi.org/v2/top-headlines?country=us&apikey=81f5e798d3434c3c9544f4ef37cbcbad&page=${this.state.page + 1}&pagesize=${this.props.page_size}&category=${this.props.category}`;

            // let url = `http://localhost:5000/news?country=us&apikey=81f5e798d3434c3c9544f4ef37cbcbad&page=${this.state.page + 1}&pagesize=${this.props.page_size}&category=${this.props.category}`;

            let url = `https://newsroom-backend.onrender.com/news?country=us&apikey=81f5e798d3434c3c9544f4ef37cbcbad&page=${this.state.page + 1}&pagesize=${this.props.page_size}&category=${this.props.category}`;
            
            await this.setState({ page: this.state.page + 1 })

            let data = await fetch(url);        //  used to wait the function for completion of the element
            let parsedData = await data.json()

            this.setState({
                articles: this.state.articles.concat(parsedData.articles),      //concatenates more articles into new ones instead of loading them seperately like before....000

                total_results: parsedData.totalResults,
                // loading: false
            })

            // console.log(this.state.articles.length);
            // console.log(this.state.total_results);
            // console.log(this.props.page_size);


            // if (this.state.articles.length === 0) {
            //     this.setState({ loading: false });
            //     console.log("setting false 1");
            //     return;
            // }
            if (this.state.total_results - this.state.articles.length <= this.props.page_size) {
                this.setState({ loading: false });
                // console.log("setting false 2");
                return;
            }

            this.setState({ loading: false });
            // console.log("setting false 3"); 

        }
        catch (error) {
            console.log("Error fetching more data: ", error);
            this.setState({ loading: false });
        }
    };


    // async update_news() {                    //  make it async so that it can await within the function for completeion of other elements 


    //     this.setState({ loading: true })
    //     try {
    //         let url = `https://newsapi.org/v2/top-headlines?country=us&apikey=81f5e798d3434c3c9544f4ef37cbcbad&page=${this.state.page}&pagesize=${this.props.page_size}&category=${this.props.category}`;
    //         let data = await fetch(url);        //  used to wait the function for completion of the element
    //         let parsedData = await data.json()

    //         this.setState({
    //             articles: parsedData.articles,
    //             total_results: parsedData.totalResults,
    //             loading: false
    //         })

    //         console.log(`page is currently ${this.state.page}`);
    //         console.log(`total results are ${this.state.total_results}`);
    //         console.log(`articles are ${this.state.articles.length}`);

    //     }
    //     catch (error) {
    //         console.log("Error fetching data: ", error);
    //         this.setState({ loading: false });
    //     }

    //     if (this.state.articles.length === 0) {
    //         this.setState({ loading: false });
    //         return;
    //     }


    // }

    async componentDidMount() {
        // await this.update_news();
        await this.fetchMoreData();
        // console.log("running component did mount");
    }

    // handle_prev_click = async () => {

    //     await this.setState({ page: this.state.page - 1 })
    //     console.log(` changing the page to ${this.state.page}`);
    //     await this.update_news()
    // }
    // handle_next_click = async () => {

    //     await this.setState({ page: this.state.page + 1 })
    //     console.log(` changing the page to ${this.state.page}`);
    //     await this.update_news()

    // }

    render() {

        return (
            <>
                <div className="text-center">{this.state.loading && <Spinner />}</div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    // hasMore={this.state.articles.length != this.state.total_results}
                    hasMore={this.state.total_results - this.state.articles.length > this.props.page_size}
                    loader={<Spinner />}
                >

                    <div className="container grid grid-cols-3 my-16">
                        {this.state.articles.map((element, index) => {
                            return <News_Item
                                key={element.url + index}
                                title={element.title}
                                description={element.description} image_url={element.urlToImage ? element.urlToImage : 'https://images.pexels.com/photos/1928151/pexels-photo-1928151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                news_url={element.url}
                                news_provider={element.source.name} author={!element.author ? "Unknown" : element.author}
                                time={element.publishedAt} />
                        })}
                    </div>

                </InfiniteScroll>
                <br /><br /><br /><br />



                {/* <div className="container flex justify-evenly">
                    <button type='button' disabled={this.state.page <= 1} className='bg-slate-900 font-mono ring-[2.5px] ring-cyan-400  text-xl text-white m-4 px-4 py-2 rounded-lg hover:bg-cyan-600 hover:text-white hover:font-bold disabled:bg-slate-900 disabled:ring-0 disabled:font-normal' onClick={this.handle_prev_click}> &larr; Previous</button>
                    <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.total_results / this.props.page_size)} className='bg-slate-900 font-mono ring-[2.5px] ring-cyan-400  text-xl text-white m-4 px-4 py-2 rounded-lg hover:bg-cyan-600 hover:text-white hover:font-bold disabled:bg-slate-900 disabled:ring-0 disabled:font-normal' onClick={this.handle_next_click}>Next &rarr; </button>
                </div> */}


                {/* {console.log("trying to log total results")}
                {console.log(this.state.total_results)} */}
            </>
        )
    }
}

export default News