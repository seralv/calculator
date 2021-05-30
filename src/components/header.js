export default function header() {
    const $div = document.createElement( 'div' );
    $div.innerHTML = `
        <div>
            <h1>DIGITAL CALCULATOR</h1>
        </div>
    `;
    $div.classList.add( 'header' );

    return $div;
}