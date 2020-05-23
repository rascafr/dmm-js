const DMMjs = require('..');

(async () => {

    const my34401 = new DMMjs('/dev/tty.usbserial-14530', {verbose: false});
    await my34401.open();
    
    await my34401.linkDevice(true);
    let info = my34401.getDeviceInfo();
    console.log('Got device:', info.id, '( version', info.version, ')');

    await my34401.setDisplayText('X-X-X-X-X-X');

    /*let st = await my34401.selfTest();
    console.log('Self test', st);*/

    /*for (let index = 0; index < 10; index++) {
        let errs = await my34401.getErrors();
        console.log(index, 'Errors', errs);
    }*/

    /*console.log('DC Volt:', await my34401.readDCVoltage());
    console.log('AC Volt:', await my34401.readACVoltage());
    console.log('DC amps:', await my34401.readDCCurrent());
    console.log('AC amps:', await my34401.readACCurrent());
    console.log('Frequency:', await my34401.readFrequency());
    console.log(index, 'Resistance:', await my34401.readResistance());*/

    /*let iV = 0;
    for (let index = 0; index < 100; index++) {
        let v = await my34401.readDCVoltage();
        if (index === 0) iV = v;
        console.log('DC Volt:', v, ', /\\', (v - iV), 'ms');
    }*/
    
    /*let st = await my34401.selfTest();
    console.log('Self test', st);*/

})();
