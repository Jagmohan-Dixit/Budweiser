// import './style.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
    <div class="d-flex flex-column footer">
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">Asphalt</h5>
                    <p class="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small text-white mb-0">&copy; Copyrights. All rights reserved @Asphalt</p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-white">
                        <li><Link to="/" className="text-white">Home</Link></li>
                        <li><Link to="/" className="text-white">About Us</Link></li>
                        <li><Link to="/" className="text-white">Contact Us</Link></li>
                        <li><Link to="/" className="text-white">FAQ</Link></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-white">
                        <li><Link to="/" className="text-white">Home</Link></li>
                        <li><Link to="/about"  className="text-white">About</Link></li>
                        <li><Link to="/" className="text-white">Get started</Link></li>
                        <li><Link to="/faq"  className="text-white">FAQ</Link></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</div>
    )
}

export default Footer;