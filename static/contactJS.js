let submitBtn = document.getElementsByClassName('submit-btn')[0];
let ta = document.getElementsByTagName('textarea')[0];
console.log(ta.value);




submitBtn.addEventListener('click', function(event) {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        const inp = inputs[i];
        if(inp.value.length == 0) {
            alert('Please enter all the fields.');        
            return;
        }
    }
    let ta = document.getElementsByTagName('textarea')[0];
    console.log(ta.value);
    if(ta.value.length == 0) {
        alert('Please enter all the fields.');        
        return;
    }
    alert('Thank you for sharing your views with us, you will hear back from us soon.');
    return;
})