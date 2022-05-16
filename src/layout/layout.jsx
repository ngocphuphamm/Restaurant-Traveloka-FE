
import NavbarApp from '../components/navbar/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer';
export default function Layout() {
	return (
		<div>
			<NavbarApp />
            <Outlet />
            <Footer/>
		</div>
	);
}
