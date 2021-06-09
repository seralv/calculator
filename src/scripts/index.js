import '../styles/main.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Calculator from '../components/calculator';

const $app = document.getElementById( 'app' );
$app.appendChild( Header() );

$app.appendChild( Calculator() );

$app.appendChild( Footer() );

const btn1 = document.getElementsByClassName( 'btn-1' );
const screen = document.getElementById( 'screen' );
btn1.addEventListener(('click'), () => {
    screen.innerText = 1;
});