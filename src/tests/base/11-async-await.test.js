import { getImagen } from "../../base/11-async-await";

describe('Test on 11-async-await', () => {
   
    test('should return url image', async() => {
        
        const url = await getImagen();

        expect( url.includes('https://') ).toBe(true);

    });
     
});
