const formatVolumeIconPath = require('../assets/scripts/main');

describe('Tests Icon Path', () => {
    test('Test Level 3', () =>{
        for(let volume = 100; volume > 66; volume--){
            expect(formatVolumeIconPath(volume)).toMatch('./assets/media/icons/volume-level-3.svg');
        }
    });
    test('Test Level 2', () =>{
        for(let volume = 66; volume > 33; volume--){
            expect(formatVolumeIconPath(volume)).toMatch('./assets/media/icons/volume-level-2.svg');
        }
    });
    test('Test Level 1', () =>{
        for(let volume = 33; volume > 0; volume--){
            expect(formatVolumeIconPath(volume)).toMatch('./assets/media/icons/volume-level-1.svg');
        }
    });
    test('Test Level 0', () =>{
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    });
});