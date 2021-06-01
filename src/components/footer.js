export default function footer() {
    const $div = document.createElement( 'div' );
    $div.innerHTML = `
    <p><b>Calculator</b> &#169; created with JavaScript, Webpack and SASS, by <i>Sergio A. Flores Quiroga</i></p>
    `;
    $div.classList.add( 'footer' );

    return $div;
}