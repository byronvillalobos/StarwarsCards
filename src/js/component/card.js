import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row mt-4">
			<div className="col-4 mx-2">
				<div className="card">
					<img src="" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							{PropTypes.var1}
							<br />
							{PropTypes.var2}
							<br />
							{PropTypes.var3}
						</p>

						<a href="#" className="btn btn-primary">
							Learn more!
						</a>
						<i className="far fa-heart" />
					</div>
				</div>
			</div>
		</div>
	);
};

// export const People = props => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();
// 	return (
// 		<div className="jumbotron">
// 			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

// 			<hr className="my-4" />

// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					People
// 				</span>
// 			</Link>
// 		</div>
// 	);
// };

// People.propTypes = {
// 	match: PropTypes.object
// };
