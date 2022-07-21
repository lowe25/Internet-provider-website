import Navbar from "../components/Navbar";
function Support() {
    return (
        <>
            <Navbar />
            <div className="support-container">
                <section className="support-about">
                    <h1>Parralax Internet Support</h1>
                    <p>Get help with your internet service, Wi-Fi gateways, and extenders. Find out
                        how to fix common issues or contact us.</p>
                </section>

                <section className="support-type">
                 <div className="trouble-type">
                    <div className="icon">
                        <h1>Troubleshooting</h1>
                    </div>
                    <div className="trouble-list">
                        <ul>
                            <li>No Internet Connection</li>
                            <li>Slow Internet Connection</li>
                            <li>Cannot Browse</li>
                        </ul>
                    </div>
                 </div>

                 <div className="trouble-type">
                    <div className="icon">
                    <h1>Gadget Setup</h1>
                    </div>
                    <div className="trouble-list">
                        <ul>
                            <li>Changing Device Name</li>
                            <li>Chaning Wifi Password</li>
                        </ul>
                    </div>
                 </div>

                 <div className="trouble-type">
                    <div className="icon">
                    <h1>Account</h1>
                    </div>
                    <div className="trouble-list">
                        <ul>
                            <li>Payment Bills Over the Counter</li>
                            <li>Payment Bills Thru Online</li> 
                        </ul>
                    </div>
                 </div>
                </section>
            </div>
        </>
    )
}

export default Support;