const counters =document.querySelectorAll('.counter');

function runCounter () {
    counters.forEach(counter =>{
        counter.innerText = 0;
        let target = +counter.dataset.count;
        console.log(target)
    })
}