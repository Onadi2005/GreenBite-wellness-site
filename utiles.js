function saveToLocal(key,value){
    localStorage.setItem(key, JSON.stringify(value));

}
function loadFromLocal(key, fallback=null){
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
}

function animateCounter(el, start, end, durtion=800){
    let current = start;
    const range = end - start;
    const step = Math.sign(range);
    const interval = Math.max(duration / Math.abs(range), 20);

    const timer = setInterval(()=>{
        current += step;
        el.textContent = current;
        if(current === end) clearInterval(timer);
    }, interval);
}
