const DMMjs = require('..');

(async () => {

    const my34401 = new DMMjs('/dev/tty.usbserial-14530');
    await my34401.open();
    
    await my34401.linkDevice();
    let info = my34401.getDeviceInfo();
    console.log('Got device:', info.id, '( version', info.version, ')');

    await my34401.unlinkDevice();

})();
