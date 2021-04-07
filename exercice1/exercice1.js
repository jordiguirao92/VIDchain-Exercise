//RNA TRANSCRIPTION

class RNATranscription {
    
    /* OTRA OPCION FUERA DEL CONSTRUCTOR
    static REGEX_EXPRESSION = /^[GCTA]+$/;
    static DNA_TO_RNA = {
        'G':'C', 
        'C':'G', 
        'T':'A', 
        'A':'U'
    };*/

    constructor(){
        this.REGEX_EXPRESSION = /^[GCTA]+$/;
        this.DNA_TO_RNA = {
            'G':'C', 
            'C':'G', 
            'T':'A', 
            'A':'U'
        };
    }

    rnaTranscription(dna) {
        let dnaUpperCase = dna.toUpperCase();
        let rna = '';

        //RNATranscription.REGEX_EXPRESSION & RNATranscription.DNA_TO_RNA
        if(this.REGEX_EXPRESSION.test(dnaUpperCase)){
          for(let i = 0; i < dnaUpperCase.length; i+=1){
              rna += this.DNA_TO_RNA[dnaUpperCase[i]];
          }
          return rna;
    
        } else {
            return 'Invalid DNA'
        }
    }

} 

module.exports = RNATranscription;





