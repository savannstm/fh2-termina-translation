# Русская локализация Fear & Hunger 2: Termina

## Как скомпилировать в .json файлы игры?

Воспользуйтесь [инструментом для командной строки](https://github.com/savannstm/rvpacker-json-txt), либо [графическим интерфейсом](https://github.com/savannstm/rpgm-translation-gui).

Для компиляции вам понадобятся непосредственно сами оригинальные файлы игры. Вы должны создать папку original рядом с папкой translation, и поместить туда все игровые .json файлы.

Вы можете взять оригинальные .json файлы игры по пути Fear & Hunger 2 Termina/www/data. Вы также можете использовать любые модифицированные .json файлы, до тех пор пока они НЕ меняют текст игры. Т. е. моды, меняющие только техническую часть игры, например багфиксы.

## Строение репозитория

### Директория img

В подпапках этой директории хранятся .psd файлы с переведёнными картинками игры. Вы можете открыть их в любом подходящем приложении (Photoshop, Krita), и распоряжаться ими на своё личное усмотрение.

### Директория translation

В этой директории хранятся файлы локализации в формате .txt.
Изменение строк перевода должно производится в файлах с постфиксом \_trans.

#### Директория maps

В этой директории хранится игровой текст из файлов Map`xxx`.json.

#### Директория other

В этой директории хранится игровой текст из прочих .json файлов.

#### Директория plugins

В этой директории хранится игровой текст из файла plugins.js.

## Тонкости

В тексте вы можете встретить множество различных escape-последовательностей - выделим уникальные для этого репозитория.

`\#` означает перенос линии. Самоисчёрпывающее описание.

`\x[a|b]` - эта последовательность будет полностью заменена либо на `a` (если главный герой мужского пола), либо на `b` (если главный герой мужского пола) во время отображения сообщений.

`\dX[a|b|c]` - X в этой последовательности означает любое число, отсылающее к ID некой переменной. Эта последовательность будет полностью заменена на `a` (если значение переменной равно числу один), `b` (например, если значение переменной равно числу 2-4), `c` (например, если значение переменной равно 5-9). Например: 1 чай, 2 чая, 5 чаёв. Вставляйте необходимые склонения в зависимости от числа.

`\ps[a||b(||c)]` - эта последовательность будет полностью заменена на `a`, если кол-во членов группы (исключая гулей и козла) равно двум, на `b` если кол-во членов группы выше двух, и опционально на `c` (если `c` присутствует) если в группе только главный герой.

Прочие escape-последовательности являются частью Yanfly Message Core, и подробно описаны [здесь](<http://www.yanfly.moe/wiki/Message_Core_(YEP)>).

## Лицензия

Репозиторий лицензирован под [WTFPL](http://www.wtfpl.net/).
Это означает, что вы можете безнаказанно использовать и модифицировать перевод в каком угодно виде. Вы можете делать всё, что захотите.
