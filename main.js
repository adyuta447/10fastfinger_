var word_js = 0;

var numberOfWordsPerMinute = 200; //Set your timeout

function hackit(){
    if(word_js<words.length){
        $('#inputfield').val(words[word_js] + ' ');
        var keyup = jQuery.Event('keyup');
        keyup.which = 32;
        $('#inputfield').trigger(keyup);
        word_js++;
        setTimeout('hackit()', numberOfWordsPerMinute); //
    }
}
setTimeout('hackit()', numberOfWordsPerMinute); //