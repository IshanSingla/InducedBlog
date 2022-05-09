import React, { Component, useState } from "react";
import {
    useParams
  } from "react-router-dom";
import Colector from "./Colector"

export default class Posts extends Component {
    constructor(props) {   
        super(props);
        // let ra=Products()
        let is= {
            posts: [
                {
                postlisk: "ishanisgreat",
                auther: "Ishan Singla",
                title: "Run Python Code on Websites: Exploring Brython",
                image: "https://miro.medium.com/max/1400/0*WPX-e528msQc9qdI",
                describe: "JavaScript Equivalent Scripting in Python",
                posttime: "10:22AM 22 Jan 2022",
                postviews: 1,
                content: [
                    {
                    type: "Text",
                    text: "Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market.Freemium non-disclosure agreement lean startup bootstrapping holy grail ramen MVP iteration accelerator. Strategy market ramen leverage paradigm shift seed round entrepreneur crowdfunding social proof angel investor partner network virality.",
                    },
                    {
                    type: "Image",
                    imageTitle: "I am Tytle",
                    imageUrl:
                        "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg",
                    },
                    {
                    type: "Text",
                    text: "Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market.Freemium non-disclosure agreement lean startup bootstrapping holy grail ramen MVP iteration accelerator. Strategy market ramen leverage paradigm shift seed round entrepreneur crowdfunding social proof angel investor partner network virality.",
                    },
                    {
                    type: "Code",
                    CodeTitle: "HI I am Ishan",
                    Codetext: '<div class="alert alert-danger" role="alert">\n<i class="fas fa-bullhorn"></i> A simple danger alert-check it out! <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n<span aria-hidden="true">×</span>\n</button>\n</div>',
                    },
                ]
                },
            ]
        };
        is.posts.forEach((datass) => {
            if (datass.postlisk=="ishanisgreat"){
                this.data=datass
            };
        })

      }
    
    
  render() {
    let art=[]

    this.data.content.forEach((datas) => {
      if (datas.type == "Text") {
        art.push(<article className="article-post"><p>{datas.text}</p></article>);
      }
      else if (datas.type == "Image") {
        art.push(<div className="mb-5"><img src={datas.imageUrl} width="80%" /><h5 style={{alignment: "center"}}>{datas.imageTitle}</h5></div>);
      }
      else if (datas.type == "Code") {
        art.push(<><h5>{datas.CodeTitle}</h5><pre id="quickstart" className="language-markup mb-5" display="block">{datas.Codetext}</pre></>);
      }
    }
    );
    return (
      <>

        {/* Post Title */}
        <div className="container">
          <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
            <div className="h-100 tofront">
              <div className="row justify-content-between">
                <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                  <h1 className="display-5 secondfont mb-3 font-weight-bold">
                    {this.data.title}
                  </h1>
                  <p className="mb-3">{this.data.describe}</p>
                  <div className="d-flex align-items-center">
                    <img
                        className="rounded-circle"
                        src="https://avatars.githubusercontent.com/u/79676239?s=400&u=50ed13d45e13500fd65b3b84b4f64276d6313ea8&v=4"
                        width="70"
                      />
                    <small className="ml-2">
                        {this.data.auther}
                      <span className="text-muted d-block">
                        {this.data.posttime}
                      </span>
                    </small>
                  </div>
                </div>
                <div className="col-md-6 pr-0">
                  <img src={this.data.image} className="shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Post Content */}
          <div className="container pt-4 pb-4">
            <div className="row justify-content-center">
              <div className="col-lg-2 pr-4 mb-4 col-md-12">
                <div className="sticky-top text-center">
                  <div className="text-muted">Share this</div>

                  <div className="share d-inline-block">
                    <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                      <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                      <a className="a2a_button_facebook"></a>
                      <a className="a2a_button_twitter"></a>
                    </div>
                    <script async src="https://static.addtoany.com/menu/page.js" ></script>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">{art}<Colector key={"nfjnfdjndkkmn nimci "}/></div>
            </div>
          </div>
      </>
    );
  }
}
const Products = () => {
    const { id } = useParams();
    console.log(id);
    return id;
}