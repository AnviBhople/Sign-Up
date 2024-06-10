import React from "react";
import { Link } from "react-router-dom";

function ForgotPass() {
	const ForgotcontainerStyle = {
		"box-sizing": "border-box",
		"background-color": "#fefeff",
		height: "40rem",
		width: "30rem",
		display: "flex",
		"flex-direction": "column",
		"justify-content": "center",
		"align-items": "center",
		border: "2px solid #ccc9dc",
		"border-radius": "10%",
		// border: "radius top 20%",
		"margin-bottom": "10rem",
		"margin-top": "2rem",
		"box-shadow": "20px 20px 20px black",
		"margin-left": "35rem",
	};

	const InputStyle = {
		height: "2.5rem",
		width: "20rem",
		"margin-left": "0rem",
		"background-color": "whitesmoke",
		border: "2px solid #e7ecef",
		"border-radius": "1rem",
	};

	const HeadingPassStyle = {
		"font-size": "2.5rem",
		//"margin-left": "3rem",
		color: "#0d1b2a",
		"font-weight": "bolder",
		"text-align": "center",
	};

	const PStyle = {
		color: "#0d1b2a",
		"font-size": "large",
		"margin-left": "2rem",
		"margin-right": "2rem",
		"text-align": "center",
	};

	const ResetBtnStyle = {
		" cursor": "pointer",
		"margin-left": "5rem",
		width: "20rem",
		"background-color": "	#008000",
		border: "1rem solid 	#008000",
		"border-radius": "1rem",
		color: "#fff",
		"font-weight": "bold",
		"font-size": "larger",
		"margin-right": "5rem",
	};

	const IconStyle = {
		height: "4rem",
		"font-size": "xx-large",
		display: "flex",
		"justify-content": "center",
		"align-items": "center",
	};

	const CheckStyle = {
		height: "1rem",
		width: "1rem",
		// "padding-right": "10rem",
		// "padding-left": "1rem",
		"margin-left": "0.1rem",
	};

	return (
		<>
			<div className="container" style={ForgotcontainerStyle}>
				<div className="box">
					<div className="forgothead">
						<i
							class="fa-solid fa-lock-open fa-14px"
							id="icon"
							style={IconStyle}></i>

						<h1 id="headingpass" style={HeadingPassStyle}>
							Forgot Password?
						</h1>
					</div>
					<br />

					<p style={PStyle}>
						No Problem! Enter your email or username below and we will send you
						an email with instructions to reset your password.
					</p>
					<br />
					<input
						required
						type="email"
						id="enterEmail"
						placeholder="Enter email here"
						name="email"
						style={InputStyle}
					/>
					<br />
					<div className="checkBox">
						<input type="checkbox" style={CheckStyle} /> I'm not a robot
					</div>
					<br />
					<div>
						<Link to="/reset" id="resetlink">
							<button type="submit" style={ResetBtnStyle}>
								Send reset link
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default ForgotPass;
