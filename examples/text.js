const DMMjs = require('..');

(async () => {

    const my34401 = new DMMjs('/dev/tty.usbserial-14530');

    await my34401.open();
    await my34401.linkDevice();

    await delay(1000);
    await my34401.setDisplayVisibility(false);

    await delay(1000);
    await my34401.setDisplayVisibility(true);

    await delay(1000);
    await my34401.setDisplayText('DMM.js RS232');

    await delay(1000);
    await my34401.clearDisplayText();

    await my34401.unlinkDevice();

})();

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}