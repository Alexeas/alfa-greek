$( function() {
            $('form').submit(function() {
                $("#menu-burger__header").click();
                return false;
            });
        });

var title       = [];
var description = [];
var address     = [];
var sum         = 15;

title[1]       = 'Изменение ударения при спряжении существительных. Родительный падеж. Винительный падеж.';
description[1] = 'Изменение ударения при спряжении существительных в Греческом языке.';
address[1]     = '../grammar/accentsonnounsdeclension.html';

title[2]       = 'Прилагательные. Склонение прилагательных. Окончение -ος, -υς, -ης, -η, -α, -ια, -ο, -υ, ι, -ικο, -ες. Родительный падеж. Винительный падеж.';
description[2] = 'Склонение прилагательных в Греческом языке.';
address[2]     = '../grammar/adjectivesdeclension.html';

title[3]       = 'Зависимое наклонение несовершенного, совершенного вида и глаголы перфектной формы.';
description[3] = 'Зависимое наклонение глаголов в греческом языке.';
address[3]     = '../grammar/dependent_mood.html';

title[4]       = 'Грамматика. Части речи.';
description[4] = 'Грамматика Греческого языка.';
address[4]     = '../grammar/grammar.html';

title[5]       = 'Повелительное наклонение несовершенного и совершенного вида. Неправильные глаголы. Отрицательная форма повелительного наклонения.';
description[5] = 'Повелительное наклонение глаголов в греческом языке.';
address[5]     = '../grammar/imperative_mood.html';

title[6]       = 'Существительные. Имя существительное. Род, число, склонение. Родительный падеж. Винительный падеж.';
description[6] = 'Существительные в Греческом языке.';
address[6]     = '../grammar/nouns.html';

title[7]       = 'Существительные. Cклонение существительных. Женский род. Окончание -η, -α. Родительный падеж. Винительный падеж.';
description[7] = 'Cклонение существительных Женского рода в Греческом языке.';
address[7]     = '../grammar/nounsdeclension_f.html';

title[8]       = 'Существительные. Cклонение существительных. Мужской род. Окончание -ος, -ης, -ας. Родительный падеж. Винительный падеж.';
description[8] = 'Cклонение существительных Мужского рода в Греческом языке.';
address[8]     = '../grammar/nounsdeclension_m.html';

title[9]       = 'Существительные. Cклонение существительных. Средний род. Окончание -ο, -ι, -μα, -υ. Родительный падеж. Винительный падеж.';
description[9] = 'Cклонение существительных Среднего рода в Греческом языке.';
address[9]     = '../grammar/nounsdeclension_n.html';

title[10]       = 'Глаголы. Прошедшее длительное время. Παρατατικός. Спряжение глаголов.';
description[10] = 'Прошедшее длительное время Глаголов в греческом языке.';
address[10]     = '../grammar/time_pastimperfect.html';

title[11]       = 'Глаголы. Прошедшее простое время. Αόριστος. Спряжение глаголов. Аорист.';
description[11] = 'Прошедшее простое время Глаголов в греческом языке.';
address[11]     = '../grammar/time_pastsimple.html';

title[12]       = 'Глаголы. Настоящее время. Спряжение глаголов.';
description[12] = 'Настоящее время Глаголов в греческом языке.';
address[12]     = '../grammar/time_present.html';

title[13]       = 'Глаголы. Будущее время. Спряжение глаголов инфекта. Будущее простое совершенное и несовершенное время.';
description[13] = 'Будущие времена Инфекта в греческом языке.';
address[13]     = '../grammar/times_futureinfect.html';

title[14]       = 'Глаголы. Настоящее, прошедшее и будущее время. Спряжение глаголов перфекта. Прошедшее сложное совершенное время. Предпрошедшее время. Будущее сложное совершенное время.';
description[14] = 'Перфектная группа времён Глаголов в греческом языке.';
address[14]     = '../grammar/times_perfect.html';

title[15]       = 'Глаголы. Время, наклонение. Пассивный и активный залог глаголов. Особые Формы Глагола.';
description[15] = 'Глаголы в греческом языке.';
address[15]     = '../grammar/verbs.html';

function contains(sub, s) {
    var strlen1 = sub.length;
    var strlen2 = s.length;
    var istrue  = false;
    for(var i = 0; i <= strlen2; i++) {
        comp = s.substring(i - 1, strlen2);
        comp = comp.substring(0, strlen1);
        if(comp == sub) {
            istrue = true;
            break;
        }
    }

    return istrue;
}

function dolt() {
    var loopCount = 0;
    var Found     = false;
    var Item      = document.forms[0].sub.value.toLowerCase();

    var stats ='toolbar = no, location = no, scrollbars = yes, directories = no, status = yes, menubar = no, scrollbars = yes, resizable = yes, height = 500, width = 790, top = 20, left = 20';

    MsgBox = window.open('', 'msgWindow', stats);
    MsgBox.opener      = window;
    MsgBox.opener.name = 'opener';
    MsgBox.document.write('<!DOCTYPE html><html><head><title>Результат поиска слова: ' + Item + '</title></head><body>');

    if (document.finding.sub.value == '') {
        MsgBox.document.write('<h5><font face="Arial">Список всех ссылок:<hr></h5></font>');
    }
    else {
        MsgBox.document.write('<h5><font face="Arial">Результаты поиска слова: "' + Item + '":<hr></h5></font>');
    }

    for (var i = 1; i <= sum; i++) {
        contains(Item, title[i].toLowerCase());
        if (comp == Item) {
            loopCount++;
            Found = true;

            MsgBox.document.write('<div align="center"><table border="0" width="740" cellpadding="8"><tr><td width="2%" align="center"><font face="Arial" size="2">' + loopCount + '.</font></td><td width="98%" height="18" align="left"><font face="Arial" size="2"><a href="' + address[i] + '" target="_blank"><strong>' + title[i] + '</strong></a></font><br /><font face="Arial" size="2">' + description[i] + '<br /><i>Адрес страницы: ' + address[i] + '</i></font></td></tr></table></div>');
            MsgBox.document.write('<script type="text/javascript">window.status=(' + loopCount + ')</script>');
        }
    }

    if (!Found) {
        MsgBox.document.write('<font face="Arial">Совпадений не найдено.</font>');
    }

    MsgBox.document.write('<hr><font face="Arial">Поиск по сайту Alfa-Greek.ru</font></body></html>');
    if (loopCount == 0) {
        MsgBox.document.write('<script type="text/javascript">window.status=(0)</script>');
    }
}
