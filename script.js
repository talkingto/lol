const problem=document.querySelector('.problem');
const from=document.querySelector('.from');
const next=document.querySelector('.next');
const getproblem = async() =>{
    const res = await fetch('');
    const problems = await res.json();
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const prob = item.problem;
    const from1 = item.from;
    problem.innerText=prob;
    from.innerText=from1;
    //console.log(item)
}
next.addEventListener('click',getproblem)
getproblem()