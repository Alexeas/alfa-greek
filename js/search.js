document.querySelector('#mySearch').addEventListener('click', function() {
  document.querySelector('.myMenu').classList.add('visible');
});

document.querySelector('#mySearch').oninput = function() {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.myMenu li');
    if (val != ''){
        elasticItems.forEach(function (elem){
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str,elem.innerText.search(val), val.length);
                document.querySelector("#menu-burger__header").onclick = function(){
                        let elasticList = document.querySelectorAll('.myMenu li a');
                        if (elasticItems == -1) {
                                document.querySelector("#menu-burger__header").onclick = function(){
                                  alert("Неверный запрос!");
                                }
                        }
                    else {
                        window.open(elasticList, [0]);
                        }
                        };
                    }
        });
    }
    else {
        elasticItems.forEach(function (elem){
                elem.classList.remove('hide');
                elem.innerHTML = elem.innerText;
        });
    }

}

function insertMark(string,pos,len){
    return string.slice(0, pos)+'<mark>'+string.slice(pos, pos+len)+'</mark>'+string.slice(pos+len);
}

document.querySelector("#menu-burger__header").onclick = function(){
  alert("Введите Ваш запрос!");
}
