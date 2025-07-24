let menuHeader = () => document.querySelector('body').classList.toggle('active_menu');
let rankHander = () => document.querySelector('body').classList.toggle('active_rank');
let loginHander = () => document.querySelector('body').classList.add('active_login');

let listPlay = [
    {
        current : 'position3',
        next : 'position2',
    },
    {
        current : 'position2',
        next : 'position1',
    },
    {
        current : 'position1',
        next : 'position5',
    },
    {
        current : 'position5',
        next : 'position3',
    },
    {
        current : 'position4',
        next : 'position5',
    },
]

const handlerPlay = ()=> {
    let play = document.querySelectorAll('.partion-play');
    for(let img of play){
        for(i in listPlay){
            if(img.classList.contains(listPlay[i].current)){
                img.classList.replace(listPlay[i].current,listPlay[i].next);
                break;
            }
        }
    }
}

setInterval(()=> {
    handlerPlay()
},3000);