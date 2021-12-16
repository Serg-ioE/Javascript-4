document.getElementById('comingUpContent').style.display = 'none';
document.getElementById('pastEventsContent').style.display = 'none';

function showComingUp() {
hidePanels();
document.getElementById('comingUpContent').style.display = 'block';
}
function showPastEvents() {
hidePanels();
document.getElementById('pastEventsContent').style.display = 'block';
}
function showEventsWeek() {
hidePanels();
document.getElementById('eventsWeekContent').style.display = 'block';
}
function hidePanels() {
document.getElementById('pastEventsContent').style.display = 'none';
document.getElementById('eventsWeekContent').style.display = 'none';
document.getElementById('comingUpContent').style.display = 'none';
}
