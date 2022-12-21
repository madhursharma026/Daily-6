import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Footer.module.css';

export default function Footer() {

    return (
        <div className={`container-md fixed-bottom ${styles.making_mobile_size_scrn} ${styles.side_scrollbox_start}`}>
            <div className="row text-center">
                <Link href='/' className="col-6 p-3 text-white bg-primary" style={{ textDecoration: 'none' }}>
                    <h6>Homepage</h6>
                </Link>
                <Link href='/History' className="col-6 p-3 bg-warning" style={{ textDecoration: 'none' }}>
                    <h6>History</h6>
                </Link>
            </div>
        </div>
    )
}
