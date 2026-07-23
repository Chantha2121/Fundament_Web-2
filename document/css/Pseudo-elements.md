# CSS Pseudo-elements

**CSS Pseudo-element** គឺជា keyword ដែលបន្ថែមទៅលើ selector ដើមី្បកំណត់រចនាប័ទ្ម (Style) លើផ្នែកណាមួយជាក់លាក់នៃ Element (ឧទាហរណ៍៖ អក្សរដំបូង, បន្ទាត់ដំបូង, ឬបន្ថែមមាតិការបង្កើតថ្មីមុន/ក្រោយ Element) ដោយមិនចាំបាច់បន្ថែម HTML tag ថ្មីឡើយ។

---

## 1. Syntax (ទម្រង់សរសេរ)

```css
selector::pseudo-element {
  property: value;
}
```

> **ចំណាំ:** តាមស្តង់ដារ CSS3 គេប្រើសញ្ញាពីរ `::` (Double colon) សម្រាប់ Pseudo-elements ដើម្បីបែងចែកឲ្យច្បាស់ពី Pseudo-classes ដែលប្រើសញ្ញាមួយ `:` (Single colon) ដូចជា `:hover` ឬ `:active`។

---

## 2. ប្រភេទ Pseudo-elements ដែលនិយមប្រើប្រាស់បំផុត

### 2.1 `::before` និង `::after`
ប្រើសម្រាប់បញ្ចូល content ឬការលម្អផ្សេងៗ នៅខាងមុខ (`::before`) ឬខាងក្រោយ (`::after`) នៃមាតិការរបស់ Element។ 
*ចាំបាច់ត្រូវមាន property `content: "";` ជានិច្ច!*

```css
/* បន្ថែម icon ឬអក្សរនៅខាងមុខ <a> tag */
a::before {
  content: "👉 ";
}

/* បន្ថែមផ្កាយ ឬ Badge នៅខាងក្រោយ */
.badge::after {
  content: " NEW";
  background-color: red;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}
```

---

### 2.2 `::first-letter`
ប្រើសម្រាប់កំណត់ Style លើអក្សរដំបូងគេបង្អស់នៃ Block-level Element (ឧទាហរណ៍ធ្វើជា Drop Cap ក្នុងអត្ថបទ)។

```css
p::first-letter {
  font-size: 200%;
  font-weight: bold;
  color: #e74c3c;
  float: left;
  margin-right: 5px;
}
```

---

### 2.3 `::first-line`
ប្រើសម្រាប់កំណត់ Style លើបន្ទាត់ដំបូងគេនៃ Block-level Element។

```css
p::first-line {
  font-weight: bold;
  color: #2980b9;
}
```

---

### 2.4 `::placeholder`
ប្រើសម្រាប់កំណត់ Style លើអត្ថបទគំរូ (Placeholder Text) នៅក្នុង `<input>` ឬ `<textarea>`។

```css
input::placeholder {
  color: #95a5a6;
  font-style: italic;
}
```

---

### 2.5 `::selection`
ប្រើសម្រាប់កំណត់ Style នៅពេលអ្នកប្រើប្រាស់ Select/Highlight លើអត្ថបទនៅលើទំព័រ Web។

```css
::selection {
  background-color: #f1c40f;
  color: #000;
}
```

---

### 2.6 `::marker`
ប្រើសម្រាប់កំណត់ Style លើសញ្ញាក្បាលកថាខណ្ឌ (Bullet point) ឬលេខរៀង នៃ List items (`<li>`)។

```css
li::marker {
  color: #2ecc71;
  font-size: 1.2rem;
}
```

---

## 3. ភាពខុសគ្នារវាង Pseudo-class និង Pseudo-element

| លក្ខណៈ (Feature) | Pseudo-class | Pseudo-element |
| :--- | :--- | :--- |
| **សញ្ញាសម្គាល់** | `:` (Single colon) | `::` (Double colon) |
| **គោលបំណង** | កំណត់ Style តាម **ស្ថានភាព (State)** នៃ Element | កំណត់ Style លើ **ផ្នែកជាក់លាក់ (Specific Part)** ឬបង្កើត Content ថ្មី |
| **ឧទាហរណ៍** | `:hover`, `:focus`, `:nth-child()`, `:active` | `::before`, `::after`, `::first-letter`, `::placeholder` |

---

## 4. ឧទាហរណ៍អនុវត្តជាក់ស្តែង (Practical Code Example)

### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>CSS Pseudo-elements Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1 class="title">រៀន CSS Pseudo-elements</h1>

  <p class="article">
    CSS Pseudo-elements ជួយឱ្យយើងអាចបង្កើតផលរចនាប័ទ្មស្អាតៗ និងមានភាពបត់បែនខ្ពស់ ដោយមិនបាច់ប៉ះពាល់ដល់រចនាសម្ព័ន្ធ HTML ឡើយ។
  </p>

  <form>
    <input type="text" placeholder="បញ្ចូលឈ្មោះរបស់អ្នកនៅទីនេះ...">
  </form>

  <ul>
    <li>HTML5 Structure</li>
    <li>CSS3 Styling</li>
    <li>JavaScript Logic</li>
  </ul>

</body>
</html>
```

### CSS (`style.css`)

```css
/* 1. Custom Highlight Selection */
::selection {
  background-color: #3498db;
  color: #ffffff;
}

/* 2. Style Title with ::before & ::after decorative lines */
.title {
  position: relative;
  display: inline-block;
  font-size: 2rem;
  color: #2c3e50;
}

.title::after {
  content: "";
  display: block;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #3498db, #2ecc71);
  margin-top: 5px;
  border-radius: 2px;
}

/* 3. Drop cap with ::first-letter and bold first line with ::first-line */
.article::first-letter {
  font-size: 2.5rem;
  font-weight: bold;
  color: #e74c3c;
  float: left;
  line-height: 1;
  padding-right: 8px;
}

.article::first-line {
  font-weight: bold;
}

/* 4. Custom Placeholder style */
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
}

input::placeholder {
  color: #999;
  font-style: italic;
}

/* 5. Custom Bullet List with ::marker */
li::marker {
  color: #e67e22;
  font-weight: bold;
}
```
