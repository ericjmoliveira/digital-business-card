import "./Info.css";

import photo from "../images/photo.png";
import emailIcon from "../images/email-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";

function Info() {
	return (
		<header className="info-container">
			<img src={photo} alt="Card pic" />
			<div className="info-data">
				<h2 className="info--name">Laura Smith</h2>
				<p className="info--role">Frontend Developer</p>
				<small className="info--website">laurasmith.website</small>
			</div>
			<div className="info-buttons">
				<button className="info--email-btn">
					<img src={emailIcon} alt="Email icon" /> Email
				</button>
				<button className="info--linkedin-btn">
					<img src={linkedinIcon} alt="Email icon" />
					LinkedIn
				</button>
			</div>
		</header>
	);
}

export default Info;
