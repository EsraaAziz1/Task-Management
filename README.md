# Task Management App 📝

A dynamic and interactive **Task Management System** built with vanilla JavaScript that helps teams efficiently organize, assign, and track tasks in real-time. Perfect for small teams or personal productivity!

---

## Features

- **Add Tasks Easily**  
  Add tasks using a simple input field. Alerts prevent empty tasks for clean task lists.

- **Team Management**  
  Enter team member names separated by commas. The app dynamically creates columns for each team member to assign tasks.

- **Drag & Drop Task Assignment**  
  Drag tasks from the unassigned list to any team member using native HTML5 drag-and-drop functionality.

- **Task Status Management**  
  Each task has a status dropdown:  
  - **Not Started** → Red  
  - **OnGoing** → Blue  
  - **Finished** → Green (task becomes non-draggable)

- **Remove Tasks**  
  Tasks can be removed before or after assignment using the ❌ button. Counters update automatically.

- **Dynamic Counters**  
  Total task counter updates in real-time. Each team member has their own task counter.

- **Visual Feedback**  
  Dragging highlights available drop zones. Finished tasks are visually locked and cannot be moved.

- **Unique Task IDs**  
  Each task is assigned a unique ID using `Date.now()` for easy reference.

---

## How to Use

1. Open the app in a browser.
2. Enter team member names separated by commas.  
3. Enter your tasks in the input field and click **Add Task**.  
4. Drag tasks to assign them to team members.  
5. Use the dropdown in each task to update its status.  
6. Remove tasks with the ❌ button as needed.  

---

## Technologies Used

- **HTML5 / CSS3** – Structure and styling  
- **Vanilla JavaScript** – DOM manipulation, event handling, drag-and-drop logic  

---

## Future Improvements

- Save tasks and team assignments in **localStorage** or a database.  
- Add **deadline dates** and **priority levels**.  
- Implement **task filtering** by status or team member.  
