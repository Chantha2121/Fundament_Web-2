# CSS Pseudo-classes

**CSS Pseudo-class** គឺជា keyword ដែលបន្ថែមទៅលើ selector ដើមី្បកំណត់រចនាប័ទ្ម (Style) លើ Element ផ្អែកលើ **ស្ថានភាព (Special State)** របស់វា (ដូចជា ពេលយក Mouse ទៅដាក់លើ, ពេលកំពុងចុច, ពេល Element ត្រូវបាន Select ឬ Focus, និងតាមលំដាប់លំដោយរចនាសម្ព័ន្ធ HTML)។

---

## 1. Syntax (ទម្រង់សរសេរ)

```css
selector:pseudo-class {
  property: value;
}
```

> **ចំណាំ:** Pseudo-class ប្រើប្រាស់សញ្ញាស نقطមួយ `:` (Single colon) ផ្ទុយពី Pseudo-element ដែលប្រើប្រាស់សញ្ញាពីរ `::` (Double colon)។

---

## 2. ប្រភេទ Pseudo-classes ដែលនិយមប្រើប្រាស់បំផុត

### 2.1 ស្ថានភាពអន្តរកម្មរបស់អ្នកប្រើប្រាស់ (User Interaction States)

```css
/* 1. :link - តំណភ្ជាប់ដែលមិនទាន់បានចុចមើល */
a:link {
  color: #3498db;
}

/* 2. :visited - តំណភ្ជាប់ដែលបានចុចមើលរួចហើយ */
a:visited {
  color: #8e44ad;
}

/* 3. :hover - នៅពេលយក Mouse ទៅដាក់លើ Element */
button:hover {
  background-color: #2980b9;
  cursor: pointer;
}

/* 4. :active - នៅពេលកំពុង ចុច Mouse លើ Element */
button:active {
  transform: scale(0.98);
}

/* 5. :focus - នៅពេល Element ទទួលបានការ Focus (ឧទាហរណ៍៖ ចុចលើ Input ឬ Tab មកដល់) */
input:focus {
  border-color: #2ecc71;
  outline: none;
}
```

> **គន្លឹះ LVHA Order:** សម្រាប់ `<a>` tag គួររៀបចំតាមលំដាប់ `:link` ➔ `:visited` ➔ `:hover` ➔ `:active` ដើម្បីឱ្យ Style ដំណើរការត្រឹមត្រូវ។

---

### 2.2 តាមលំដាប់រចនាសម្ព័ន្ធ Element (Structural Pseudo-classes)

```css
/* :first-child - ជ្រើសរើស Element ដំបូងគេបង្អស់នៅក្នុង Parent */
li:first-child {
  font-weight: bold;
  color: #e74c3c;
}

/* :last-child - ជ្រើសរើស Element ចុងក្រោយគេនៅក្នុង Parent */
li:last-child {
  border-bottom: none;
}

/* :nth-child(n) - ជ្រើសរើសតាមលំដាប់ទី n (អាចជា លេខ, odd, even, ឬរូបមន្ត) */
tr:nth-child(even) {
  background-color: #f2f2f2; /* ជួរដេកគូ (2, 4, 6...) */
}

tr:nth-child(odd) {
  background-color: #ffffff; /* ជួរដេកសេស (1, 3, 5...) */
}

/* :not(selector) - ជ្រើសរើសគ្រប់ Element លើកលែងតែ Selector ដែលបានកំណត់ */
button:not(.danger) {
  background-color: #3498db;
}
```

---

### 2.3 ស្ថានភាពទម្រង់បញ្ចូលទិន្នន័យ (Form & Input States)

```css
/* :checked - នៅពេល Checkbox ឬ Radio button ត្រូវ បានជ្រើសរើស */
input[type="checkbox"]:checked + label {
  text-decoration: line-through;
  color: #7f8c8d;
}

/* :disabled - នៅពេល Form Field ត្រូវ បានបិទមិនឱ្យប្រើ (Disabled) */
input:disabled {
  background-color: #ecf0f1;
  cursor: not-allowed;
}

/* :enabled - នៅពេល Form Field អាច ប្រើប្រាស់បាន */
input:enabled {
  background-color: #ffffff;
}

/* :required - សម្រាប់ Input ដែលមាន attribute required */
input:required {
  border-left: 3px solid #e74c3c;
}
```

---

## 3. ភាពខុសគ្នារវាង Pseudo-class និង Pseudo-element

| លក្ខណៈ | Pseudo-class | Pseudo-element |
| :--- | :--- | :--- |
| **សញ្ញាសម្គាល់** | `:` (Single colon) | `::` (Double colon) |
| **គោលបំណង** | កំណត់ Style តាម **ស្ថានភាព (State)** នៃ Element | កំណត់ Style លើ **ផ្នែកជាក់លាក់** នៃ Element |
| **ឧទាហរណ៍** | `:hover`, `:focus`, `:nth-child()`, `:checked` | `::before`, `::after`, `::placeholder`, `::selection` |

---

## 4. ឧទាហរណ៍អនុវត្តជាក់ស្តែង (Practical Code Example)

### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>CSS Pseudo-classes Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>ឧទាហរណ៍ CSS Pseudo-classes</h1>

  <!-- 1. Interactive Button -->
  <button class="btn">ចុចទីនេះ (Hover & Active)</button>
  <button class="btn danger">ប៊ូតុងលុប</button>

  <!-- 2. Form Input States -->
  <h2>ទម្រង់បញ្ចូលទិន្នន័យ (Form)</h2>
  <form>
    <div class="form-group">
      <input type="text" placeholder="ឈ្មោះពេញ *" required>
    </div>
    <div class="form-group">
      <input type="checkbox" id="todo1">
      <label for="todo1">បំពេញកិច្ចការផ្ទះ CSS</label>
    </div>
  </form>

  <!-- 3. Striped Table with :nth-child -->
  <h2>តារាងទិន្នន័យ (Striped Table)</h2>
  <table>
    <thead>
      <tr>
        <th>ល.រ</th>
        <th>ឈ្មោះ</th>
        <th>ជំនាញ</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>សុខា</td><td>Frontend Developer</td></tr>
      <tr><td>2</td><td>វីរៈ</td><td>Backend Developer</td></tr>
      <tr><td>3</td><td>ចាន់ថា</td><td>Fullstack Developer</td></tr>
      <tr><td>4</td><td>ប៊ុនធឿន</td><td>UI/UX Designer</td></tr>
    </tbody>
  </table>

</body>
</html>
```

### CSS (`style.css`)

```css
body {
  font-family: Arial, sans-serif;
  margin: 30px;
  background-color: #f8f9fa;
}

/* 1. Button Interaction States */
.btn {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.1s;
}

.btn:hover {
  background-color: #2980b9;
  cursor: pointer;
}

.btn:active {
  transform: scale(0.95);
}

.btn.danger:hover {
  background-color: #c0392b;
}

/* 2. Form pseudo-classes */
.form-group {
  margin-bottom: 15px;
}

input[type="text"] {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="text"]:focus {
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  outline: none;
}

input[type="text"]:required {
  border-left: 4px solid #e74c3c;
}

input[type="checkbox"]:checked + label {
  text-decoration: line-through;
  color: #bdc3c7;
}

/* 3. Table styling with nth-child & hover */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #2c3e50;
  color: white;
}

/* Striped rows */
tbody tr:nth-child(even) {
  background-color: #eaeded;
}

/* Hover row effect */
tbody tr:hover {
  background-color: #d6eaf8;
  cursor: pointer;
}
```
