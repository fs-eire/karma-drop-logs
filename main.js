describe('test group', ()=>{
    it('case', ()=>{
        console.log('=== start ===');

        // start doing some heavy work
        const startTime = new Date();
        let ms = 0;
        while (ms < 30000) {  // <--- if change to 20000, the logs are correctly outputted to console
            if (new Date() - startTime > ms) {
                console.log(`-- ${ms} ms passed --`);
                ms=ms+10;
            }
        }

        console.log('=== end ===');
    });
});
