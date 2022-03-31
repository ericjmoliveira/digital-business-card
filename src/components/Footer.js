import './Footer.css';

import twitterIcon from '../images/twitter-icon.png';
import facebookIcon from '../images/facebook-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import githubIcon from '../images/github-icon.png';

function Footer() {
	return (
		<footer className="footer__container">
			<button>
				<img src={twitterIcon} alt="Twitter" />
			</button>
			<button>
				<img src={facebookIcon} alt="Facebook" />
			</button>
			<button>
				<img src={instagramIcon} alt="Instagram" />
			</button>
			<button>
				<img src={githubIcon} alt="GitHub" />
			</button>
		</footer>
	);
}

export default Footer;
