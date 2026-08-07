// ==========================================================================
// Smart Todo Manager - JavaScript Logic
// ==========================================================================

// Wait for the DOM to be fully loaded before attaching events
document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. DOM Elements Selection
  // ------------------------------------------------------------------------
  const todoForm = document.getElementById('todo-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const remainingCount = document.getElementById('remaining-count');
  const clearCompletedBtn = document.getElementById('clear-completed-btn');
  const filterButtons = document.querySelectorAll('[data-filter]');

  // Badge elements for filter counts
  const countAll = document.getElementById('count-all');
  const countActive = document.getElementById('count-active');
  const countCompleted = document.getElementById('count-completed');

  // LocalStorage key name
  const STORAGE_KEY = 'smart_todo_tasks';

  // ------------------------------------------------------------------------
  // 2. Application State
  // ------------------------------------------------------------------------
  // Active filter state: 'all' | 'active' | 'completed'
  let currentFilter = 'all';

  // Load initial tasks from LocalStorage or initialize with default sample tasks
  let tasks = loadTasks();

  // ------------------------------------------------------------------------
  // 3. Helper & LocalStorage Functions
  // ------------------------------------------------------------------------

  /**
   * Load tasks array from LocalStorage.
   * If no data is stored yet, return initial default tasks.
   */
  function loadTasks() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing stored tasks:', e);
        return [];
      }
    }

    // Default initial sample tasks when app is run for the first time
    return [
      { id: 1, title: 'Setup CI/CD deployment workflow for DevOps assignment', completed: false },
      { id: 2, title: 'Review and approve team pull requests on feature/frontend-ui', completed: false },
      { id: 3, title: 'Prepare documentation for university submission', completed: false },
      { id: 4, title: 'Design HTML5 and CSS3 user interface component', completed: true }
    ];
  }

  /**
   * Save current tasks array to LocalStorage.
   */
  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  /**
   * Escape special HTML characters to prevent XSS attacks.
   * @param {string} str 
   * @returns {string} Safe HTML string
   */
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ------------------------------------------------------------------------
  // 4. Core Features (Add, Toggle, Delete, Clear, Filter, Render)
  // ------------------------------------------------------------------------

  /**
   * Add a new task item to the state.
   * @param {string} title - Task description
   */
  function addTask(title) {
    const trimmedTitle = title.trim();
    // Requirement 1: Ignore empty input
    if (!trimmedTitle) return;

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false
    };

    tasks.unshift(newTask); // Add to the top of the list
    saveTasks();
    render();
  }

  /**
   * Toggle completed status of a task by ID.
   * @param {number|string} id 
   */
  function toggleTask(id) {
    tasks = tasks.map(task => {
      if (task.id == id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    saveTasks();
    render();
  }

  /**
   * Delete a task by ID.
   * @param {number|string} id 
   */
  function deleteTask(id) {
    tasks = tasks.filter(task => task.id != id);
    saveTasks();
    render();
  }

  /**
   * Clear all completed tasks.
   */
  function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    render();
  }

  /**
   * Filter tasks based on current filter selection ('all', 'active', 'completed').
   */
  function getFilteredTasks() {
    if (currentFilter === 'active') {
      return tasks.filter(task => !task.completed);
    }
    if (currentFilter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks; // 'all'
  }

  /**
   * Update all task counter displays and badges.
   */
  function updateCounters() {
    const totalCount = tasks.length;
    const activeCount = tasks.filter(task => !task.completed).length;
    const completedCount = totalCount - activeCount;

    // Requirement 6: Update remaining task count automatically
    if (remainingCount) {
      remainingCount.textContent = activeCount;
    }

    // Update filter badges if present
    if (countAll) countAll.textContent = totalCount;
    if (countActive) countActive.textContent = activeCount;
    if (countCompleted) countCompleted.textContent = completedCount;
  }

  /**
   * Create HTML template for a single task item.
   * Matches exact CSS classes from HTML structure.
   */
  function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-card ${task.completed ? 'task-completed' : ''}`;
    li.setAttribute('data-task-id', task.id);

    li.innerHTML = `
      <div class="task-content">
        <label class="custom-checkbox-wrapper" for="task-checkbox-${task.id}">
          <input 
            type="checkbox" 
            id="task-checkbox-${task.id}" 
            class="task-checkbox" 
            ${task.completed ? 'checked' : ''} 
            aria-label="Mark task as complete"
          >
          <span class="checkbox-custom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
        </label>
        <div class="task-details">
          <span class="task-title">${escapeHtml(task.title)}</span>
          ${task.completed ? `
            <div class="task-meta">
              <span class="tag tag-completed">Completed</span>
            </div>
          ` : ''}
        </div>
      </div>
      <button type="button" class="btn-delete" id="delete-btn-${task.id}" data-task-id="${task.id}" aria-label="Delete task">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    `;

    return li;
  }

  /**
   * Main render function to update DOM.
   */
  function render() {
    // Clear list
    taskList.innerHTML = '';

    const filteredTasks = getFilteredTasks();

    // Render filtered tasks
    filteredTasks.forEach(task => {
      const taskNode = createTaskElement(task);
      taskList.appendChild(taskNode);
    });

    // Update counter elements
    updateCounters();
  }

  // ------------------------------------------------------------------------
  // 5. Event Listeners
  // ------------------------------------------------------------------------

  // Requirement 1: Add task on form submit (Button click or Enter key)
  if (todoForm) {
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask(taskInput.value);
      taskInput.value = ''; // Reset input field
    });
  }

  // Event Delegation for Task List (Checkboxes & Delete Buttons)
  if (taskList) {
    taskList.addEventListener('click', (e) => {
      // Find closest delete button if clicked
      const deleteBtn = e.target.closest('.btn-delete');
      if (deleteBtn) {
        const taskId = deleteBtn.getAttribute('data-task-id');
        deleteTask(taskId);
        return;
      }

      // Checkbox click is handled via change event or click
      const checkbox = e.target.closest('.task-checkbox');
      if (checkbox) {
        const taskCard = checkbox.closest('.task-card');
        if (taskCard) {
          const taskId = taskCard.getAttribute('data-task-id');
          toggleTask(taskId);
        }
      }
    });
  }

  // Requirement 4: Filter tasks (All, Active, Completed)
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all filter buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked filter button
      button.classList.add('active');

      // Update filter state and re-render
      currentFilter = button.getAttribute('data-filter') || 'all';
      render();
    });
  });

  // Requirement 7: Clear completed tasks
  if (clearCompletedBtn) {
    clearCompletedBtn.addEventListener('click', () => {
      clearCompleted();
    });
  }

  // Initial render on application load
  render();

});
