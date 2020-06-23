import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

function ProductList() {
	const [ product, setProduct ] = useState([]);

	useEffect(() => {
		let unsubscribe = firebase.firestore().collection('product').onSnapshot(function(querySnapshot) {
			let arr = [];

			querySnapshot.forEach(function(doc) {
				let temp = doc.data();

				temp['id'] = doc.id;

				arr.push(temp);
			});

			setProduct(arr);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<div>
			<h2>Product List</h2>

			<ol>
				{product.map(({ id, title, price, quantity }) => (
					<li key={id}>
						<p>{title}</p>
						<span>Price: {price}</span> <br />
						<span>quantity: {quantity}</span>
					</li>
				))}
			</ol>
		</div>
	);
}

export default ProductList;
