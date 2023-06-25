import React, { Component } from 'react';
import axios from "axios";

// banner_image_url: "https://devcamp-space.s3.amazonaws.com/D8PCHAVEPDvz6hwaY9k2tdBV?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20230624%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230624T135316Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=ac1d7b82194e5a358a2a29b0b5ba1e2938df1bec01312fc5d1439e7815eb979e"
// category: "technology"
// column_names_merged_with_images: (9) ['id', 'name', 'description', 'url', 'category', 'position', 'thumb_image', 'banner_image', 'logo']
// description: "Online tutorials and productivity tips."
// id: 39771
// logo_url: "https://devcamp-space.s3.amazonaws.com/hA98BDwn4Yr7QxypEhKovN17?response-content-disposition=inline%3B%20filename%3D%22crondose.png%22%3B%20filename%2A%3DUTF-8%27%27crondose.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20230624%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230624T135316Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=e2db09b1ff40fc671f28a55c6d233a4e83b04fbc82f02ee703940bd4f3328149"
// name: "Genius"
// position: 2
// thumb_image_url: "https://devcamp-space.s3.amazonaws.com/XWnJ1bwUr8NDRnyd27wbzsWV?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20230624%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230624T135316Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=74a50740c859c5a19cada646404c9595ab58adc7b6c252a5fbfb0bd37a646db9"
// url: "https:///crondose.com"

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        axios
            .get(
                `https://zacharywhite.devcamp.space/portfolio/portfolio_items/${
                    this.props.match.params.slug
                }`, 
                { withCredentials: true }
            )
            .then(response => {
                this.setState({
                    portfolioItem: response.data.portfolio_item
                });
            }).catch(error => {
                console.log("getportfolioitem error", error);
            })
    }

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem;

        const bannerStyles = {
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        };

        const logoStyles = {
            width: "200px"
        }


        return (
            <div className="portfolio-detail-wrapper">
                <div className="banner" style={bannerStyles}>
                    <img src={logo_url} style={logoStyles} />
                </div>

                <div className="portfolio-detail-description-wrapper">
                    <div className="description">{description}</div>
                </div>

                <div className="bottom-content-wrapper">
                    <a href={url} className="site-link" target="_blank">
                        Visit {name}
                    </a>
                </div>
            </div>
        );
    }
}