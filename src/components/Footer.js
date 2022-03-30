import './Footer.css';

import twitterIcon from '../images/twitter-icon.png';
import facebookIcon from '../images/facebook-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import githubIcon from '../images/github-icon.png';

function Footer() {
	return (
		<footer className="footer__container">
			<a href="/">
				<img src={twitterIcon} alt="Twitter icon" />
			</a>
			<a href="/">
				<img src={facebookIcon} alt="Facebook icon" />
			</a>
			<a href="/">
				<img src={instagramIcon} alt="Instagram icon" />
			</a>
			<a href="/">
				<img src={githubIcon} alt="GitHub icon" />
			</a>
		</footer>
	);
}

export default Footer;
