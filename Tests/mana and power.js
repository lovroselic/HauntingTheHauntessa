// -- main --
$(function () {
    console.clear();
    console.info("*****************************************");
    console.info("Mana and power test");

    function calcMana(magic) {
        return Math.floor(1.1 * (magic ** 1.1));
    }

    function calcPower1(magic) {
        return Math.max(Math.round((0.9 * magic)) + RND(-3, 3));
    }
    function calcPower2(magic) {
        return Math.max(1, Math.round(1.25 * magic + RND(-2, 2)));
    }

    for (let magic = 1; magic < 50; magic++) {
        let mana = calcMana(magic);
        let power1 = calcPower1(magic);
        let power2 = calcPower2(magic);
        console.log(`Magic: ${magic}, Mana: ${mana}, Power1: ${power1}, Power2: ${power2}`);
    }

    console.info("*****************************************");
});