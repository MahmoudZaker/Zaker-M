


const arrayOfQuotes = [
   
    {
     'quote': 'The best revenge is massive success.'
    },

    {
     'quote': 'You miss 100% of the shots you don\'t take.'
    },

    {
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },

    { 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    
    {
    'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'
    },

    { 
    'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever.'
    },




];

function generateQuote(){
 const random = Number.parseInt(Math.random()*arrayOfQuotes.length +1);
 document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;


}