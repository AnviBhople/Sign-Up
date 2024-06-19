
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
