var f=document.mainForm;
function changeButtonStatus(){
f.formSend.disabled=(f.name.value && f.subject.value) ? false : true;
}
changeButtonStatus();

let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function(){
    event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }
    commentName.value = '';
    commentBody.value = '';
    comments.push(comment);
    saveComments();
    showComments();
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments(){
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item){
        out += `<hr class="hr-text" style="color:white">`;
        out += `<img class="media-left img-circle img-sm" alt="Профиль пользователя" src="../../images/user.png">`;
        out += `<p class="text-muted text-sm margin-0"><em>${timeConverter(item.time)}</em></p>`;
        out += `<p class="text-light">${item.name}</p>`;
        out += `<p class="alert alert-light">${item.body}</p>`;
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Янв','Фев','Март','Апр','Май','Июнь','Июль','Авг','Сен','Окт','Ноя','Дек',]
    var year = a.getFullYear();
    var months = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + ' ' + months + ' ' + year + ' ' + hour + ':' + min;
    return time;
}
