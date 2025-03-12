// -- main --
$(function () {
    console.clear();
    console.info("*****************************************");

    const offsetVector = new Vector3(0.03745, 0, -0.18369);
    const incoming = new Vector3(-0.1997702419757843, -0.015090313740074635, 0.9797265529632568);
    const faceNormal = Vector3.getFaceNormal(offsetVector);
    console.info("faceNormal", faceNormal);
    const reflected = incoming.reflect(faceNormal);
    console.log("reflected", reflected);

    console.info("*****************************************");
});