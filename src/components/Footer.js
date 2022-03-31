import './Footer.css';

import twitterIcon from '../images/twitter-icon.png';
import facebookIcon from '../images/facebook-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import githubIcon from '../images/github-icon.png';

function Footer() {
	return (
		<footer className="footer__container">
			<img src={twitterIcon} alt="Twitter" />
			<img src={facebookIcon} alt="Facebook" />
			<img src={instagramIcon} alt="Instagram" />
			<img src={githubIcon} alt="GitHub" />
		</footer>
	);
}

export default Footer;
