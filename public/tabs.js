const tabsContainer = document.getElementById('tabs');
const newTabBtn = document.getElementById('newTab');
const iframe = document.getElementById('sj-frame'); // Make sure to add this to your HTML!
const addressBar = document.getElementById('sj-address');

let tabs = [];
let activeTabId = null;

// 1. Function to Create a New Tab
function createTab(url = 'https://google.com') {
    const id = Date.now();
    const tab = { id, url, title: 'New Tab' };
    tabs.push(tab);
    renderTabs();
    switchTab(id);
}

// 2. Function to Switch Tabs
function switchTab(id) {
    activeTabId = id;
    const tab = tabs.find(t => t.id === id);
    if (tab) {
        // Here you'd call your Scramjet/Proxy logic to load the URL
        // Example: iframe.src = __sj.formatUrl(tab.url); 
        iframe.src = tab.url; 
        addressBar.value = tab.url;
    }
    renderTabs();
}

// 3. Function to Render the UI
function renderTabs() {
    tabsContainer.innerHTML = '';
    tabs.forEach(tab => {
        const tabEl = document.createElement('div');
        tabEl.className = `tab ${tab.id === activeTabId ? 'active' : ''}`;
        tabEl.innerText = tab.title;
        tabEl.onclick = () => switchTab(tab.id);
        tabsContainer.appendChild(tabEl);
    });
}

// 4. Event Listeners
newTabBtn.onclick = () => createTab();

// Start with one tab
createTab();
