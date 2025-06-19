# Partial Phone Number Combination Generator

A simple, fast, and privacy-focused web tool to generate all possible combinations for a partial phone number. Built for that one specific moment when someone says, "...you'll have to guess the rest."

---

### **Live Demo: [50221337.xyz](https://www.50221337.xyz/)**

### **Blog Post: [The Elena Project: Accidental SIGINT and Lean Product Engineering](https://devchthonic.substack.com/p/the-elena-project-accidental-sigint)**

![Screenshot of the App](https://i.imgur.com/B7rYsla.png)

---

## The Origin Story

This project was born from a simple challenge. A friend, let's call her "Elena," gave me her phone number but left three digits blank and told me to "guess."

As a developer, my mind immediately jumped to the programmatic solution rather than simple guesswork. How many combinations were there? (1,000). Could I generate them all? (Yes). This led me down a rabbit hole where I explored not just combination generation, but also the technologies behind automated calling (Twilio), voice biometrics (Veridas), and the legalities of wiretapping in Canada (don't do it).

In the end, I decided against the wildly illegal surveillance scheme and instead built this tool—a safe, fun, and useful way for anyone to solve a similar puzzle without risking a five-year prison sentence.

## Features

* **Instant Combination Generation:** Enter a number with `x` as a placeholder for any unknown digit.
* **Client-Side Processing:** All logic runs directly in your browser. It's incredibly fast and completely private.
* **Copy to Clipboard:** Easily copy the full list of generated numbers with a single click.
* **Safe & Secure:** This app has zero backend, no database, and logs absolutely nothing. Your search is your business.
* **Responsive Design:** Works beautifully on desktop and mobile devices.

## Tech Stack

This project is intentionally simple and built with modern, lightweight web technologies.

* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) for rapid UI development.
* **Hosting:** Deployed on [Vercel](https://vercel.com/) for a seamless, global CDN.

## Running Locally

Want to run this project on your own machine? It's easy.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/DevChthonic/50221337.xyz-Partial-Phone-Number-Generator.git](https://github.com/DevChthonic/50221337.xyz-Partial-Phone-Number-Generator.git)
    ```
2.  **Navigate to the directory:**
    ```bash
    cd 50221337.xyz-Partial-Phone-Number-Generator
    ```
3.  **Open the HTML file:**
    Simply open the `index.html` file in your favorite web browser. That's it!

## Privacy & Ethics Promise

This tool was built with a few core principles in mind:

1.  **Zero Logging:** Your inputs are never stored, sent, or seen by anyone. The magic happens entirely on your device.
2.  **Open Source:** The code is fully available under the **MIT License**. Feel free to inspect it, fork it, and learn from it.
3.  **Use for Good:** This is for fun, educational purposes, and maybe for helping you connect with that friend you met at the bar. Please don't use it for evil.

## Support the Project

If this tool helped you out or you just enjoyed the story, consider supporting my work!

<a href="https://coff.ee/devchthonic" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="60" width="217">
</a>
