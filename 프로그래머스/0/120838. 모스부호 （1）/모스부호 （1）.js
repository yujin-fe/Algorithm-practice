function solution(letter) {
   const morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    };
    const letterArr = letter.split(' ');
    const message = letterArr.reduce((acc,el)=>{
        for(morseLetter in morse){
            if(morseLetter === el){
                acc+= morse[morseLetter]
            }
        }
        return acc
    },'')
    return message
}