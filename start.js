
function reLoad() {
    return location.reload();
}

function checkVictory(val){
    if(val==0){
        alert('CONRGATALITION');
        field.forEach(function(item, i){
          elem[i].style.pointerEvents='none';
        })

    }
    return val;
}

function findAllApples(array,zero){
    field.forEach(function(item, i, array){
        if(array[i]==zero){
            allApples++;
        }
    })
    return allApples;
}

function checkedMoves(){
    if(cnt<1){
        alert('You find '+apples+' apples');
        setTimeout(function(){ return location.reload()},500)

    }
}

function bomber(event){
    document.getElementById('try').textContent=cnt-1;
    cnt--;
    this.className='block  bomber';
    console.log(cnt);
    checkedMoves()
    return this.removeEventListener('click',bomber);

}

function apple(){
    apples++;
    allApples--;
    document.getElementById('allApples').textContent=allApples;
    this.className='block apple';
    checkVictory(allApples);
    return this.removeEventListener('click',apple);

}

function randomNumb(event){
    return Math.floor(Math.random()*event);
}

var apples=0;
var allApples=0;
var cnt=5;
var elem=document.getElementsByClassName('block');
var restart=document.getElementById('restart');
document.getElementsByName('regular')[0].focus();

var irregularVerbs=['go','take','give','speak','swim','arise','be','bear','begin','bend','can','cast','cost','dare','dig',
                        'dream','feed','fly','fight','gild','grow','hung','hew'];

var regularVerbs=['work','live','like','talk','love','happen','gain','found','follow','fill','fail','face','explain',
                    'experience','enable','divide','depend','decide','contain','consist','complain','belong','avoid','afford'];

var field=[1,1,1,1,1,
         1,0,1,0,1,
        1,1,0,1,1,
        1,0,1,0,1,
        1,1,1,1,1];

function main() {
    findAllApples(field,0);
    document.getElementById('try').textContent=cnt;
    document.getElementById('allApples').textContent=allApples;
    restart.addEventListener('click',reLoad)
    document.getElementById('irregularVerbs').focus();
    for (var i = 0; i < field.length; i++) {

        if (field[i] == 1) {
            elem[i].addEventListener('click', bomber);
            let randomRe = randomNumb(regularVerbs.length);
            document.getElementsByTagName('p')[i].textContent = regularVerbs[randomRe].charAt(0).toUpperCase()+regularVerbs[randomRe].substr(1);
            regularVerbs.splice(randomRe, 1);


        }
        else {
            elem[i].addEventListener('click', apple);
            let randomIre = randomNumb(irregularVerbs.length);
            document.getElementsByTagName('p')[i].textContent = irregularVerbs[randomIre].charAt(0).toUpperCase()+irregularVerbs[randomIre].substr(1);
            irregularVerbs.splice(randomIre, 1)
        }


    }
}
main();
console.log(allApples);



