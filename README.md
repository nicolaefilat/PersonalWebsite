# Portfolio Template 

Hi there! 👋

 Welcome to this customizable portfolio template built with **React**, **TypeScript**, and **Tailwind CSS**. 🚀

I originally built this for myself, but I thought, "Hey, why not share the love?" ❤️ I hope it helps you build an amazing portfolio!

## 🛠️ Configuration

Good news! 🎉 All your configuration files are neatly saved in the `config/` folder at the root of the project. You can easily customize the content of your website just by editing these YAML files. No complex code changes needed! 🥳

### 🧩 Components & Configuration

#### 1. ⚙️ General Site Settings
**File:** `config/site.yaml`
This is where you control the global stuff like your navbar title, footer text, and what shows up in the browser tab.

```yaml
title: "PORTFOLIO"
footerText: "© {year} Portfolio. All rights reserved."
documentTitle: "Nicolae Filat - Portfolio"
enableSkillHover: false # ✨ Set to true if you want a cool hover effect on your skill cards!
```

#### 2. 🦸 Hero Section
**File:** `config/personal.yaml`
This is the first thing people see! Make it count. 💥 It displays your name, role, and a catchy intro.

```yaml
name: "Nicolae Filat"
role: "Software Developer & Engineer"
heroDescription: "Welcome to my professional world..."
```

#### 3. 👤 About Section
**Files:** `config/personal.yaml`, `config/skills.yaml`
Tell the world who you are and what you can do! 💪
- **Bio**: Comes from `personal.yaml` (look for the `bio` field).
- **Skills**: Defined in `skills.yaml`. Group them by category to keep things organized.

**Example `skills.yaml`:**
```yaml
- title: "Languages"
  icon: "Code" # 🎨 See the "Icons" section below for more info!
  skills: ["JavaScript", "TypeScript", "Python"]
```

#### 4. 💼 Experience Section
**Files:** `config/work.yaml`, `config/education.yaml`
Show off your journey! 🎓🏢 Display your work history and education timeline here.

**Example `work.yaml`:**
```yaml
- role: "Software Engineer"
  company: "Tech Corp"
  period: "2020 - Present"
  desc: "Developed web applications..."
```

#### 5. 🚀 Projects Section
**File:** `config/projects.yaml`
Time to brag a little! 😉 Showcase your awesome projects here. You can group them by category (e.g., "University Projects", "Side Hustles").

**Example `projects.yaml`:**
```yaml
- project_group: "Web Development"
  list:
    - id: "my-project"
      title: "My Awesome Project"
      short_description: "A brief summary."
      description: "Full detailed description (supports Markdown)."
      tags: ["React", "TypeScript"]
      image: "https://example.com/image.jpg"
      github_url: "https://github.com/..."
```

#### 6. 📞 Contact & Footer
**File:** `config/personal.yaml`
Let people know how to reach you! 📬

```yaml
email: "email@example.com"
github:
  username: "username"
  url: "https://github.com/username"
linkedin:
  name: "Name"
  url: "https://linkedin.com/in/username"
```

### 🎨 Icons

We use [Lucide React](https://lucide.dev/icons/) for icons, especially in the **Skills** section. They are super clean and look great! ✨

**How to pick a cool icon:**
1. Head over to [Lucide Icons](https://lucide.dev/icons/). 🕵️‍♂️
2. Search for something that fits (e.g., "database", "server", "cloud").
3. Copy the **name** of the icon (e.g., `Database`, `Server`, `Cloud`).
4. Paste it into the `icon` field in `config/skills.yaml`.

**⚠️ Important Note:** Make sure the icon name matches **exactly** (it's case-sensitive, usually PascalCase like `FileCode`, `Terminal`, etc.). If you make a typo, don't worry! We'll just show a default code icon so nothing breaks. 😅

## 🌈 Color Themes

Want to change the look? No problem! The color theme is configured in `src/index.css` using CSS variables and Tailwind CSS.

### 🖌️ Changing Colors

To switch up the vibe, open `src/index.css` and tweak the HSL values in the `:root` (light mode) and `.dark` (dark mode) blocks.

The main colors are:
- `--primary`: Your main brand color. 🌟
- `--secondary`: Used for backgrounds and accents.
- `--background`: The page background.
- `--foreground`: The text color.

**Example:**
```css
:root {
  /* ... */
  --primary: 222.2 47.4% 11.2%; /* 👈 Change this HSL value to whatever you like! */
  /* ... */
}
```

The app supports **Dark Mode** 🌙 out of the box! It respects your system preference, or you can toggle it via the UI.

Happy coding! 💻✨
