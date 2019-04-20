import React, { Component } from 'react';
import news from '../images/news.jpg';

class Landing extends Component {
    render() {
        const imgStyle = {
            height: 635,
            width: 1350,
        }
        return (
            <div>
                <img src={news} style={imgStyle} alt="NewsPapers" />
            </div >
        )
    }
}
export default Landing