document.getElementById('output').style.visibility='hidden';
function weight()
{
    let wt=document.getElementById('w1');
    wt.innerHTML="&#xf516"
    setTimeout(() => wt.innerHTML="&#xf515",1000)
    setTimeout(() => wt.innerHTML="&#xf24e",2000)
}
weight();
setInterval(weight,3000)
function weight2()
{
    let wt=document.querySelector('#w2');
    wt.innerHTML="&#xf516"
    setTimeout(() => wt.innerHTML="&#xf515",1000)
    setTimeout(() => wt.innerHTML="&#xf24e",2000)
}
setInterval(weight2,3000)
document.querySelector('#input').addEventListener('input',convert)
function convert(e)
{
    document.getElementById('output').style.visibility='visible';
    let mg;
    mg=document.querySelector('#input').value;
    const gout=document.querySelector('#goutput');
    const kgout=document.querySelector('#kgoutput');
    const tout=document.querySelector('#toutput');
    gout.innerHTML=mg/1000;
    kgout.innerHTML=mg/1000000;
    tout.innerHTML=mg/1000000000;
}
