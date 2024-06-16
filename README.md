# RU

# Как скомпилировать в оригинальные .json файлы игры?

Воспользуйтесь инструментами из репозитория https://github.com/savannstm/fh-termina-json-writer.

# Строение репозитория

## Директория translation

В этой директории хранятся файлы локализации в формате .txt. Если вы хотите что-то изменить - вы должны отредактировать именно их, а затем записать используя бинарные CLI файлы, либо скомпилировать используя программу с графическим интерфейсом.

### Директория maps

В этой директории хранится игровой текст из файлов Maps.json.
В файлах без префикса \_trans находится оригинальный текст игры (его лучше не редактировать), а в файлах C этим префиксом лежит переведенный текст, который вы можете отредактировать.

### Директория other

В этой директории хранится игровой текст НЕ из файлов Maps.json.
В файлах без префикса \_trans находится оригинальный текст игры (его лучше не редактировать), а в файлах C этим префиксом лежит переведенный текст, который вы можете отредактировать.

### Директория plugins

В этой директории хранится игровой текст из файла plugins.js.
В файлах без префикса \_trans находится оригинальный текст игры (его лучше не редактировать), а в файлах C этим префиксом лежит переведенный текст, который вы можете отредактировать.

## Директория original

В этой директории хранится копия оригинальных файлов игры, но с некоторыми изменениями.
