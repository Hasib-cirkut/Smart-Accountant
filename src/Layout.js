import React from 'react';
import { Input, Button, Layout } from 'antd';

import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const { Header, Content, Footer, Sider } = Layout;
function LayoutPrint() {
	return (
		<Layout style={{ height: '100vh' }}>
			<Header>header</Header>
			<Layout>
				<Sider>left sidebar</Sider>
				<Content
					style={{
						marginTop: '2rem',
						marginLeft: '10%',
						marginRight: '10%'
					}}
				>
					<AddProduct />
					<ProductList />
				</Content>
				<Sider>right sidebar</Sider>
			</Layout>
			<Footer>footer</Footer>
		</Layout>
	);
}

export default LayoutPrint;
