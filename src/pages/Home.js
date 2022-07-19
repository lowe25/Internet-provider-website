import HomeNav from '../components/HomeNav';
function Home() {
    return (
        <>
            <div className="home-container">
                <HomeNav />
            </div>
            <div className="about">
                <p>Planning on upgrading your internet connection?
                    find a branch near you</p>
                    <div className="about-btn">
                        <button type="button" className="branch-btn">Find Branch</button>
                    </div>
            </div>
            <div className="branch-container">
                <h1>With Parralax Internet</h1>
                <div className="parralax-col">
                    <div className="col-box">
                        <div className="col-icon">
                        <i className="fas fa-wifi"></i>
                        </div>
                        <div className="col-desc">
                            <p>
                                Parralax Internet
                                can deliver
                                speeds faster than
                                5G providers
                            </p>
                        </div>
                    </div>

                    <div className="col-box">
                        <div className="col-icon">
                        <i className="fas fa-ethernet"></i>
                        </div>
                        <div className="col-desc">
                            <p>
                                Reliable,
                                fiber-based
                                network
                            </p>
                        </div>
                    </div>


                    <div className="col-box">
                        <div className="col-icon">
                        <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="col-desc">
                            <p>
                                24/7 Technical Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;