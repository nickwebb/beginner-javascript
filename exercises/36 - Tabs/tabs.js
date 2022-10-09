// first you get hold of the different elements. The class tabs, and then
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  console.dir(tabButtons);
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });

  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it!
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
