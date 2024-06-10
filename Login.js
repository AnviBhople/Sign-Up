import React from "react";
// import "./App.css";
// import googleLogo from "./googleLogo.png";

function Login() {
	const LogincontainerStyle = {
		"margin-bottom": "10rem",
		"margin-top": "2rem",
	};

	const LoginheadStyle = {
		"margin-left": "7.5rem",
		"font-size": "xx - large",
	};

	// const GooglebtnStyle = {
	// 	"margin-left": "2.5rem",
	// 	"margin-right": "2.5rem",
	// };

	// const OrStyle = {
	// 	"margin-left": "12rem",
	// };

	const LoginlogoStyle = {
		"font-size": "xx-large",
		display: "flex",
		"justify-content": "center",
		"align-items": "center",
	};

	const LoginbtnStyle = {
		"margin-left": "2.3rem",
	};
	return (
		<>
			<div className="login-container" style={LogincontainerStyle}>
				<div className="containerinLogin">
					<div className="login">
						<h1 id="login-head" style={LoginheadStyle}>
							Sign In
						</h1>
						<h5>Welcome back! Please enter your details</h5>
						<br />
					</div>

					{/* <button id="googlebtn" style={GooglebtnStyle}>
						<img src={googleLogo} id="GoogleSignUpLogo" alt="Google logo" />
						Login with Google
					</button> */}
					{/* <br />
					<br />
					<h3 id="or" style={OrStyle}>
						Or
					</h3> */}
					<i
						id="loginlogo"
						class="fa-solid fa-right-to-bracket"
						style={LoginlogoStyle}></i>
					<br />
					<form>
						<label htmlFor="email" id="emailloglabel">
							Email
						</label>
						<br />
						<input
							type="email"
							id="emaillogin"
							placeholder="Enter your email here"
							required
						/>
						<br />
						<br />
						<label htmlFor="password" id="passloglabel">
							Password
						</label>
						<br />
						<input
							type="password"
							id="passwordlogin"
							placeholder="********"
							required
						/>
						<br />
						<br />
						<div className="check">
							<input type="checkbox" id="checkbox" required /> I accept all the
							terms and conditions
						</div>
						<br />
						<button type="submit" style={LoginbtnStyle} id="loginbtn">
							Sign in
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
export default Login;
