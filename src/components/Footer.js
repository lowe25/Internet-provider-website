function Footer(){
    return(
       <footer className="footer">
       <section className="soc-icons">
       <i className="fab fa-facebook-f"></i>
       <i className="fab fa-twitter"></i>
       <i className="fab fa-instagram"></i>
       <i className="fab fa-linkedin-in"></i>
       <i className="fab fa-youtube"></i>
       </section>

       <section className="footer-links">
        <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
       </section>

       <section className="copyright-container">
       <i className="fas fa-copyright"></i><p>Copyright Parralax Internet 2022</p>
       </section>
       </footer>
    )
}

export default Footer;