$( function() {
            $('form').submit(function() {
                $("#menu-burger__header").click();
                return false;
            });
        });

var title       = [];
var description = [];
var address     = [];
var sum         = 82;

title[1]       = 'Изменение ударения при спряжении существительных. Родительный падеж. Винительный падеж.';
description[1] = 'Изменение ударения при спряжении существительных в Греческом языке.';
address[1]     = 'accentsonnounsdeclension.html';

title[2]       = 'Прилагательные. Склонение прилагательных. Окончение -ος, -υς, -ης, -η, -α, -ια, -ο, -υ, ι, -ικο, -ες. Родительный падеж. Винительный падеж.';
description[2] = 'Склонение прилагательных в Греческом языке.';
address[2]     = 'adjectivesdeclension.html';

title[3]       = 'Зависимое наклонение несовершенного, совершенного вида и глаголы перфектной формы.';
description[3] = 'Зависимое наклонение глаголов в греческом языке.';
address[3]     = 'dependent_mood.html';

title[4]       = 'Грамматика. Части речи.';
description[4] = 'Грамматика Греческого языка.';
address[4]     = 'grammar.html';

title[5]       = 'Повелительное наклонение несовершенного и совершенного вида. Неправильные глаголы. Отрицательная форма повелительного наклонения.';
description[5] = 'Повелительное наклонение глаголов в греческом языке.';
address[5]     = 'imperative_mood.html';

title[6]       = 'Существительные. Имя существительное. Род, число, склонение. Родительный падеж. Винительный падеж.';
description[6] = 'Существительные в Греческом языке.';
address[6]     = 'nouns.html';

title[7]       = 'Существительные. Cклонение существительных. Женский род. Окончание -η, -α. Родительный падеж. Винительный падеж.';
description[7] = 'Cклонение существительных Женского рода в Греческом языке.';
address[7]     = 'nounsdeclension_f.html';

title[8]       = 'Существительные. Cклонение существительных. Мужской род. Окончание -ος, -ης, -ας. Родительный падеж. Винительный падеж.';
description[8] = 'Cклонение существительных Мужского рода в Греческом языке.';
address[8]     = 'nounsdeclension_m.html';

title[9]       = 'Существительные. Cклонение существительных. Средний род. Окончание -ο, -ι, -μα, -υ. Родительный падеж. Винительный падеж.';
description[9] = 'Cклонение существительных Среднего рода в Греческом языке.';
address[9]     = 'nounsdeclension_n.html';

title[10]       = 'Глаголы. Прошедшее длительное время. Παρατατικός. Спряжение глаголов.';
description[10] = 'Прошедшее длительное время Глаголов в греческом языке.';
address[10]     = 'time_pastimperfect.html';

title[11]       = 'Глаголы. Прошедшее простое время. Αόριστος. Спряжение глаголов. Аорист.';
description[11] = 'Прошедшее простое время Глаголов в греческом языке.';
address[11]     = 'time_pastsimple.html';

title[12]       = 'Глаголы. Настоящее время. Спряжение глаголов.';
description[12] = 'Настоящее время Глаголов в греческом языке.';
address[12]     = 'time_present.html';

title[13]       = 'Глаголы. Будущее время. Спряжение глаголов инфекта. Будущее простое совершенное и несовершенное время.';
description[13] = 'Будущие времена Инфекта в греческом языке.';
address[13]     = 'times_futureinfect.html';

title[14]       = 'Глаголы. Настоящее, прошедшее и будущее время. Спряжение глаголов перфекта. Прошедшее сложное совершенное время. Предпрошедшее время. Будущее сложное совершенное время.';
description[14] = 'Перфектная группа времён Глаголов в греческом языке.';
address[14]     = 'times_perfect.html';

title[15]       = 'Глаголы. Время, наклонение. Пассивный и активный залог глаголов. Особые Формы Глагола.';
description[15] = 'Глаголы в греческом языке.';
address[15]     = 'verbs.html';

title[16]       = 'Лексика. Слова по темам. Фразы. Существительные, прилагательные, глаголы, наречия. Части речи.';
description[16] = 'Лексика Греческого языка.';
address[16]     = 'vocabulary.html';

