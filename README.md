# ✅ Simple Todo-App: 

👣 Schritt-für-Schritt Tutorial

## Lernziele
- Grundlagen JS praktisch anwenden.
- DOM-Manipulation mit JavaScript
- Event-Handling verstehen
- Arbeiten mit Arrays und Objekten
- Lokale Datenverwaltung im Browser
- Vorbereitung für Backend-Integration

---

## Teil 1: Grundgerüst (HTML & CSS)

> [!Note]
> Falls Sie dieses repo geklont haben existieren die beiden Dateien schon und müssen nicht erstellt werden.


### Schritt 1.1: HTML-Struktur erstellen

Erstelle eine [`index.html`](./index.html) mit entsprechendem Inhalt.

### Schritt 1.2: Minimales CSS

Erstelle eine [`style.css`](./style.css) mit dem entsprechendem Inhalt: 

### Aufgaben

- Machen Sie sich mit dem Inhalt der beiden Dateien vertraut. 
- Klären Sie falls Ihnen etwas unbekannt vorkommt.

**Verständnisfragen:**
1. Welche drei Dateien brauchen wir für eine Webanwendung und wofür ist jede zuständig?
2. Warum verwenden wir `id`-Attribute in HTML?
3. Was bewirkt `flex: 1` im CSS für das Input-Feld?

---

## Teil 2: JavaScript Grundlagen

### Schritt 2.1: DOM-Elemente auswählen

Erstelle eine Datei mit dem Namen `app.js` und beginne mit dem Zugriff auf HTML-Elemente:

```javascript
// DOM-Elemente auswählen
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
```

**Erklärung:**
- `document.getElementById()` gibt uns Zugriff auf HTML-Elemente
- Vergleichbar mit: In Python würdest du auf Objekt-Attribute zugreifen
- Diese globalen Variablen speichern Referenzen zu den HTML-Elementen.

