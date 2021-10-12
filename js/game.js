const question_crete = "Укажите Крит";
const question_attica = "Укажите Аттику";
const question_aegean_south_islands = "Укажите Южные Эгейские острова";
const question_aegean_nord_islands = "Укажите Северные Эгейские острова";
const question_ams_of_the_holy_mountain = "Укажите Автономное Монашеское Государство Святой Горы";
const question_epirus = "Укажите Эпир";
const question_west_macedonia = "Укажите Западную Македонию";
const question_central_macedonia = "Укажите Центральную Македонию";
const question_east_macedonia_and_thrace = "Укажите Восточную Македонию и Фракию";
const question_ionian_islands = "Укажите Ионические острова";
const question_peloponnese = "Укажите Пелопоннес";
const question_west_greece = "Укажите Западную Грецию";
const question_thessaly = "Укажите Фессалию";
const question_central_greece = "Укажите Центральную Грецию";

const audio_winner = new Audio('music/winner.wav');
const audio_bad = new Audio('music/bad.wav');
const audio_great = new Audio('music/great.wav');

let score = 0;

let flag_crete = true;
let flag_attica = true;
let flag_aegean_south_islands = true;
let flag_aegean_nord_islands = true;
let flag_ams_of_the_holy_mountain = true;
let flag_epirus = true;
let flag_west_macedonia = true;
let flag_central_macedonia = true;
let flag_east_macedonia_and_thrace = true;
let flag_ionian_islands = true;
let flag_peloponnese = true;
let flag_west_greece = true;
let flag_thessaly = true;
let flag_central_greece = true;

const question_array = [question_crete, question_attica, question_aegean_south_islands, question_aegean_nord_islands, question_ams_of_the_holy_mountain, question_epirus, question_west_macedonia, question_central_macedonia, question_east_macedonia_and_thrace, question_ionian_islands, question_peloponnese, question_west_greece, question_thessaly, question_central_greece];
let question_rand = Math.floor(Math.random() * question_array.length);
let theDiv = document.getElementById('question_container');

for (var i = 0 ; (i < 14) && (i < question_array.length) ; i++) {
    var r = Math.floor(Math.random() * (question_array.length - i)) + i;
    var question = question_array[r];
    question_array[r] = question_array[i];
    question_array[i] = question;
};
    question_array.push("Вы Выиграли. Поздравляем");
    document.getElementById('question_text').innerHTML = question_array[0] + ". Ваш счёт: " + score;

