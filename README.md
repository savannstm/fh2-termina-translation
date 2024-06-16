# RU

# Строение репозитория

## Как скомпилировать в оригинальные .json файлы игры?

Воспользуйтесь инструментами из репозитория https://github.com/savannstm/fh-termina-json-writer.

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

# EN

## How to compile to the original .json game files?

Use the tools from the https://github.com/savannstm/fh-termina-json-writer repository.

## translation Directory

This directory contains translation files with .txt extension. If you want to edit the translation - you need to edit exactly them, and then compile them using CLI binary, or compile with the GUI.

### maps Directory

This directory contains in-game text from Maps.json files.
Files without \_trans prefix contain original game translation (it's better to not to mess with them), and files WITH that prefix contain translated text, which you can freely edit.

### other Directory

This directory contains in-game text NOT from Maps.json files.
Files without \_trans prefix contain original game translation (it's better to not to mess with them), and files WITH that prefix contain translated text, which you can freely edit.

### plugins Directory

This directory contains in-game text from plugins.js file.
Files without \_trans prefix contain original game translation (it's better to not to mess with them), and files WITH that prefix contain translated text, which you can freely edit.

## original Directory

This directory contains a copy of original game files, but with some changes.
