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
                            <h1>Plan 100</h1>
                            <p>Best for Gaming and Movie Streaming <br />
                                video conferencing, virtual learning and <br />
                                work from home.
                            </p>
                            <h1>$59.00/mo</h1>
                        </div>
                        <div className="plan-benefits">
                            <h1>Benefits</h1>
                            <ul>
                                <li>Landline</li>
                                <li>Netflix and Disney +</li>
                                <li>Connect to 10 Devices</li>
                            </ul>
                        </div>
                        <div className="plan-btn">
                            <button type="button" className="btn-apply">Apply Now</button>
                        </div>
                    </div>

                    <div className="plans-box">
                        <div className="speed">
                        <h1>300 Mbps</h1>
                        </div>
                        <div className="plans-desc">
                            <h1>Plan 2000</h1>
                            <p>Best for Gaming and Movie Streaming  <br />
                                video conferencing, virtual learning and  <br />
                                work from home.
                            </p>
                            <h1>$79.00/mo</h1>
                        </div>
                        <div className="plan-benefits">
                            <h1>Benefits</h1>
                            <ul>
                                <li>Landline</li>
                                <li>Netflix and Disney +</li>
                                <li>Connect to 15 Devices</li>
                            </ul>
                        </div>
                        <div className="plan-btn">
                            <button type="button" className="btn-apply">Apply Now</button>
                        </div>
                    </div>

                    <div className="plans-box">
                    <div className="speed">
                        <h1>1000 Mbps</h1>
                        </div>
                        <div className="plans-desc">
                            <h1>Plan 2000</h1>
                            <p>Best for Gaming and Movie Streaming  <br />
                                video conferencing, virtual learning and  <br />
                                work from home.
                            </p>
                            <h1>$99.00/mo</h1>
                        </div>
                        <div className="plan-benefits">
                            <h1>Benefits</h1>
                            <ul>
                                <li>Landline</li>
                                <li>Netflix and Disney +</li>
                                <li>Connect to 20 Devices</li>
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