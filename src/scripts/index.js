import '../styles/main.scss';

const $app = document.getElementById( 'app' );
const $h1 = document.createElement( 'h1' );

$h1.textContent = 'Hello from javascript';

$app.append( $h1 );