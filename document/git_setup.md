# របៀបដំឡើង Git

ឯកសារនេះបង្ហាញពីការដំឡើង Git លើប្រព័ន្ធផ្សេងៗ និងការកំណត់ដំបូងសម្រាប់ប្រើប្រាស់។

## 1) ពិនិត្យមើលថា Git មានរួចហើយឬនៅ

បើក Terminal (ឬ Command Prompt/PowerShell នៅ Windows) ហើយវាយ៖

```bash
git --version
```

- បើបង្ហាញកំណែដូចជា `git version 2.x.x` មានន័យថា Git បានដំឡើងរួច
- បើមិនមាន សូមអនុវត្តជំហានដំឡើងខាងក្រោម

## 2) ដំឡើង Git តាមប្រព័ន្ធប្រតិបត្តិការ

### macOS

ជម្រើស A: ដំឡើងតាម Homebrew

```bash
brew install git
```

ជម្រើស B: ដំឡើង Xcode Command Line Tools

```bash
xcode-select --install
```

### Windows

1. ចូលទៅកាន់គេហទំព័រ៖ https://git-scm.com/download/win
2. ទាញយក installer ហើយដំណើរការ
3. ចុច Next តាមលំនាំដើម (default settings) រហូតដល់ Finish

### Ubuntu / Debian

```bash
sudo apt update
sudo apt install git -y
```

### Fedora

```bash
sudo dnf install git -y
```

### Arch Linux

```bash
sudo pacman -S git
```

## 3) កំណត់ Git ដំបូង (First-time setup)

បន្ទាប់ពីដំឡើង សូមកំណត់ឈ្មោះ និងអ៊ីមែល៖

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

ពិនិត្យមើលការកំណត់៖

```bash
git config --list
```

## 4) ជំហានពិនិត្យចុងក្រោយ

```bash
git --version
```

បើបង្ហាញកំណែ Git មានន័យថាដំឡើងជោគជ័យ។

## 5) Command មូលដ្ឋានសម្រាប់ចាប់ផ្តើម

```bash
mkdir my-project
cd my-project
git init
git status
```

## ចំណាំ

- ប្រសិនបើប្រើ VS Code អាចប្រើ Source Control panel ដើម្បី commit/push បានងាយ
- ប្រសិនបើ command `git` មិនស្គាល់ សូមបិទ-បើក Terminal ឡើងវិញ

## 6) ឯកសារបន្ថែម

- សម្រាប់របៀបបង្កើត Account សូមមើលឯកសារ៖ `របៀបបង្កើត account github និង gitlab.md`
