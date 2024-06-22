import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/dummy-logo.jpg';
import mountains from './assets/mountains.jpg';

const Header = ({logoUrl, mountainsUrl}) => {
    return (
        <div >
            {/* <h1>is it working?</h1> */}
            <header style={styles.container} className="headerBackground">
                <img src={logo} alt="Logo" style={styles.logo} />
                <nav style = {styles.nav}>
                <Link to="/services" style={styles.navLink}>Services</Link>
                <Link to="/courses" style={styles.navLink}>Courses</Link>
                <Link to="/products" style={styles.navLink}>Products</Link>
                </nav>
                <div style={styles.menuIcon}>
                    <div style={styles.line}></div>
                    <div style={styles.line}></div>
                    <div style={styles.line}></div>
                </div>
            </header>
            <section>
                <h2>Testimonials</h2>
                <p>this will be a paragraph</p>
            </section>
         </div>
    )
}

//styles

const styles = {
    headerContainer: {
        height: '100px',
        overflowY: 'auto'

    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f0f0f0', // Example background color
        backgroundImage: `url(${mountains})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensure the header covers the entire viewport height

        // width: '100%',
        // height: '100%',
        // position: 'fixed',
        // top: 0,
        // left: 0,
        // zIndex: 1000

    },
    logo: {
        height: '200px',
        width: 'auto',
    },
    menuIcon: {
        cursor: 'pointer',
    },
    line: {
        width: '40px',
        height: '3px',
        backgroundColor: 'black',
        margin: '5px 0',
    },
    navLink: {
        textDecoration: 'none',
        color: 'black',
        marginLeft: '20px',
    },
    testimonialsSection: {
        backgroundColor: '#fff',
        padding: '20px',
        marginTop: '20px'
    },
    testimonialsTitle: {
        fontSize: '24px',
        marginBottom: '10px',

    },
    testimonialsContent: {
        fontSize: '16px',
    }

};

export default Header;