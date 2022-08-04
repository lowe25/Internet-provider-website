import Navbar from "../components/Navbar";
function Apply() {
    return (
        <>
            <Navbar />
            <div className="apply-container">
                <section className="fillout-form">
                    <div className="resident-type">
                        <button className="condo">Condo</button>
                        <button className="house">House</button>
                    </div>
                    <form className="application-form">
                        <div className="house">
                            <input type="text" placeholder="House Number"></input>

                            <input type="text" placeholder="Lot Number"></input>

                            <input type="text" placeholder="Block Number"></input>
                        </div>

                        <div className="street">
                            <input type="text" placeholder="Street Name"></input>
                            <input type="text" placeholder="Subdivision"></input>
                        </div>

                        <div className="address">
                            <input type="text" placeholder="Address"></input>
                            <input type="text" placeholder="Landmark"></input>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Apply;