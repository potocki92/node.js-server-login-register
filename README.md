## About Node.js-server-login-register

Jest to formularz rejestracyjny / logujący postawiony na Node.js. Baza danych zapisywana oraz pobierana jest z MongoDB.
Aby formularz zadziałał należy zainstalować na kamputerze LTS-wersja [Node.js](https://nodejs.org/en/)

## Przed rozpoczęciem pracy

Jeden raz na projekt zainstalować wszystkie zalezności.

```shell
npm ci
```

### Deploy

Musimy w pliku `package.json` zmienić pole `homepage`, zmieniając `nazwe_uzytkownika` i `nazwe_repozytorium` na swoje.

```json
"homepage": "https://nazwa_uzytkownika.github.io/nazwa_repozytorium",
```

## Pliki i folderzy

- Wszystkie partials plików styłów powinny być w folderze `/sass` i importować się w
  `/sass/main.scss`
- Pliki `ejs` zapisujemy do folderu `views`. EJS to prosty język szablonów, który pozwala generować znaczniki HTML za pomocą zwykłego JavaScript.

## Podłaczenie bazy danych z MongoDB

`!Jako pierwsze należy podłączyć swoje konto bazy danych z MongoDB!`

- Baza danych pobierana jest z [MongoDB](https://account.mongodb.com). W pliku `keys.js` zmieniamy wartości zmiennych `USERNAME_FROM_MONGODB`,`PASSWORD_FROM_MONGODB` oraz `CLUSTER_NAME_FROM_MONGODB` na swoje z konta, które utworzyliśmy.

`USERNAME_FROM_MONGODB` - nazwa użytkowanika, którą utworzyliśmy w "SECURITY" -> "Database Access"
`PASSWORD_FROM_MONGODB` - hasło nadane do użytkownika w "Database Access" (Ważne: Nie dodajemy hasła z głównego konta Atlasa)

`CLUSTER_NAME_FROM_MONGODB`- nazwa clusteru w "Database Deployments"

## Schema

- w `user-model.js` znajduje się model, który jest wykorzystywany do tworzenia nowych użytkowników podczas rejestrowania. Znajdują się w niej `firstname`, `lastname`, `username` oraz `password`. Podczas prawidłowej rejestracji nowy użytkownik zostaje zapisany do bazy o nazwie "Users".
  Wedle uznania dodajemy, zmieniamy lub usuwamy zmienne z "userDataSchema" oraz zmieniamy nazwę bazy, gdzie ma się ona zapisać. Wystarczy zmienić nazwę "Users" w "collection" oraz na końcu modelu w "UserData".

## Login / Register

- W folderze views znajdują się pliki `login.ejs` oraz `register.ejs`. Są to pliki z tagami html, które zostały utworzone jako wzór do rejestrowania oraz logowania.
- W partials znajduje się plik `head.ejs`. Dodajemy go do każdego, nowo utworzonego .ejs. W nim znajdują się linki z 'modern-normalize' oraz 'main.min.css'.
- messages.ejs służy do wyświetlania błędów podczas złej rejestracji oraz logowania.

## SASS

- w folderze sass znajduje się plik `main.scss`, do którego importujemy wszystkie inne pliki scss.

### Praca

Włączyć tryp pracy.

```shell
npm run dev
```

W przeglądarce przejść na [http://localhost:3000](http://localhost:3000).
