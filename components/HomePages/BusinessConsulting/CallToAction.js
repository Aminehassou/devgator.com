import React, { Component } from 'react'
import Link from 'next/link'

export default class CallToAction extends Component {
    render() {
        return (
            <>
                <div className="call-to-action-area bg-image ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="call-to-action-content">
                                    <h2>We Open for You 24 Hours a Day to Growing Our Partnerships in a Better Way</h2>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="call-to-action-btn">
                                    <Link href="/contact">
                                        <a className="default-btn-two">
                                            Contact Us <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
