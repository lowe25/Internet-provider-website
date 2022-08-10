import Navbar from "../components/Navbar";
function Plans() {
    return (
        <>
            <Navbar />
            <div className="plans-container">
             <h1 className="plans-h1">Introducing All-New Fiber Unli and Fiber Plus Plans</h1>
                <section className="plans">
                    <div className="plans-box">
                        <div className="speed">
                        <h1>25 Mbps</h1>
                        </div>
                         <div className="plans-desc">
                            <h1>Plan 2000</h1>
                            <p>Best for Gaming and Movie Streaming <br />
                                video conferencing, virtual learning and <br />
                                work from home.
                            </p>
                            <h1>$59.00/mo</h1>
                        </div>
                        <div className="plan-benefits">
                            <h1>Benefits</h1>
                            <ul>
                                <li><i className="fas fa-phone-alt"></i>
                                    Landline</li>
                                <li><i className="fas fa-laptop"></i>Netflix and Disney +</li>
                            </ul>
                        </div>
                        <div className="plan-btn">
                            <button type="button" className="btn-apply">Apply Now</button>
                        </div>
                    </div>

                    <div className="plans-box">
                        <div className="speed">
                        <h1>50 Mbps</h1>
                        </div>
                        <div className="plans-desc">
                            <h1>Plan 2000</h1>
                            <p>Best for Gaming and Movie Streaming  <br />
                                video conferencing, virtual learning and  <br />
                                work from home.
                            </p>
                            <h1>$59.00/mo</h1>
                        </div>
                        <div className="plan-benefits">
                            <h1>Benefits</h1>
                            <ul>
                                <li><i className="fas fa-phone-alt"></i>
                                    Landline</li>
                                <li><i className="fas fa-laptop"></i>Netflix and Disney +</li>
                            </ul>
                        </div>
                        <div className="plan-btn">
                            <button type="button" className="btn-apply">Apply Now</button>
                        </div>
                    </div>

                    <div className="plans-box">
                    <div className="speed">
                        <h1>100 Mbps</h1>
                        </div>
                        <div className="plans-desc">
                            <h1>Plan 2000</h1>
                            <p>Best for Gaming and Movie Streaming  <br />
                                video conferencing, virtual learning and  <br />
                                work from home.
                            </p>
                            <h1>$59.00/mo</h1>
                        </div>
                        <div className="plan-benefits">
                            <h1>Benefits</h1>
                            <ul>
                                <li><i className="fas fa-phone-alt"></i>
                                    Landline</li>
                                <li><i className="fas fa-laptop"></i>Netflix and Disney +</li>
                            </ul>
                        </div>
                        <div className="plan-btn">
                            <button type="button" className="btn-apply">Apply Now</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Plans;