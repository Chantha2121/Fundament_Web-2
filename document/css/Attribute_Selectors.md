# CSS Attribute Selectors

**CSS Attribute Selector** គឺជា Selector ដែលអនុញ្ញាតឱ្យយើងជ្រើសរើស និងកំណត់រចនាប័ទ្ម (Style) លើ HTML Elements ផ្អែកលើ **Attribute (លក្ខណៈសម្បត្តិ)** ឬ **តម្លៃ (Value) នៃ Attribute** របស់វា ដោយមិនចាំបាច់បន្ថែម `class` ឬ `id` ឡើយ។

---

## 1. ប្រភេទ Attribute Selectors ទាំងអស់

| Selector | ការពណ៌នា (Description) | ឧទាហរណ៍ (Example) |
| :--- | :--- | :--- |
| `[attribute]` | ជ្រើសរើស Element ណាដែលមាន Attribute នោះ (មិនខ្វល់ពីតម្លៃ) | `a[target]` |
| `[attribute="value"]` | ជ្រើសរើស Element ដែលមាន Attribute និងតម្លៃ **ស្មើគ្នាទាំងស្រុង** | `input[type="text"]` |
| `[attribute~="value"]` | ជ្រើសរើស Element ដែលមានតម្លៃជំពូកពាក្យ **ដាច់ដោយឡែក (Space-separated)** ត្រូវគ្នា | `[title~="flower"]` |
| `[attribute\|="value"]` | ជ្រើសរើស Element ដែលមានតម្លៃចាប់ផ្តើមដោយពាក្យនោះ ឬតាមដោយសញ្ញា `-` | `[lang\|="en"]` |
| `[attribute^="value"]` | ជ្រើសរើស Element ដែលមានតម្លៃ **ផ្តើមឡើងដោយ (Starts with)** | `a[href^="https"]` |
| `[attribute$="value"]` | ជ្រើសរើស Element ដែលមានតម្លៃ **បញ្ចប់ដោយ (Ends with)** | `a[href$=".pdf"]` |
| `[attribute*="value"]` | ជ្រើសរើស Element ដែលមានតម្លៃ **មានផ្ទុកពាក្យ/អក្សរនោះ (Contains)** | `a[href*="google"]` |

---

## 2. ការពន្យល់លម្អិត និងឧទាហរណ៍តាមប្រភេទ

### 2.1 `[attribute]` - មាន Attribute
ជ្រើសរើសរាល់ Element ទាំងឡាយណាដែលមាន Attribute កំណត់។

```css
/* កំណត់ Style លើគ្រប់ <a> tag ណាដែលមាន attribute target */
a[target] {
  background-color: yellow;
}
```

---

### 2.2 `[attribute="value"]` - តម្លៃស្មើគ្នាទាំងស្រុង
ជ្រើសរើស Element ដែលមាន Attribute ស្មើនឹង Value ជាក់លាក់។ និយមប្រើបំផុតជាមួយ Form Controls (`<input>`)។

```css
/* កំណត់ Style លើ <input> ដែលមាន type="text" */
input[type="text"] {
  border: 2px solid #3498db;
  padding: 8px;
}

/* កំណត់ Style លើ <input> ដែលមាន type="submit" */
input[type="submit"] {
  background-color: #2ecc71;
  color: white;
}
```

---

### 2.3 `[attribute^="value"]` - ចាប់ផ្តើមដោយ (Prefix)
ជ្រើសរើស Element ណាដែលតម្លៃ Attribute ចាប់ផ្តើមដោយ String ដែលបានកំណត់។

```css
/* កំណត់ Style លើ Link ទាំងឡាយណាដែលផ្តើមដោយ https (Secure Links) */
a[href^="https"] {
  color: #27ae60;
  font-weight: bold;
}
```

---

### 2.4 `[attribute$="value"]` - បញ្ចប់ដោយ (Suffix)
ជ្រើសរើស Element ណាដែលតម្លៃ Attribute បញ្ចប់ដោយ String ដែលបានកំណត់ (និយមប្រើសម្រាប់ File formats ដូចជា `.pdf`, `.png`, `.docx`)។

```css
/* បន្ថែម icon ឬ Style លើ Link ទាញយកឯកសារ PDF */
a[href$=".pdf"]::after {
  content: " 📄 (PDF)";
  color: #e74c3c;
  font-size: 0.9em;
}
```

---

### 2.5 `[attribute*="value"]` - មានផ្ទុកពាក្យ (Substring)
ជ្រើសរើស Element ណាដែលតម្លៃ Attribute មានផ្ទុកពាក្យនោះនៅត្រង់ណាក៏បាន។

```css
/* ជ្រើសរើស Link ណាដែលមានពាក្យ google នៅក្នុង href */
a[href*="google"] {
  background-color: #f1c40f;
}
```

---

### 2.6 Case-Insensitive Matching (`i`)
យើងអាចបន្ថែមអក្សរ `i` នៅចុង Selector ដើម្បីឱ្យវាមិនប្រកាន់អក្សរតូច/ធំ (Case-insensitive)។

```css
/* ត្រូវគ្នាទាំង .PDF, .pdf, ឬ .Pdf */
a[href$=".pdf" i] {
  color: red;
}
```

---

## 3. ឧទាហរណ៍អនុវត្តជាក់ស្តែង (Practical Code Example)

### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>CSS Attribute Selectors Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h2>១. តំណភ្ជាប់ (Links Style)</h2>
  <ul>
    <li><a href="https://example.com" target="_blank">Website សុវត្ថិភាព (HTTPS)</a></li>
    <li><a href="http://example.com">Website ធម្មតា (HTTP)</a></li>
    <li><a href="documents/report.pdf">ទាញយករបាយការណ៍ (PDF)</a></li>
    <li><a href="images/photo.png">មើលរូបភាព (PNG)</a></li>
  </ul>

  <h2>២. ទម្រង់បញ្ចូលទិន្នន័យ (Form Styling)</h2>
  <form>
    <label>ឈ្មោះ:</label>
    <input type="text" placeholder="បញ្ចូលឈ្មោះ..."><br><br>

    <label>អ៊ីមែល:</label>
    <input type="email" placeholder="បញ្ចូលអ៊ីមែល..."><br><br>

    <label>ពាក្យសម្ងាត់:</label>
    <input type="password" placeholder="បញ្ចូលពាក្យសម្ងាត់..."><br><br>

    <input type="submit" value="ផ្ញើទិន្នន័យ">
    <input type="button" value="បោះបង់" disabled>
  </form>

</body>
</html>
```

### CSS (`style.css`)

```css
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  line-height: 1.6;
}

/* 1. Style links based on href prefix & suffix */
a[href^="https"] {
  color: #2980b9;
  text-decoration: none;
}

a[href^="https"]::after {
  content: " 🔒";
}

a[href$=".pdf"] {
  color: #c0392b;
  font-weight: bold;
}

a[href$=".pdf"]::after {
  content: " [PDF]";
}

a[target] {
  border-bottom: 2px dashed #8e44ad;
}

/* 2. Style input elements by type attribute */
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 250px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}

input[type="submit"] {
  background-color: #2ecc71;
  color: white;
  padding: 9px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Disabled attribute selector */
input[disabled] {
  background-color: #e74c3c;
  color: white;
  cursor: not-allowed;
  opacity: 0.6;
}
```