title[17]       = 'Лексика. Слова по темам. Прилагательные, антонимы.';
description[17] = 'Лексика. Прилагательные, антонимы.';
address[17]     = 'vocabulary_adjectives_antonims.html';

title[18]       = 'Лексика. Слова по темам. Прилагательные. Окончение -ης, -α, -ικο.';
description[18] = 'Лексика. Прилагательные -ης, -α, -ικο.';
address[18]     = 'vocabulary_adjectives_hs_a_iko.html';

title[19]       = 'Лексика. Слова по темам. Прилагательные. Окончение -ης, -ης, -ες.';
description[19] = 'Лексика. Прилагательные -ης, -ης, -ες.';
address[19]     = 'vocabulary_adjectives_hs_hs_es.html';

title[20]       = 'Лексика. Слова по темам. Прилагательные. Окончение -ης, -ια, -ι.';
description[20] = 'Лексика. Прилагательные -ης, -ια, -ι.';
address[20]     = 'vocabulary_adjectives_hs_ia_i.html';

title[21]       = 'Лексика. Слова по темам. Прилагательные. Окончение -ος, -α, -ο.';
description[21] = 'Лексика. Прилагательные -ος, -α, -ο.';
address[21]     = 'vocabulary_adjectives_os_a_o.html';

title[22]       = 'Лексика. Слова по темам. Прилагательные. Окончение -ος, -η, -ο.';
description[22] = 'Лексика. Прилагательные -ος, -η, -ο.';
address[22]     = 'vocabulary_adjectives_os_h_o.html';

title[23]       = 'Лексика. Слова по темам. Существительные, профессии, работа.';
description[23] = 'Лексика. Существительные. Профессии.';
address[23]     = 'vocabulary_nouns_professions.html';

title[24]       = 'Лексика. Слова по темам. Существительные, спорт, футбол.';
description[24] = 'Лексика. Существительные. Спорт.';
address[24]     = 'vocabulary_nouns_sport.html';

title[25]       = 'Лексика. Слова по темам. Прилагательные. Окончение -υς, -ια, -ι.';
description[25] = 'Лексика. Прилагательные -υς, -ια, -ι.';
address[25]     = 'vocabulary_adjectives_us_ia_u.html';

title[26]       = 'Лексика. Слова по темам. Наречия. Топ-100 наречий.';
description[26] = 'Лексика. Наречия. Топ-100';
address[26]     = 'vocabulary_adverbs_top.html';

title[27]       = 'Лексика. Слова по темам. Глаголы. Топ-250 глаголов.';
description[27] = 'Лексика. Глаголы. Топ-250';
address[27]     = 'vocabulary_verbs_top.html';

title[28]       = 'Лексика. Слова по темам. Глаголы. Депонентные, пассивные глаголы.';
description[28] = 'Лексика. Глаголы. Пассивные глаголы.';
address[28]     = 'vocabulary_verbs_passive.html';

title[29]       = 'Лексика. Фразы по темам, аэропорт. Существительные, глаголы, прилагательные, наречия.';
description[29] = 'Лексика. Фразы. В Аэропорту.';
address[29]     = 'vocabulary_frases_at_the_airport.html';

title[30]       = 'Лексика. Фразы по темам, магазин. Супермаркет. Существительные, глаголы, прилагательные, наречия.';
description[30] = 'Лексика. Фразы. В Магазине.';
address[30]     = 'vocabulary_frases_at_the_shop.html';

title[31]       = 'Лексика. Фразы по темам, встреча, приветствия, прощания. Существительные, глаголы, прилагательные, наречия.';
description[31] = 'Лексика. Фразы. Встреча.';
address[31]     = 'vocabulary_frases_meeting.html';

title[32]       = 'Лексика. Слова по темам. Существительные, город, улица, экстерьер.';
description[32] = 'Лексика. Существительные. Город.';
address[32]     = 'vocabulary_nouns_city.html';