> [!WARNING]
> Globale Variablen erleichtern uns den Zugriff sollen jedoch wie in python auch mit Vorsicht genutzt werden. [Hier](https://medium.com/@surajkumar.tpoint/javascript-global-variables-a-beginners-complete-guide-4de2d68c234d) finden Sie einen schönen Artikel dazu.

**Vertiefung:** 
- Lese [hier](https://www.w3schools.com/js/js_htmldom_elements.asp) nach welche Möglichkeiten es neben der `id` noch gibt auf DOM Elemente zuzugreifen.
- Frage: Wie können Sie auf die `h1` Überschrift zugreifen?
- Frage: Welche Funktionen geben ein Objekt und welche ein Liste zurück?

### Schritt 2.2: Array für Todos erstellen

Um die erstellten Aufgaben abzulegen, bietet sich ein Array an. <br>
Diese sind ähnlich wie eine Liste in Python: `todos = []`

```javascript
// Daten-Array für unsere Todos
let todos = [];
```

Hier finden Sie weiteres [Infomaterial](https://www.w3schools.com/js/js_arrays.asp) zu Arrays.

**Diskussionspunkt:**
- Frage: Warum `let` statt `const`?
- Frage: Welchen Datentyp wird unser Todo-Element haben?
- Frage: Mit welcher Methode können wir Elemente in dieses Array hinzufügen?
- Frage: Welche zwei Möglichkeiten gibt es mit einer Schleife über alle Elemente dieses Arrays zu iterieren.
- Zusatzfrage: Können Sie Elemente mit verschiedenen Datentypen zu einem Array hinzufügen?


### Schritt 2.3: Erste Funktion - Todo hinzufügen

Jedes mal wenn der User auf den Button `Hinzufügen` klickt soll die Aufgabe der Liste hinzugefügt werden. Für diese Art von wiederkehrender Aufgabe bietet sich eine Funktion an.

Fügen Sie folgende Funktion ihrer `app.js` hinzu.

```javascript
// Funktion zum Hinzufügen eines Todos
function addTodo() {
    const text = todoInput.value.trim();
    
    // Prüfen ob Eingabe leer ist
    if (text === '') {
        alert('Bitte eine Aufgabe eingeben!');
        return;
    }
    
    // Todo-Objekt erstellen
    const todo = {
        id: Date.now(), // Einfache eindeutige ID
        text: text,
        completed: false
    };
    
    // Debug Log zum überprüfen
    console.log('DEBUG: Neues Todo hinzugefügt:', todo);

    // Todo-Objekt zum Array hinzufügen
    // !!!IHRE AUFGABE - Ergänzen Sie diese Zeile!!!

    // Debug Log zum überprüfen
    console.log('DEBUG: Alle Todos:', todos);
    
    // Eingabefeld leeren
    todoInput.value = '';
    
    // Liste aktualisieren
    renderTodos();
}
```

**Konzepte:**
- `.value` holt den Text aus dem Input-Feld
- `.trim()` entfernt Leerzeichen am Anfang/Ende (wie in Python)
- `Date.now()` gibt aktuelle Zeit in Millisekunden → einfache eindeutige ID
- Objekte in JS: `{ key: value }` ähnlich wie Dictionaries in Python. [Weitere Infos](https://www.w3schools.com/js/js_objects.asp)

**Fragen:**
- Finden Sie heraus was die Funktion `alert` macht.
- Wo ist die Ausgabe von `console.log()` zu sehen?
- Warum passiert noch nichts wenn wir auf den Button klicken?


### Schritt 2.4: Event Listener registrieren

Damit wir eine Ausgabe sehen müssen wir noch den Button mit unserer Funktion verbinden. Fügen Sie dazu folgenden Code hinzu.

```javascript
// Event Listener für den Button
addBtn.addEventListener('click', addTodo);
```
**Erklärung:**
- `addEventListener()` verbindet Benutzer-Aktionen mit Funktionen
- `'click'` → wenn Button geklickt wird

#### Zusatz (Optional): Auch `Enter` als Event registieren.
```javascript
// Event Listener für Enter-Taste
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});
```
**Erklärung:**
- `'keypress'` → wenn Taste gedrückt wird
- Hier wird eine anyonyme `arrow-Funktion` für komplexere Event-Handling verwendet. Das heißt die Funktion hat keinen Namen und nutzt die kürzere Syntax bei der das Keyword `function` und `return` weggelassen werden kann. [(Weiter lesen ..)](https://www.w3schools.com/js/js_arrow_function.asp)




**Verständnisfragen:**
1. Was ist der Unterschied zwischen `let` und `const` in JavaScript?
2. Vergleiche: Wie würdest du in Python auf die Eigenschaft `.value` zugreifen?
3. Warum verwenden wir `Date.now()` für die ID statt einfach 1, 2, 3...?
4. Was passiert, wenn du `addEventListener` zweimal mit demselben Event auf demselben Element aufrufst?
5. Erkläre den Unterschied: `addBtn.addEventListener('click', addTodo)` vs `addBtn.addEventListener('click', addTodo())`
6. Ist es wichtig in welcher Reihenfolge Variablen, Functionen und EventListener im Programmcode stehen?
---

## Teil 3: Todos anzeigen (Rendering)

### Schritt 3.1: Render-Funktion erstellen

Kopieren Sie folgende Funktion in ihre `app.js`.

```javascript
// Funktion zum Erstellen eines Todo Items
function renderTodo(todo) {
    const li = document.createElement('li');
        li.className = 'todo-item';
        if (todo.completed) {
            li.classList.add('completed');
        }
        
        // Checkbox erstellen
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', function() {
            toggleTodo(todo.id);
        });
        
        // Text-Span erstellen
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = todo.text;
        
        // Löschen-Button erstellen
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', function() {
            deleteTodo(todo.id);
        });
        
        // Alles zusammenfügen
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
}
```
**Wichtige Konzepte:**
- `document.createElement()` → neue HTML-Elemente erstellen
- `appendChild()` → Element als Kind hinzufügen


**Aufgabe:**
- Kopieren Sie den nächsten Abschnitt und vervollständigen Sie die Funktion `renderTodos

```javascript
// Funktion zum Anzeigen aller Todos
function renderTodos() {
    // Liste leeren
    todoList.innerHTML = '';
    
    // Durch alle Todos iterieren und die Funktion `renderTodo` aufrufen.
    // !!! HIER VERVOLLSTÄNDIGEN !!!
}
```

**Wichtige Konzepte:**
- `innerHTML = ''` → Liste komplett leeren
- `forEach()` → wie `for item in list` in Python

**Verständnisfragen:**
Versuchen Sie diese Fragen durch ausprobieren zu erkunden.

1. Warum setzen wir `todoList.innerHTML = ''` am Anfang von `renderTodos()`? Was würde passieren, wenn wir das weglassen?
2. Vergleiche `forEach()` mit einer `for`-Schleife in Python. Was sind die Unterschiede?
3. Was ist der Vorteil von `document.createElement()` gegenüber `innerHTML = '<li>...</li>'`?
4. Warum verwenden wir anonyme Funktionen in den Event Listenern innerhalb der Schleife?
5. Erkläre die Reihenfolge: Warum müssen wir erst alle Elemente erstellen und dann mit `appendChild()` einfügen?
---

## Teil 4: Todos verwalten

### Schritt 4.1: Todo als erledigt markieren

```javascript
// Funktion zum Umschalten des completed-Status
function toggleTodo(id) {
    // Todo finden
    const todo = todos.find(function(t) {
        return t.id === id;
    });
    
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
    }
}
```

**Erklärung:**
- `find()` sucht Element im Array (wie List Comprehension in Python)
- `!todo.completed` → Wert umkehren (true ↔ false)

### Schritt 4.2: Todo löschen

```javascript
// Funktion zum Löschen eines Todos
function deleteTodo(id) {
    // Filtern: Alle Todos AUSSER das mit der gesuchten ID
    todos = todos.filter(function(t) {
        return t.id !== id;
    });
    
    renderTodos();
}
```

**Erklärung:**
- `filter()` erstellt neues Array mit Elementen, die Bedingung erfüllen

**Verständnisfragen:**
1. Was gibt `find()` zurück, wenn kein Element gefunden wird?
2. Warum ist `t.id !== id` in der `filter()`-Funktion wichtig? Was würde `t.id === id` bewirken?
3. Vergleiche die Array-Methoden `find()`, `filter()` und `forEach()`. Wann benutzt du welche?
4. Warum rufen wir `renderTodos()` nach jeder Änderung auf?

---

## Teil 5: Daten persistent speichern

### Schritt 5.1: LocalStorage nutzen

```javascript
// Funktion zum Speichern in LocalStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Funktion zum Laden aus LocalStorage
function loadTodos() {
    const stored = localStorage.getItem('todos');
    if (stored) {
        todos = JSON.parse(stored);
        renderTodos();
    }
}

// Beim Laden der Seite Todos laden
loadTodos();
```

**Konzepte:**
- `localStorage` → Browser-Speicher (bleibt nach Neuladen erhalten)
- `JSON.stringify()` → Objekt in String umwandeln
- `JSON.parse()` → String zurück in Objekt umwandeln

**Aufgabe:** Informieren Sie sich zum `localStorage` und `JSON. Fassen Sie ihre Erkenntnisse hier in kurzen Stichpunkten zusammen.

### Schritt 5.2: Funktionen anpassen

Füge `saveTodos()` nach jeder Änderung hinzu:

```javascript
function addTodo() {
    // ... bestehender Code ...
    todos.push(todo);
    saveTodos(); // HINZUFÜGEN
    todoInput.value = '';
    renderTodos();
}

function toggleTodo(id) {
    // ... bestehender Code ...
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos(); // HINZUFÜGEN
        renderTodos();
    }
}

function deleteTodo(id) {
    // ... bestehender Code ...
    todos = todos.filter(function(t) {
        return t.id !== id;
    });
    saveTodos(); // HINZUFÜGEN
    renderTodos();
}
```

**Verständnisfragen:**
1. Warum müssen wir `JSON.stringify()` verwenden? Was passiert, wenn wir versuchen, direkt ein Array zu speichern?
2. Was ist der Unterschied zwischen `localStorage` und einer normalen Variable?
3. Teste: Öffne die Browser-Konsole und gib `localStorage.getItem('todos')` ein. Was siehst du?
4. Was passiert, wenn zwei Browser-Tabs gleichzeitig Todos ändern?
5. Welche Nachteile hat `localStorage` im Vergleich zu einer Datenbank?

---

## Teil 6: Verbesserungen (Optional)

### Aufgabe 6.1: Zähler hinzufügen

Füge in HTML ein:
```html
<p id="counter">0 Aufgaben</p>
```

In JavaScript:

Implementieren Sie folgende Funktionalität.
Hinweis: Nutzen Sie [template Strings](https://www.w3schools.com/Js/js_string_templates.asp) für die Ausgabe.
```javascript
function updateCounter() {
    // Anzahl aller Todos im Array `todos` ermitteln.

    // Anzahl der erledigten Todos ermitteln

    // Variable mit zugriff auf das DOM-Element mit der `id=counter` 

    // den `textContent` des Absatzes ändern. Z.B 3 von 5 erledigt.

}

// In renderTodos() am Ende hinzufügen:
function renderTodos() {
    // ... bestehender Code ...
    updateCounter(); // HINZUFÜGEN
}
```

### Aufgabe 6.2: Filter hinzufügen

```javascript
let filter = 'all'; // 'all', 'active', 'completed'

function setFilter(newFilter) {
    filter = newFilter;
    renderTodos();
}

function getFilteredTodos() {
    if (filter === 'active') {
        return todos.filter(t => !t.completed);
    } else if (filter === 'completed') {
        return todos.filter(t => t.completed);
    }
    return todos;
}

// renderTodos() anpassen:
function renderTodos() {
    todoList.innerHTML = '';
    const filtered = getFilteredTodos(); // ÄNDERN
    filtered.forEach(function(todo) {
        // ... Rest bleibt gleich
    });
}
```

Kopiere die obigen Funktionen in ihre Javascript Datei. 
Fügen Sie ein Dropdown in ihr HTML ein. Mit der sie den Filter auswählen können.

**Verständnisfragen:**
1. Erkläre die Template-String-Syntax: Was machen die Backticks `` `${variable}` ``?
2. Arrow Functions: Schreibe `function(t) { return !t.completed }` als Arrow Function um.
3. Warum ist der Filter-State eine globale Variable? Wäre `localStorage` hier sinnvoll?

---

## Teil 7: Template-basiertes Rendering (Alternative Methode)

### Warum Templates?

Bisher haben wir Todo-Items mit `document.createElement()` erstellt. Das ist sehr explizit, aber bei komplexeren Strukturen wird der Code lang und unübersichtlich. HTML-Templates bieten eine elegantere Alternative.

### Schritt 7.1: Template im HTML definieren

Füge dieses `<template>` Element in dein HTML ein (nach der `<ul id="todoList"></ul>`):

```html
<template id="todoTemplate">
    <li class="todo-item">
        <input type="checkbox" class="todo-checkbox">
        <span class="todo-text"></span>
        <button class="delete-btn">Löschen</button>
    </li>
</template>
```

**Was ist ein Template?**
- Ein `<template>` wird vom Browser nicht angezeigt
- Es dient als "Bauplan" für HTML-Strukturen
- Wir können es kopieren und mit Daten füllen

### Schritt 7.2: Template-basierte Render-Funktion

Ersetze die `renderTodo()` Funktion durch diese Version:

```javascript
function renderTodo() {

    // Template-Element holen
    const template = document.getElementById('todoTemplate');
    
    // Template klonen (kopieren)
    const clone = template.content.cloneNode(true);
    
    // Elemente aus dem Klon holen
    const li = clone.querySelector('.todo-item');
    const checkbox = clone.querySelector('.todo-checkbox');
    const span = clone.querySelector('.todo-text');
    const deleteBtn = clone.querySelector('.delete-btn');
    
    // Completed-Status setzen
    if (todo.completed) {
        li.classList.add('completed');
    }
    
    // Checkbox konfigurieren
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id);
    });
    
    // Text setzen
    span.textContent = todo.text;
    
    // Delete-Button konfigurieren
    deleteBtn.addEventListener('click', () => {
        deleteTodo(todo.id);
    });
    
    // Geklontes Element zur Liste hinzufügen
    todoList.appendChild(clone);
}
```

### Schritt 7.3: Vergleich der beiden Methoden

**createElement-Methode:**
```javascript
// Pro:
// - Sehr explizit und klar
// - Jeder Schritt ist sichtbar
// - Keine zusätzliche HTML-Struktur nötig

// Contra:
// - Viel Code für komplexe Strukturen
// - Schwer zu lesen bei verschachtelten Elementen
// - HTML-Struktur ist im JS-Code "versteckt"

const li = document.createElement('li');
li.className = 'todo-item';
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
// ... viele weitere Zeilen
```

**Template-Methode:**
```javascript
// Pro:
// - HTML-Struktur im HTML sichtbar
// - Weniger JavaScript-Code
// - Einfacher bei komplexen Strukturen
// - Trennung von Struktur (HTML) und Logik (JS)

// Contra:
// - Ein zusätzliches Konzept zu lernen
// - Template muss im HTML definiert sein

const clone = template.content.cloneNode(true);
const checkbox = clone.querySelector('.todo-checkbox');
// ... nur noch Daten einfügen
```


### Schritt 7.5: Event Delegation (Fortgeschritten)

Statt jedem Todo einen Event Listener zu geben, können wir einen auf der Liste setzen:

```javascript
// Einmal beim Start registrieren
todoList.addEventListener('click', function(event) {
    const target = event.target;
    const li = target.closest('.todo-item');
    
    if (!li) return; // Nicht auf einem Todo geklickt
    
    const todoId = Number(li.dataset.todoId);
    
    // Delete-Button geklickt?
    if (target.classList.contains('delete-btn')) {
        deleteTodo(todoId);
    }
});

todoList.addEventListener('change', function(event) {
    if (event.target.classList.contains('todo-checkbox')) {
        const li = event.target.closest('.todo-item');
        const todoId = Number(li.dataset.todoId);
        toggleTodo(todoId);
    }
});

// renderTodos() wird dann einfacher:
function renderTodos() {
    todoList.innerHTML = '';
    const template = document.getElementById('todoTemplate');
    
    todos.forEach(function(todo) {
        const clone = template.content.cloneNode(true);
        const li = clone.querySelector('.todo-item');
        
        li.dataset.todoId = todo.id;
        if (todo.completed) {
            li.classList.add('completed');
        }
        
        clone.querySelector('.todo-checkbox').checked = todo.completed;
        clone.querySelector('.todo-text').textContent = todo.text;
        
        // KEINE Event Listener mehr hier!
        todoList.appendChild(clone);
    });
}
```

**Vorteile von Event Delegation:**
- Nur wenige Event Listener statt hunderte
- Besser für Performance bei vielen Todos
- Funktioniert auch mit dynamisch hinzugefügten Elementen
- Kein Memory Leak durch alte Event Listener

**Verständnisfragen:**
1. Was ist der Hauptunterschied zwischen `createElement()` und Templates?
2. Warum verwenden wir `cloneNode(true)`? Was macht der Parameter `true`?
3. Erkläre `template.content` - warum nicht direkt `template`?
4. Was sind die Vorteile von Event Delegation? Wann würdest du es verwenden?
5. Teste: Was passiert, wenn du `.content` beim Klonen vergisst?
6. Vergleiche: Ist die Template-Methode immer besser? Wann würdest du `createElement()` bevorzugen?

---

## Teil 8: Vorbereitung Backend-Integration

### Diskussionspunkte:
1. **Was ändert sich mit Backend?**
   - Todos werden auf Server gespeichert (nicht nur Browser)
   - Mehrere Benutzer können Daten teilen
   - Daten bleiben auch bei Löschen des Browser-Cache erhalten

2. **API-Konzept:**
   ```
   GET    /api/todos       → Alle Todos holen
   POST   /api/todos       → Neues Todo erstellen
   PUT    /api/todos/:id   → Todo aktualisieren
   DELETE /api/todos/:id   → Todo löschen
   ```

3. **Ausblick: fetch() API**
   ```javascript
   // Beispiel für späteren API-Call
   async function loadTodosFromServer() {
       const response = await fetch('http://localhost:3000/api/todos');
       const data = await response.json();
       todos = data;
       renderTodos();
   }
   ```

---

## Zusammenfassung

**Was haben wir gelernt?**
- DOM-Manipulation (Elemente auswählen, erstellen, ändern)
- Event-Handling (Click, Keypress)
- Arrays und Array-Methoden (push, filter, find, forEach)
- Objekte in JavaScript
- LocalStorage für Datenpersistenz
- Funktionen und Scope

**Nächste Schritte:**
1. Backend-API mit Node.js/Express erstellen
2. fetch() für HTTP-Requests nutzen
3. Async/Await verstehen
4. Error-Handling implementieren

---

## Hausaufgaben / Erweiterungen

1. **Feature hinzufügen:** Bearbeitungs-Funktion für Todos
2. **Feature hinzufügen:** Prioritäten (niedrig, mittel, hoch) mit Farben
3. **Feature hinzufügen:** Fälligkeitsdatum für Todos
4. **Code verbessern:** Arrow Functions verwenden (`() => {}` statt `function()`)
5. **Code verbessern:** `const` und `let` konsequent nutzen