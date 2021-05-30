import '../styles/main.scss';
import Header from '../components/header';
import Footer from '../components/footer';

const $app = document.getElementById( 'app' );
$app.appendChild( Header() );

$app.appendChild( Footer() );