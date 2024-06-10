import React from "react";
import googlelogo from "./googlelogo.jpg";
function Next() {
	const NextStyle = {
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

	const GoogleLogoStyle = {
		height: "10rem",
		width: "10rem",
	};

	const ParaStyle = {
		color: "#0d1b2a",
		"font-size": "large",
		"margin-left": "2rem",
		"margin-right": "2rem",
		"text-align": "center",
	};

	const BtnStyle = {
		cursor: "pointer",
		"margin-left": "2rem",
		"margin-right": "2rem",
		width: "20rem",
		"background-color": "#1e96fc",
		border: "1rem solid#1e96fc",
		"border-radius": "1rem",
		color: "#fff",
		"font-weight": "bold",
		"font-size": "larger",
	};

	const handleClick = () => {
		const btnid = document.getElementById("submitbtn");
		btnid.addEventListener("click", () => {
			console.log("New account has been successfully created.");
			alert("Your account has been successfully created.");
		});
	};

	const IconStyle = {
		height: "6rem",
		"font-weight": "bolder",
		"font-size": "xx-large",
		display: "flex",
		"justify-content": "center",
		"align-items": "center",
	};

	const H4Style = {
		"font-weight": "bold",
		"font-size": "x-large",
		color: "#0d1b2a",
	};

	return (
		<>
			<div className="container" style={NextStyle}>
				<div className="box">
					<img
						src={googlelogo}
						id="googlelogo"
						style={GoogleLogoStyle}
						alt="GoogleLogo"></img>
					<h4 style={H4Style}>Continuing with Google</h4>
					<i class="fa-solid fa-user fa-14px" id="icon" style={IconStyle}></i>
					<p id="paranext" style={ParaStyle}>
						Signning with your currently active Google account.By this you have
						accepted all the terms and conditions. If you wish to check them,
						you can kindly visit the Google terms and conditions.
					</p>
					<br />
					<div>
						<button
							type="submit"
							id="submitbtn"
							style={BtnStyle}
							onClick={handleClick}>
							Sign up
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Next;
