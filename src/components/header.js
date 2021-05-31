export default function header() {
    const $div = document.createElement( 'div' );
    $div.innerHTML = `
        <h1>DIGITAL CALCULATOR</h1>
    `;
    $div.classList.add( 'header' );

    return $div;
}