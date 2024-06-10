import React from "react";
import emaillogo from "./emaillogo.jpg";

function Reset() {
	const ResetStyle = {
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
		border: "radius top 20%",
		"margin-bottom": "10rem",
		"margin-top": "2rem",
		"box-shadow": "20px 20px 20px black",
		"margin-left": "35rem",
	};

	const EmailStyle = {
		height: "14rem",
		width: "14rem",
		"margin-left": "7.5rem",
	};

	const ParaStyle = {
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

	const handleClick = () => {
		const btn = document.getElementById("resetbtn");
		btn.addEventListener("click", () => {
			console.log("The process of ForgotPass has been completed successfully");
			alert("Kindly check you inbox.");
		});
	};
	return (
		<>
			<div className="container" style={ResetStyle}>
				<div className="reset-box">
					<img src={emaillogo} alt="emaillogo" style={EmailStyle} />
					<p style={ParaStyle}>
						Kindly check your inbox. The link to reset your password has been
						sent there along with the further instructions.
					</p>
					<br />
					<button
						type="submit"
						id="resetbtn"
						style={ResetBtnStyle}
						onClick={handleClick}>
						Done
					</button>
				</div>
			</div>
		</>
	);
}

export default Reset;