function crete() {
    if (question_array[0] == question_crete && question_array[0] !== undefined) {
        flag_crete = false;
        document.getElementById('image_map_13').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Прекрасно! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function attica() {
    if (question_array[0] == question_attica && question_array[0] !== undefined) {
        flag_attica = false;
        document.getElementById('image_map_8').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Отлично! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function aegean_south_islands() {
    if (question_array[0] == question_aegean_south_islands && question_array[0] !== undefined) {
        flag_aegean_south_islands = false;
        document.getElementById('image_map_3').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Прекрасно! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function aegean_nord_islands() {
    if (question_array[0] == question_aegean_nord_islands && question_array[0] !== undefined) {
        flag_aegean_nord_islands = false;
        document.getElementById('image_map_12').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Вы сегодня в ударе! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function ams_of_the_holy_mountain() {
    if (question_array[0] == question_ams_of_the_holy_mountain && question_array[0] !== undefined) {
        flag_ams_of_the_holy_mountain = false;
        document.getElementById('image_map_14').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Невероятно! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function epirus() {
    if (question_array[0] == question_epirus && question_array[0] !== undefined) {
        flag_epirus = false;
        document.getElementById('image_map_10').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Здорово! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function west_macedonia() {
    if (question_array[0] == question_west_macedonia && question_array[0] !== undefined) {
        flag_west_macedonia = false;
        document.getElementById('image_map_11').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Прекрасно! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function central_macedonia() {
    if (question_array[0] == question_central_macedonia && question_array[0] !== undefined) {
        flag_central_macedonia = false;
        document.getElementById('image_map_5').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Прекрасно! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function east_macedonia_and_thrace() {
    if (question_array[0] == question_east_macedonia_and_thrace && question_array[0] !== undefined) {
        flag_east_macedonia_and_thrace = false;
        document.getElementById('image_map_9').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Отлично! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function ionian_islands() {
    if (question_array[0] == question_ionian_islands && question_array[0] !== undefined) {
        flag_ionian_islands = false;
        document.getElementById('image_map_7').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Так держать! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function west_greece() {
    if (question_array[0] == question_west_greece && question_array[0] !== undefined) {
        flag_west_greece = false;
        document.getElementById('image_map_4').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Прекрасно! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function peloponnese() {
    if (question_array[0] == question_peloponnese && question_array[0] !== undefined) {
        flag_peloponnese = false;
        document.getElementById('image_map_6').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Отлично! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function thessaly() {
    if (question_array[0] == question_thessaly && question_array[0] !== undefined) {
        flag_thessaly = false;
        document.getElementById('image_map_2').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Прекрасно! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};
function central_greece() {
    if (question_array[0] == question_central_greece && question_array[0] !== undefined) {
        flag_central_greece = false;
        document.getElementById('image_map').classList.remove("vis_0");
        question_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = "Прекрасно! " + question_array[0] + ". Ваш счёт: " + score;
        audio_great.play();
    }
    else if (question_array[0] == "Вы Выиграли. Поздравляем") {
        document.getElementById('question_text').innerHTML = "Вы Выиграли! Начните заново...";
        audio_winner.play();
        StartStop();
    }
    else {
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0] + ". Ваш счёт: " + score;
        audio_bad.play();
    }
};

function reload_game() {
    location.reload();
};

function aming_crete() {
    if(flag_crete == true) {
    document.getElementById('image_map_13').classList.remove("vis_0");
    }
};
function missing_crete() {
    if(flag_crete == true) {
    document.getElementById('image_map_13').classList.add("vis_0");
    }
};
function aming_attica() {
    if(flag_attica == true) {
    document.getElementById('image_map_8').classList.remove("vis_0");
    }
};
function missing_attica() {
    if(flag_attica == true) {
    document.getElementById('image_map_8').classList.add("vis_0");
    }
};
function aming_aegean_south_islands() {
    if(flag_aegean_south_islands == true) {
    document.getElementById('image_map_3').classList.remove("vis_0");
    }
};
function missing_aegean_south_islands() {
    if(flag_aegean_south_islands == true) {
    document.getElementById('image_map_3').classList.add("vis_0");
    }
};
function aming_aegean_nord_islands() {
    if(flag_aegean_nord_islands == true) {
    document.getElementById('image_map_12').classList.remove("vis_0");
    }
};
function missing_aegean_nord_islands() {
    if(flag_aegean_nord_islands == true) {
    document.getElementById('image_map_12').classList.add("vis_0");
    }
};
function aming_ams_of_the_holy_mountain() {
    if(flag_ams_of_the_holy_mountain == true) {
    document.getElementById('image_map_14').classList.remove("vis_0");
    }
};
function missing_ams_of_the_holy_mountain() {
    if(flag_ams_of_the_holy_mountain == true) {
    document.getElementById('image_map_14').classList.add("vis_0");
    }
};
function aming_epirus() {
    if(flag_epirus == true) {
    document.getElementById('image_map_10').classList.remove("vis_0");
    }
};
function missing_epirus() {
    if(flag_epirus == true) {
    document.getElementById('image_map_10').classList.add("vis_0");
    }
};
function aming_west_macedonia() {
    if(flag_west_macedonia == true) {
    document.getElementById('image_map_11').classList.remove("vis_0");
    }
};
function missing_west_macedonia() {
    if(flag_west_macedonia == true) {
    document.getElementById('image_map_11').classList.add("vis_0");
    }
};
function aming_central_macedonia() {
    if(flag_central_macedonia == true) {
    document.getElementById('image_map_5').classList.remove("vis_0");
    }
};
function missing_central_macedonia() {
    if(flag_central_macedonia == true) {
    document.getElementById('image_map_5').classList.add("vis_0");
    }
};
function aming_east_macedonia_and_thrace() {
    if(flag_east_macedonia_and_thrace == true) {
    document.getElementById('image_map_9').classList.remove("vis_0");
    }
};
function missing_east_macedonia_and_thrace() {
    if(flag_east_macedonia_and_thrace == true) {
    document.getElementById('image_map_9').classList.add("vis_0");
    }
};
function aming_ionian_islands() {
    if(flag_ionian_islands == true) {
    document.getElementById('image_map_7').classList.remove("vis_0");
    }
};
function missing_ionian_islands() {
    if(flag_ionian_islands == true) {
    document.getElementById('image_map_7').classList.add("vis_0");
    }
};
function aming_peloponnese() {
    if(flag_peloponnese == true) {
    document.getElementById('image_map_6').classList.remove("vis_0");
    }
};
function missing_peloponnese() {
    if(flag_peloponnese == true) {
    document.getElementById('image_map_6').classList.add("vis_0");
    }
};
function aming_west_greece() {
    if(flag_west_greece == true) {
    document.getElementById('image_map_4').classList.remove("vis_0");
    }
};
function missing_west_greece() {
    if(flag_west_greece == true) {
    document.getElementById('image_map_4').classList.add("vis_0");
    }
};
function aming_thessaly() {
    if(flag_thessaly == true) {
    document.getElementById('image_map_2').classList.remove("vis_0");
    }
};
function missing_thessaly() {
    if(flag_thessaly == true) {
    document.getElementById('image_map_2').classList.add("vis_0");
    }
};
function aming_central_greece() {
    if(flag_central_greece == true) {
    document.getElementById('image_map').classList.remove("vis_0");
    }
};
function missing_central_greece() {
    if(flag_central_greece == true) {
    document.getElementById('image_map').classList.add("vis_0");
    }
};

window.onload = () => {
  StartStop();
}

//объявляем переменные
var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var readout = '';
var h = 1,
  m = 1,
  tm = 1,
  s = 0,
  ts = 0,
  ms = 0,
  init = 0;

//функция для очистки поля
function ClearСlock() {
  clearTimeout(clocktimer);
  h = 1;
  m = 1;
  tm = 1;
  s = 0;
  ts = 0;
  ms = 0;
  init = 0;
  readout = '00:00:00';
  document.MyForm.stopwatch.value = readout;
}

//функция для старта секундомера
function StartTIME() {
  var cdateObj = new Date();
  var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
  if (t > 999) {
    s++;
  }
  if (s >= (m * base)) {
    ts = 0;
    m++;
  } else {
    ts = parseInt((ms / 100) + s);
    if (ts >= base) {
      ts = ts - ((m - 1) * base);
    }
  }
  if (m > (h * base)) {
    tm = 1;
    h++;
  } else {
    tm = parseInt((ms / 100) + m);
    if (tm >= base) {
      tm = tm - ((h - 1) * base);
    }
  }
  ms = Math.round(t / 10);
  if (ms > 99) {
    ms = 0;
  }
  if (ms == 0) {
    ms = '00';
  }
  if (ms > 0 && ms <= 9) {
    ms = '0' + ms;
  }
  if (ts > 0) {
    ds = ts;
    if (ts < 10) {
      ds = '0' + ts;
    }
  } else {
    ds = '00';
  }
  dm = tm - 1;
  if (dm > 0) {
    if (dm < 10) {
      dm = '0' + dm;
    }
  } else {
    dm = '00';
  }
  dh = h - 1;
  if (dh > 0) {
    if (dh < 10) {
      dh = '0' + dh;
    }
  } else {
    dh = '00';
  }
  readout = dh + ':' + dm + ':' + ds;
  document.MyForm.stopwatch.value = readout;
  clocktimer = setTimeout("StartTIME()", 1);
}

//Функция запуска и остановки
function StartStop() {
  if (init == 0) {
    ClearСlock();
    dateObj = new Date();
    StartTIME();
    init = 1;
  } else {
    clearTimeout(clocktimer);
    init = 0;
  }
}
