# Moduły JavaScript

> **_Każde zadanie powinno znajdować się w osobnym katalogu: zadanie1, zadanie2, itd. Stosuj nazwy plików oraz funkcji, które są podane w treści zadania._**

## Ćwiczenia z modułami CommonJS

### Ćwiczenie 1: Tworzenie prostego kalkulatora

1. Stwórz plik `calculator.js`, w którym zaimplementujesz funkcje:

- `add(a, b)` – dodawanie,
- `subtract(a, b)` – odejmowanie,
- `multiply(a, b)` – mnożenie,
- `divide(a, b)` – dzielenie.

Eksportuj wszystkie funkcje za pomocą `module.exports`.

W pliku `app.js` zaimportuj funkcje z `calculator.js` i przetestuj je na kilku przykładach.

### Ćwiczenie 2: Licznik stanu aplikacji

1. Stwórz plik `counter.js`, który będzie przechowywał wartość `count` (początkowo 0).
2. Dodaj funkcje:

- `increment()` – zwiększa wartość count o 1,
- `decrement()` – zmniejsza wartość count o 1,
- `getCount()` – zwraca aktualną wartość count,
- `resetCount()` - resetuje wartość count.

Eksportuj funkcje za pomocą `module.exports`.

W pliku `app.js` zaimportuj `counter.js` i wykonaj serię operacji (np. 2 razy zwiększ licznik, raz zmniejsz, a potem odczytaj wartość).

### Ćwiczenie 3: Operacje na tekście

1. Stwórz plik `textUtils.js`, który zawiera funkcje:

- `capitalize(str)` – zamienia pierwszą literę w ciągu na wielką,
- `toUpperCase(str)` – zamienia cały tekst na wielkie litery,
- `toLowerCase(str)` – zamienia cały tekst na małe litery.

Eksportuj funkcje za pomocą `exports`.

W pliku `app.js` zaimportuj `textUtils.js` i przetestuj każdą funkcję.
