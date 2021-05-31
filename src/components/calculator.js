export default function calculator() {
    const $div = document.createElement( 'div' );
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    $div.innerHTML =`
    <div class="top-frame">
        <input type="text" id="screen">
            <div class="text">62345678</div>
        </input>
    </div>
    <div class="bottom-frame">
        <div class="btn-on">
            ON
        </div>
        <div class="btn-off">
            OFF
        </div>
        <div class="btn-div">
            /
        </div>
        <div class="btn-mult">
            x
        </div>
        <div class="btn-less">
            -
        </div>
        <div class="btn-plus">
            +
        </div>
        ${ numbers.map( num => `<div class='btn-${ num }'> ${ num } </div>` ).join('')}
        <div class="btn-dot">
            .
        </div>
        <div class="btn-equal">
            =
        </div>
    </div>
    `;
    $div.classList.add( 'calculator' );

    return $div;
}