title[33]       = 'Лексика. Слова по темам. Существительные, одежда.';
description[33] = 'Лексика. Существительные. Одежда.';
address[33]     = 'vocabulary_nouns_clothes.html';

title[34]       = 'Лексика. Слова по темам. Существительные, земля, планета, космос.';
description[34] = 'Лексика. Существительные. Земля.';
address[34]     = 'vocabulary_nouns_earth.html';

title[35]       = 'Лексика. Слова по темам. Существительные, семья, родственники, окружение.';
description[35] = 'Лексика. Существительные. Семья.';
address[35]     = 'vocabulary_nouns_family.html';

title[36]       = 'Лексика. Слова по темам. Существительные, фауна, животные.';
description[36] = 'Лексика. Существительные. Фауна.';
address[36]     = 'vocabulary_nouns_fauna.html';

title[37]       = 'Лексика. Слова по темам. Существительные, флора, растения, грибы.';
description[37] = 'Лексика. Существительные. Флора.';
address[37]     = 'vocabulary_nouns_flora.html';

title[38]       = 'Лексика. Слова по темам. Существительные, пища, еда, питание, продукты.';
description[38] = 'Лексика. Существительные. Пища.';
address[38]     = 'vocabulary_nouns_food.html';

title[39]       = 'Лексика. Слова по темам. Существительные, дом, интерьер, комната, кухня.';
description[39] = 'Лексика. Существительные. Дом.';
address[39]     = 'vocabulary_nouns_house.html';

title[40]       = 'Лексика. Слова по темам. Существительные, человек, люди, окружение, анатомия.';
description[40] = 'Лексика. Существительные. Человек.';
address[40]     = 'vocabulary_nouns_human.html';

title[41]       = 'Фонетика греческого языка. Звуки, буквы, алфавит, произношение, транскрипция.';
description[41] = 'Фонетика греческого языка.';
address[41]     = 'phonetics.html';

title[42]       = 'Песни на греческом языке. Музыка, рок, поп, фолк.';
description[42] = 'Песни на греческом языке.';
address[42]     = 'songs.html';

title[43]       = 'Песни на греческом языке. Музыка, поп-музыка. Antique. Δυνατά δυνατά.';
description[43] = 'Песни на греческом языке.';
address[43]     = 'song_dinata_dinata.html';

title[44]       = 'Песни на греческом языке. Музыка, поп-музыка. Γιάννης Κότσιρας. Κοίτα Γύρω.';
description[44] = 'Песни на греческом языке.';
address[44]     = 'song_koita_yiro.html';

title[45]       = 'Песни на греческом языке. Музыка, рок-музыка. Βασίλης Παπακωνσταντίνου. Όλα από χέρι καμένα.';
description[45] = 'Песни на греческом языке.';
address[45]     = 'song_ola_apo_heri.html';

title[46]       = 'Песни на греческом языке. Музыка, поп-музыка. Antique. Ώπα ώπα.';
description[46] = 'Песни на греческом языке.';
address[46]     = 'song_opa_opa.html';

title[47]       = 'Песни на греческом языке. Музыка, рок-музыка. Βασίλης Παπακωνσταντίνου. Δεν έχω άλλη υπομονή.';
description[47] = 'Песни на греческом языке.';
address[47]     = 'song_then_eho.html';

title[48]       = 'Песни на греческом языке. Музыка, рок-музыка. Βασίλης Παπακωνσταντίνου. Το παιχνίδι παίζεται.';
description[48] = 'Песни на греческом языке.';
address[48]     = 'song_to_paixnidi_paizetai_akoma.html';

title[49]       = 'Песни на греческом языке. Музыка, рок-музыка. Rotting Christ. Του Θάνατου.';
description[49] = 'Песни на греческом языке.';
address[49]     = 'song_tou_thanatou.html';

title[50]       = 'Библиотека. Учебники, проза, поэзия, рецепты, диалоги, детективы, сказки, романы, рассказы, книги, словари на греческом языке.';
description[50] = 'Книги на греческом языке.';
address[50]     = 'library.html';

