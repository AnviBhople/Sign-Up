//1s attempt

// import "./App.css";
// import googleLogo from "./components/googleLogo.png";
// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Signin from "./components/Signin";

// function handleName() {
// 	const name = document.getElementById("name");
// 	// const handleInput = () => {
// 	console.log(`Name : ${name.value}`);
// 	// };`
// 	if (name) {
// 		name.addEventListener("input", handleName);
// 	}
// 	//Arrow or Cleanup function used to remove the event listner
// 	// return () => {
// 	// 	if (name) {
// 	// 		name.removeEventListener("input", handleInput);
// 	// 	}
// 	// };
// }

// function handleEmail() {
// 	const email = document.getElementById("email");
// 	// const handleInput = () => {
// 	console.log(`Email : ${email.value}`);
// 	// };
// 	if (email) {
// 		email.addEventListener("input", handleEmail);
// 	}
// }

// function handlePassword() {
// 	const pass = document.getElementById("pass");
// 	// const handleInput = () => {
// 	console.log(`Password : ${pass.value}`);
// 	// };
// 	if (pass) {
// 		pass.addEventListener("input", handlePassword);
// 	}
// }

// function handleConfirmPass() {
// 	const confirmPass = document.getElementById("confirmPass");
// 	// const handleInput = () => {
// 	console.log(`Confirmed Password : ${confirmPass.value}`);
// 	// };
// 	if (confirmPass) {
// 		confirmPass.addEventListener("input", handleConfirmPass);
// 	}
// }

// function handleSubmitbtn() {
// 	const btn = document.getElementById("submitbtn");
// 	btn.addEventListener("click", (event) => {
// 		console.log(`Name : ${handleName()}`);
// 		console.log(`Email : ${handleEmail()}`);
// 		console.log(`Password : ${handlePassword()}`);
// 		console.log(`Confirmed Password : ${handleConfirmPass()}`);
// 		// event.preventDefault();
// 		// console.log(handleName());
// 		// console.log(handleEmail());
// 		// console.log(handlePassword());
// 		// console.log(handleConfirmPass());
// 	});
// }

// function App() {
// 	useEffect(() => {
// 		handleSubmitbtn();
// 		// return cleanup;
// 	}, 25);
// 	// setTimeout(handleSubmitbtn, 0);
// 	return (
// 		<>
// 			<div className="container">
// 				<div className="heading">
// 					<div className="box">
// 						<h1 id="SignUp">Create Your Account</h1>

// 						<h5>Welcome back! Please enter your details.</h5>
// 					</div>
// 					<br />
// 					<button id="googlebtn">
// 						<img src={googleLogo} id="GoogleSignUpLogo"></img>
// 						Sign up with Google
// 					</button>
// 					<br />
// 					<br />
// 					<h3 id="or">Or</h3>

// 					<div className="form">
// 						<form>
// 							<label htmlFor="userName">Name </label>
// 							<br />
// 							<input
// 								type="text"
// 								placeholder="Enter your name"
// 								required
// 								id="name"
// 							/>
// 							<br />
// 							<br />
// 							<label htmlFor="userEmail">Email </label>
// 							<br />
// 							<input
// 								type="email"
// 								id="email"
// 								placeholder="Enter your Email"
// 								required
// 							/>
// 							<br />
// 							<br />
// 							<label htmlFor="password">Password </label>
// 							<br />
// 							<input
// 								type="password"
// 								id="pass"
// 								placeholder="********"
// 								required
// 							/>
// 							<br />
// 							<br />
// 							<label htmlFor="confirmPass">Confirm Password </label>
// 							<br />
// 							<input
// 								type="password"
// 								id="confirmPass"
// 								placeholder="********"
// 								required
// 							/>
// 							<br />
// 							<br />
// 							<div className="check">
// 								<input type="checkbox" id="checkbox" required /> I accept all
// 								the terms and conditions
// 							</div>

// 							<br />
// 							<button id="submitbtn">Sign up</button>
// 						</form>
// 						<div>
// 							<Link to="/signin">Already have an account? Sign in</Link>
// 						</div>
// 					</div>
// 				</div>

// 				<a href="">(i)</a>
// 			</div>
// 			<Router>
// 				<Routes>
// 					<Route path="/signin" element={<Signin />} />
// 				</Routes>
// 			</Router>
// 		</>
// 	);
// }

//export default App;

//2nd attempt

// import "./App.css";
// import googleLogo from "./components/googleLogo.png";
// import React, { useEffect } from "react";
// import Login from "./components/Login";
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Link,
// 	parsePath,
// } from "react-router-dom";
// import { useState } from "react";
// import ReactDOM from "react-dom";

// function handleName() {
// 	const name = document.getElementById("name");
// 	console.log(`Name : ${name.value}`);
// }

// function handleEmail() {
// 	const email = document.getElementById("email");
// 	console.log(`Email : ${email.value}`);
// }

// function handlePassword() {
// 	const pass = document.getElementById("pass");
// 	console.log(`Password : ${pass.value}`);
// }

// function handleConfirmPass() {
// 	const confirmPass = document.getElementById("confirmPass");
// 	console.log(`Confirmed Password : ${confirmPass.value}`);
// }

