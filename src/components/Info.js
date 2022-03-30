import './Info.css';

import photo from '../images/photo.png';
import emailIcon from '../images/email-icon.png';
import linkedInIcon from '../images/linkedin-icon.png';

function Info() {
	return (
		<header className="info__container">
			<img src={photo} alt="Card pic" />
			<div className="info__data">
				<h2 className="info__name">Laura Smith</h2>
				<p className="info__role">Frontend Developer</p>
				<small className="info__website">laurasmith.website</small>
			</div>
			<div className="info__buttons">
				<button className="info__email-btn">
					<img src={emailIcon} alt="Email icon" /> Email
				</button>
				<button className="info__linkedin-btn">
					<img src={linkedInIcon} alt="Email icon" />
					LinkedIn
				</button>
			</div>
		</header>
	);
}

export default Info;