title[51]       = 'Библиотека. Υπόθεση γλώσσα. Прилагательные греческого языка. Учебники, книги, словари на греческом языке. Лексика, грамматика.';
description[51] = 'Книги на греческом языке.';
address[51]     = 'librery_book_case_language_adjectives.html';

title[52]       = 'Библиотека. Υπόθεση γλώσσα. Существительные греческого языка. Учебники, книги, словари на греческом языке. Лексика, грамматика.';
description[52] = 'Книги на греческом языке.';
address[52]     = 'librery_book_case_language_nouns.html';

title[53]       = 'Библиотека. Υπόθεση γλώσσα. Прошедшее время. Глаголы греческого языка. Аорист. Учебники, книги, словари на греческом языке. Лексика, грамматика.';
description[53] = 'Книги на греческом языке.';
address[53]     = 'librery_book_case_language_past_part2.html';

title[54]       = 'Библиотека. Υπόθεση γλώσσα. Настоящее время глаголов греческого языка. Учебники, книги, словари на греческом языке. Лексика, грамматика.';
description[54] = 'Книги на греческом языке.';
address[54]     = 'librery_book_case_language_present.html';

title[55]       = 'Библиотека. Υπόθεση γλώσσα. Местоимения греческого языка. Учебники, книги, словари на греческом языке. Лексика, грамматика.';
description[55] = 'Книги на греческом языке.';
address[55]     = 'librery_book_case_language_pronouns.html';

title[56]       = 'Библиотека. Русско-греческий тематический словарь. Учебники, книги, словари на греческом языке. Лексика.';
description[56] = 'Книги на греческом языке.';
address[56]     = 'librery_book_russian_greek_thematic_dictionary.html';

title[57]       = 'Библиотека. Антон Чехов. Кривое зеркало. Книги в параллельном переводе. Проза на греческом языке.';
description[57] = 'Книги на греческом языке.';
address[57]     = 'librery_book_crooked_mirror.html';

title[58]       = 'Библиотека. Братья Гримм - Бременские музыканты. Книги, сказки. Проза на греческом языке.';
description[58] = 'Книги на греческом языке.';
address[58]     = 'librery_book_grimm_bremen_town_musicians.html';

title[59]       = 'Библиотека. Братья Гримм - Живая вода. Книги, сказки. Проза на греческом языке.';
description[59] = 'Книги на греческом языке.';
address[59]     = 'librery_book_grimm_living_water.html';

title[60]       = 'Библиотека. Братья Гримм - Чёрт с тремя золотыми волосами. Книги, сказки. Проза на греческом языке.';
description[60] = 'Книги на греческом языке.';
address[60]     = 'librery_book_grimm_devil_with_three_hair.html';

title[61]       = 'Библиотека. Камилла Лэкберг - Ледяная принцесса. Книги в параллельном переводе. Проза на греческом языке.';
description[61] = 'Книги на греческом языке.';
address[61]     = 'librery_book_ice_princess.html';

title[62]       = 'Библиотека. Николай Гоголь - Ночь перед Рождеством. Книги в параллельном переводе. Проза на греческом языке.';
description[62] = 'Книги на греческом языке.';
address[62]     = 'librery_book_night_before_christmass.html';

title[63]       = 'Библиотека. Гастон Леру - Призрак оперы. Книги в параллельном переводе. Проза на греческом языке.';
description[63] = 'Книги на греческом языке.';
address[63]     = 'librery_book_the_phantom_of_the_opera.html';

title[64]       = 'Библиотека. Κική Δημουλά. Книги, поэзия. Стихи на греческом языке.';
description[64] = 'Книги на греческом языке.';
address[64]     = 'librery_poem_dimula.html';

title[65]       = 'Библиотека. Κωνσταντίνος Καβάφης. Книги, поэзия. Стихи на греческом языке.';
description[65] = 'Книги на греческом языке.';
address[65]     = 'librery_poem_kavafis.html';

title[66]       = 'Библиотека. Γιώργος Σεφέρης. Книги, поэзия. Стихи на греческом языке.';
description[66] = 'Книги на греческом языке.';
address[66]     = 'librery_poem_seferis.html';

