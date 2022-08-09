import Navbar from "../components/Navbar";
function Support() {
    return (
        <>
            <Navbar />
            <div className="support-container">
                <section className="support-about">
                    <h1>Parralax Internet Support</h1>
                    <p>Get help with your internet service, Wi-Fi gateways, and extenders. Find out <br />
                        how to fix common issues or contact us.</p>
                </section>

                <section className="support-type">
                    <div className="support">
                        <h1 className="help-h1">How Can We Help You Today?</h1>
                        <p className="solutions-p">Pick one from the topics below and we’ll find the best solution for you.</p>
                    </div>

                    <div className="concerns-div">
                        <div className="concern-box">
                            <div className="icon-box">
                                <p><i className="fas fa-money-check"></i></p>
                            </div>

                            <div className="concern-type">
                                <h1>Ease of Payment</h1>
                            </div>

                            <div className="concern-desc">
                                <p>
                                    <span>Pay your bills quickly and easily in</span>
                                    <span>the comfort of your home.</span>
                                </p>
                            </div>

                            <div className="concernBtn-con">
                                <button className="btn-concern" type="button">Pay Bills</button>
                            </div>
                        </div>

                        <div className="concern-box">
                            <div className="icon-box">
                                <p><i className="fas fa-file-invoice-dollar"></i></p>
                            </div>
                            <div className="concern-type">
                                <h1>Clarify Bill Charges</h1>
                            </div>

                            <div className="concern-desc">
                                <p>
                                    <span>To know more about billing charges</span>
                                    <span>and get assistance in understanding</span>
                                    <span>your bill.</span>
                                </p>
                            </div>

                            <div className="concernBtn-con">
                                <button className="btn-concern" type="button">Check Charges</button>
                            </div>
                        </div>

                        <div className="concern-box">
                            <div className="icon-box">
                                <p><i className="fas fa-concierge-bell"></i></p>
                            </div>
                            <div className="concern-type">
                                <h1>Aftersales Requests</h1>
                            </div>

                            <div className="concern-desc">
                                <p>
                                    <span>To request for Change of Telephone</span>
                                    <span>Number, Relocation, Change</span>
                                    <span>Ownership or NDD/IDD activation. </span>
                                </p>
                            </div>

                            <div className="concernBtn-con">
                                <button className="btn-concern" type="button">Make a Request</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Support;