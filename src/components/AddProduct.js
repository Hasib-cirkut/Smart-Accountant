import React, { useState } from 'react';
import firebase from '../firebase';

import { Input, Button, Row, Col } from 'antd';

function AddProduct() {
	const [ title, setTitle ] = useState('');
	const [ price, setPrice ] = useState(0);
	const [ quan, setQuan ] = useState(0);

	function handleSubmit(e) {
		e.preventDefault();

		firebase.firestore().collection('product').add({
			title: title,
			price: parseInt(price),
			quantity: parseInt(quan)
		});
	}

	return (
		<form onSubmit={handleSubmit}>
			<Row>
				<Col flex={1}>
					<Input
						type="text"
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.currentTarget.value)}
					/>
				</Col>

				<Col flex={1}>
					<Input
						type="number"
						placeholder="Price"
						value={price}
						onChange={(e) => setPrice(e.currentTarget.value)}
					/>
				</Col>

				<Col flex={1}>
					<Input
						type="number"
						placeholder="Quantity"
						value={quan}
						onChange={(e) => setQuan(e.currentTarget.value)}
					/>
				</Col>
			</Row>
			{/* TODO: fix Button findNode problem with antd */}
			<Button type="submit">Add Product</Button>
		</form>
	);
}

export default AddProduct;
