import './style.css';
import Task from './modules/task.js';
import DisplayManager from './modules/display_manager.js';

const selector = (element) => document.querySelector(element);

let tasks = [];

tasks = tasks.sort((a, b) => a.index - b.index);

tasks.forEach((task) => DisplayManager.displayTask(selector('.tasks'), task));
