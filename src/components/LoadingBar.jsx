import React, { Component } from 'react'

export default class LoadingBar extends Component {
    render() {
        let {progress, height} = this.props
        return (
            <div className={`container h-[${this.props.height}rem]`}>
                {/* <div className={`container w-${this.props.progress} bg-[#22d3ee]`} style = {{width: 'fit-content'}}> */}
                {/* <div className={`container w-2/5 bg-[#22d3ee]`} style = {{width: 'fit-content'}}> */}
                <div className={`container bg-[#22d3ee]`} style = {{width: `${this.props.progress}%`}}>
                    place holer text
                </div>
            </div>
        )
    }
}
