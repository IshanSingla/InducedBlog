import React, { Component } from 'react'

export default class Posts extends Component {
  render() {
    return (
      <div>
        <div className="container pt-4 pb-4">
            <div className="row justify-content-center">
                <div className="col-lg-2 pr-4 mb-4 col-md-12">
                    <div className="sticky-top text-center">
                        <div className="text-muted">
                            Share this
                        </div>
                        
                        <div className="share d-inline-block">
                            <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                                <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                                <a className="a2a_button_facebook"></a>
                                <a className="a2a_button_twitter"></a>
                            </div>
                            <script async src="https://static.addtoany.com/menu/page.js"></script>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-8">
                    <article className="article-post">
                    <p>
                        Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift stealth mass market seed money rockstar niche market marketing buzz market.
                        Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.
                        Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market.
                        Freemium non-disclosure agreement lean startup bootstrapping holy grail ramen MVP iteration accelerator. Strategy market ramen leverage paradigm shift seed round entrepreneur crowdfunding social proof angel investor partner network virality.
                    </p>
                    </article>
                    <div className="border p-5 bg-lightblue">
                        <div className="row justify-content-between">
                            <div className="col-md-5 mb-2 mb-md-0">
                                <h5 className="font-weight-bold secondfont">Become a member</h5>
                                Get the latest news right in your inbox. We never spam!
                            </div>
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Enter your e-mail address"/>
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <button type="submit" className="btn btn-success btn-block">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
