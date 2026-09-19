# 🚀 Dev Stack

## 1. Project Name: **Dev Stack**
A modern Tech Stack Builder & Technology Showcase web application.

---

## 2. Description of the Project

Dev Stack is a web application that helps users explore different web development technologies and create their own personalized tech stack.

The project provides a simple, clean, and responsive interface for discovering and selecting technologies.

---

## 3. Technologies Used

* ⚛️ **React**
* 🔷 **TypeScript**
* 🎨 **Tailwind CSS**
* 🌼 **DaisyUI**
* ⚡ **Vite**
* 🔔 **React Toastify**

---

## 4. Features

### 🔍 Explore Technologies

Browse different technologies and explore useful information about them.

### 🧩 Build Your Own Stack

Select your favorite technologies and create your own personalized development stack.

### 📱 Responsive Design

Enjoy a clean and responsive experience across desktop, tablet, and mobile devices.

---

## 5. Live Website


## 6. GitHub Repository
https://github.com/saikot-shahriyar/dev-stack

---

📚 ## Questions & Answers

1. What is JSX, and why is it used in React?
=> JSX lets us write HTML-like code inside JavaScript. I use JSX in React because it makes writing the UI much easier and cleaner.

2. What is the difference between props and state?
=> Props are used to send data from a parent component to a child component. State is used to store data inside a component that can change.

3. What does the useState hook do, and where did you use it in this project?
=> useState is used to store and update data in a component. In my project, I used it to manage the user's selected technologies and their tech stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
=> useEffect runs some code when a component loads or when something changes. I used it to load the technology data from the JSON file when the project starts.

5. Why does every item in a .map() list need a unique key prop?
=> React needs a unique key to know which item is which. It helps React update the list correctly when something changes.

6. What is conditional rendering? Show one place you used it.
=> Conditional rendering means showing something only when a condition is true. For example, I show an empty message when the user's stack has no items.
{stack.length === 0 && <p>Your stack is empty.</p>}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
=> I pass data from the parent to the child using props. If the child needs to send something back, I pass a function from the parent and call that function from the child.

So simply:
Parent → Child: Props
Child → Parent: Function through props