// function handleSubmitbtn(password, confirmPass) {
// 	const btn = document.getElementById("submitbtn");
// 	btn.addEventListener("click", (event) => {
// 		const element = <h1>Hello World!</h1>;
// 		console.log(element);
// 		//event.preventDefault();
// 		handleName();
// 		handleEmail();
// 		handlePassword();
// 		handleConfirmPass();
// 		if (password != confirmPass) {
// 			console.log("Password and Confirm Password are not same.");
// 			console.log("Password : ", password);
// 			console.log("Confirm Password : ", confirmPass);
// 		}
// 	});
// }

// function handleOnClick() {
// 	let count = 0;
// 	const signbtn = document.getElementById("submitbtn");
// 	signbtn.addEventListener("click", () => {
// 		console.log(`Sign in btn is pressed.`);
// 	});
// }
// function App() {
// 	const [signup, setsignup] = useState();
// 	// const root = ReactDOM.createRoot(document.getElementById("root"));
// 	// const element = <h1>Hello, world</h1>;
// 	// root.render(element);
// 	// console.log(`Name rendered by root : ${root}`);
// 	useEffect(() => {
// 		handleSubmitbtn();
// 	}, []);
// 	// handleSubmitbtn();
// 	return (
// 		<Router>
// 			<div className="container">
// 				<div className="heading">
// 					<div className="box">
// 						<h1 id="SignUp">Create Your Account</h1>
// 						<h5>Welcome back! Please enter your details.</h5>
// 					</div>
// 					<br />
// 					<button id="googlebtn">
// 						<img src={googleLogo} id="GoogleSignUpLogo" alt="Google logo" />
// 						Sign up with Google
// 					</button>
// 					<br />
// 					<br />
// 					<h3 id="or">Or</h3>
// 					<div className="form">
// 						<form>
// 							<label htmlFor="userName">Name</label>
// 							<br />
// 							<input
// 								type="text"
// 								placeholder="Enter your name"
// 								required
// 								id="name"
// 							/>
// 							<br />
// 							<br />
// 							<label htmlFor="userEmail">Email</label>
// 							<br />
// 							<input
// 								type="email"
// 								id="email"
// 								placeholder="Enter your Email"
// 								required
// 							/>
// 							<br />
// 							<br />
// 							<label htmlFor="password">Password</label>
// 							<br />
// 							<input
// 								type="password"
// 								id="pass"
// 								placeholder="********"
// 								required
// 							/>
// 							<br />
// 							<br />
// 							<label htmlFor="confirmPass">Confirm Password</label>
// 							<br />
// 							<input
// 								type="password"
// 								id="confirmPass"
// 								placeholder="********"
// 								required
// 							/>
// 							<br />
// 							<br />
// 							<div className="check">
// 								<input type="checkbox" id="checkbox" required /> I accept all
// 								the terms and conditions
// 							</div>
// 							<br />
// 							<button id="submitbtn" onClick={handleOnClick}>
// 								Sign up
// 							</button>
// 						</form>
// 						<div>
// 							<a href="/login" target="_blank">
// 								Already have an account? Sign in
// 							</a>
// 							{/* <a href={<Login target="_blank">Already</Login>}></a> */}
// 							{/* <a href={<Login signup={signup} setsignup={setsignup} />}>
// 								Already have an account? Sign in
// 							</a> */}
// 						</div>
// 					</div>
// 				</div>
// 				<Routes>
// 					<Route path="/login" element={<Login />} />
// 				</Routes>
// 			</div>
// 			);
// 		</Router>
// 	);
// }

// export default App;

//3rd attempt
import "./App.css";
import googleLogo from "./components/googleLogo.png";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup_Google from "./components/Signup_Google";

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			console.log("Password and Confirm Password are not the same.");
		} else {
			console.log("Name:", name);
			console.log("Email:", email);
			console.log("Password:", password);
			console.log("Confirmed Password:", confirmPassword);
		}
	};

	return (
		<div className="container">
			<div className="heading">
				<div className="box">
					<h1 id="SignUp">Create Your Account</h1>

					<h5>Welcome! Please enter your details.</h5>
				</div>
				<br />
				<div>
					<Link to="/signup" id="signuplink" target="_blank">
						<button id="googlebtn">
							<img src={googleLogo} id="GoogleSignUpLogo" alt="Google logo" />
							Sign up with Google
						</button>
					</Link>
				</div>
				<br />
				<br />
				<h3 id="or">Or</h3>

				<form onSubmit={handleSubmit}>
					<label htmlFor="userName">Name</label>
					<input
						type="text"
						placeholder="Enter your name"
						required
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<br />
					<br />
					<label htmlFor="userEmail">Email</label>
					<input
						type="email"
						id="email"
						placeholder="Enter your Email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<br />
					<br />
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="pass"
						placeholder="********"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br />
					<br />
					<label htmlFor="confirmPass">Confirm Password</label>
					<input
						type="password"
						id="confirmPass"
						placeholder="********"
						required
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<br />
					<div className="check">
						<input type="checkbox" id="checkbox" required /> I accept all the
						terms and conditions
					</div>
					<br />

					<button type="submit" id="submitbtn">
						Sign up
					</button>
				</form>
				<br />
				<div>
					<Link to="/login" id="loglink" target="_blank">
						Already have an account? Sign in
					</Link>
				</div>
			</div>
		</div>
	);
}

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Routes>
				<Route path="/" element={<Signup_Google />} />
				<Route path="/signup" element={<Signup_Google />} />
			</Routes>
		</Router>
	);
}

export default App;
