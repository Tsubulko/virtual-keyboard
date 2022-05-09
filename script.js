let str = '';

function fbackSpase()
{
    let valu = document.getElementById('textarea').value;
    let lng = valu.length;
    document.getElementById('textarea').value = valu.slice(0, lng - 1)
}

function funcTab()
{
    let valu = document.getElementById('textarea').value;
    document.getElementById('textarea').value = valu + '  ';
}

function funcSpace()
{
    let valu = document.getElementById('textarea').value;
    document.getElementById('textarea').value = valu + ' ';
}

// function funcWrite()
// {
//     let valu = document.getElementById('textarea').value
//     document.getElementById('textarea').value = valu + '2321' ; 
// }

// document.getElementById('key').addEventListener('keydown',funcWrite())

// function changeLang(event)
// {
//     if(event.ctrlKey && event.altKey)
//     {
//         document.querySelector('.rus').visiability = visible;
//     }
// }

let keys = document.querySelectorAll('.key'); 
let spaceKey = document.querySelector('.Space'); 
let shift_left = document.querySelector('.ShiftLeft'); 
let shift_right = document.querySelector('.ShiftRight'); 
let caps_lock = document.querySelector('.CapsLock');  
 
for(let i = 0; i  < keys.length ; i++ ) { 
    keys[i].setAttribute('keyname', keys[i].innerText); 
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase()); 
} 
 
window.addEventListener('keydown', function(e) { 
    for(let i =0; i  < keys.length ; i++ ) { 
        if (e.key == keys[i].getAttribute('keyname') || (e.key == keys[i].getAttribute('lowerCaseName'))) { 
            keys[i].classList.add('active'); 
        } 
        if (e.code == 'Space') { 
            spaceKey.classList.add('active'); 
        } 
        if (e.code == 'ShiftRight') { 
            shift_left.classList.remove('active'); 
        } 
        if (e.code == 'ShiftLeft') { 
            shift_right.classList.remove('active'); 
        } 
        if (e.code == 'CapsLock') { 
            caps_lock.classList.toggle('active'); 
        } 
    }     
}) 
         
window.addEventListener('keyup', function(e) { 
    for(let i =0; i  < keys.length ; i++ ) { 
        if (e.key == keys[i].getAttribute('keyname') || (e.key == keys[i].getAttribute('lowerCaseName'))) { 
            keys[i].classList.remove('active'); 
            keys[i].classList.add('remove'); 
        } 
        if(e.code == 'Space') { 
            spaceKey.classList.add('active'); 
            spaceKey.classList.add('remove'); 
        } 
        if(e.code == 'ShiftRight') { 
            shift_right.classList.remove('active'); 
            shift_right.classList.remove('remove'); 
        } 
        if(e.code == 'ShiftLeft') { 
            shift_left.classList.remove('active'); 
            shift_left.classList.remove('remove'); 
        } 
        setTimeout(() => { 
            keys[i].classList.remove('remove'); 
        },200) 
    }     
})


