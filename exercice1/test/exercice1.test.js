const RNATranscription = require('../exercice1');


describe('RNA TRANSCRIPTION TESTING', () => {
  let rnaTranscriptor;

  beforeEach(() => {
    rnaTranscriptor = new RNATranscription();
  })

  test('Introduce a NO valid DNA', () => {
    let result = rnaTranscriptor.rnaTranscription('haa5pre');
    expect(result).toBe('Invalid DNA');
  })

  test('Introduce a DNA in lowercase', () => {
    let result = rnaTranscriptor.rnaTranscription('aaagggcccttt');
    expect(result).toBe('UUUCCCGGGAAA');
  })

  test('Introduce a DNA in uppercase', () => {
    let result = rnaTranscriptor.rnaTranscription('AATTCCGG');
    expect(result).toBe('UUAAGGCC');
  })

  test('Introduce a DNA in uppercase and lowercase', () => {
    let result = rnaTranscriptor.rnaTranscription('AAttCCgg');
    expect(result).toBe('UUAAGGCC');
  })

})