title[67]       = 'Библиотека. Κώστας Ουράνης. Книги, поэзия. Стихи на греческом языке.';
description[67] = 'Книги на греческом языке.';
address[67]     = 'librery_poem_uranis.html';

title[68]       = 'Библиотека. Суп Гаспачо (Γκασπάτσο). Рецепты на греческом языке.';
description[68] = 'Рецепты на греческом языке.';
address[68]     = 'librery_recipes_gkaspatso.html';

title[69]       = 'Библиотека. Грибной суп (Μανιταρόσουπα). Рецепты на греческом языке.';
description[69] = 'Рецепты на греческом языке.';
address[69]     = 'librery_recipes_manitarosoypa.html';

title[70]       = 'Библиотека. Суп Минестроне (Μινεστρόνε). Рецепты на греческом языке.';
description[70] = 'Рецепты на греческом языке.';
address[70]     = 'librery_recipes_minestrone.html';

title[71]       = 'Библиотека. Суп Велюте (Ρεβιθόσουπα βελουτέ). Рецепты на греческом языке.';
description[71] = 'Рецепты на греческом языке.';
address[71]     = 'librery_recipes_revithosupa.html';

title[72]       = 'Библиотека. Долмадакья (Ντολμαδάκια γιαλαντζί). Голубцы в виноградном листе. Рецепты на греческом языке.';
description[72] = 'Рецепты на греческом языке.';
address[72]     = 'librery_recipes_ntolmadakia.html';

title[73]       = 'Библиотека. Равиоли (Ραβιόλια). Макароны с сыром. Рецепты на греческом языке.';
description[73] = 'Рецепты на греческом языке.';
address[73]     = 'librery_recipes_raviolia.html';

title[74]       = 'Библиотека. Курица в горшочке (Κοτόπουλο στη γάστρα). Рецепты на греческом языке.';
description[74] = 'Рецепты на греческом языке.';
address[74]     = 'librery_recipes_kotopoulo_sti_gastra.html';

title[75]       = 'Библиотека. Лосось с зеленью (Σολομός με βότανα). Рыба. Рецепты на греческом языке.';
description[75] = 'Рецепты на греческом языке.';
address[75]     = 'librery_recipes_solomos.html';

title[76]       = 'Библиотека. Лазанья с сыром моцарелла (Λαζάνια με μοτσαρέλα). Рецепты на греческом языке.';
description[76] = 'Рецепты на греческом языке.';
address[76]     = 'librery_recipes_lazania_me_motsarela.html';

title[77]       = 'Библиотека. Греческий салат (Σαλάτα χωριάτικη). Рецепты на греческом языке.';
description[77] = 'Рецепты на греческом языке.';
address[77]     = 'librery_recipes_horiatiki_salata.html';

title[78]       = 'Библиотека. Русский салат (Ρώσικη σαλάτα). Оливье. Рецепты на греческом языке.';
description[78] = 'Рецепты на греческом языке.';
address[78]     = 'librery_recipes_rwsiki_salata.html';

title[79]       = 'Библиотека. Картофельный салат (Πατατοσαλάτα με ελιές). Рецепты на греческом языке.';
description[79] = 'Рецепты на греческом языке.';
address[79]     = 'librery_recipes_patatosalata.html';

title[80]       = 'Библиотека. Фондю (Φοντύ σοκολάτας). Десерты. Рецепты на греческом языке.';
description[80] = 'Рецепты на греческом языке.';
address[80]     = 'librery_recipes_rwsiki_salata.html';

title[81]       = 'Библиотека. Апельсиновый торт (Κεικ πορτοκάλι). Десерты. Рецепты на греческом языке.';
description[81] = 'Рецепты на греческом языке.';
address[81]     = 'librery_recipes_keik_portokali.html';

title[82]       = 'Библиотека. Клубничное мороженое (Παγωτό φράουλα). Десерты. Рецепты на греческом языке.';
description[82] = 'Рецепты на греческом языке.';
address[82]     = 'librery_recipes_pagwto_fraoula.html';

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
            return false;
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
    MsgBox.document.write('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><title>Результат поиска слова: ' + Item + '</title></head><body>');

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
