# Customer Support Zone (React)

This project is a React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using React-Toastify.

This project is a React-based ticket management UI where users can:

- view customer tickets
- move tickets into Task Status
- mark tasks as complete
- track In-Progress and Resolved counts from the banner

নিচে React-এর common interview-style প্রশ্নগুলোর সংক্ষিপ্ত উত্তর দেওয়া হলো।

## 1) What is JSX, and why is it used?

JSX এর পূর্ণরূপ **JavaScript XML**।  
সহজভাবে বলতে পরি , JSX ব্যবহার করে JavaScript-এর ভেতরে HTML-এর মতো syntax লেখা যায়।

উদাহরণ:

```jsx
const title = <h1>Hello React</h1>;
```

কেন JSX ব্যবহার করা হয়:

- UI structure সহজে বোঝা যায়
- Component code বেশি readable হয়
- JavaScript expression সরাসরি `{}` এর মাধ্যমে লেখা যায়

ভেতরে ভেতরে JSX `React.createElement(...)` এ convert হয়ে যায়।

## 2) What is the difference between State and Props?

সংক্ষেপে:

- **Props**: parent component থেকে child component-এ data পাঠানোর উপায় (read-only)
- **State**: component-এর নিজের পরিবর্তনশীল data

এই project-এ:

- `App.jsx` state হিসেবে tickets, taskStatus, resolvedTasks ধরে রাখে
- `MainSection` এবং `Banner` props হিসেবে ওই data নেয়

অর্থাৎ, props হলো incoming data, আর state হলো component-এর internal data।

## 3) What is the useState hook, and how does it work?

`useState` হলো function component-এ data store এবং update করার React hook।

```jsx
const [count, setCount] = useState(0);
```

যেভাবে কাজ করে:

1. শুরুতে initial value সেট হয় (`0`)
2. `setCount(...)` কল করলে state update হয়
3. React re-render করে নতুন UI দেখায়

Project example:

- Ticket click করলে `setTaskStatus(...)`
- Complete করলে `setResolvedTasks(...)` এবং `setTickets(...)`

## 4) How can you share state between components in React?

সবচেয়ে common পদ্ধতি: **Lift State Up**।

মানে:

- shared state parent component-এ রাখা হয়
- child component-এ props দিয়ে পাঠানো হয়
- child থেকে action trigger করার জন্য callback function পাঠানো হয়

এখানে:

- `App.jsx` হলো source of truth
- `Banner` count props নেয়
- `MainSection` data + handlers নেয় (`onAddToTask`, `onCompleteTask`)

এভাবে data flow predictable থাকে।

## 5) How is event handling done in React?

React-এ event handling করা হয় camelCase props দিয়ে, যেমন `onClick`, `onChange`, `onSubmit`।

উদাহরণ:

```jsx
<button onClick={handleComplete}>Complete</button>
```

এই project-এ:

- Ticket card click -> Task Status-এ add হয়
- Complete button click -> ticket Resolved-এ move হয়
- React-Toastify দিয়ে feedback toast দেখানো হয়

সোজা flow:
user action -> handler function -> state update -> UI update
