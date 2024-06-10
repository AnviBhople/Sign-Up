import React from "react";

function Signup_Google() {
	const GooglecontainerStyle = {
		"background-color": "#fefeff",
		height: "50rem",
		width: "30rem",
		display: "flex",
		"justify-content": "center",
		"align-items": "center",
		border: "2px solid #ccc9dc",
		"border-radius": "10%",
		border: "radius top 20%",
		"margin-bottom": "10rem",
		"margin-top": "2rem",
		"box-shadow": "20px 20px 20px black",
		"margin-left": "35rem",
	};

	const GoogleheadLogo = {
		"margin-left": "7.5rem",

		"font-weight": "bolder",
		"font-size": "xx-large",
		"font-style": "initial",
		color: "#0d1b2a",

		"margin-right": "2rem",
	};
	return (
		<>
			<div className="Google-conatiner" style={GooglecontainerStyle}>
				<div className="box">
					<h1 className="google-head" style={GoogleheadLogo}>
						Sign Up
					</h1>
				</div>
				<h4>Continue with Google</h4>
				<div className="input-conatiner">
					<label htmlFor="emailOrPhone">Email or phone</label>
					<input type="text" id="emailOrPhone" name="emailOrPhone" />
				</div>
				<div className="forgot-email">
					<a href="/">Forgot email?</a>
				</div>
				<br />
				<p>
					To continue, Google will share your name, email address, language
					preference and profile picture. Before using, you can check their
					privacy polich through their official website.
				</p>
				<button className="button" id="nextbtn">
					Next
				</button>
			</div>
		</>
	);
}
export default Signup_Google;
