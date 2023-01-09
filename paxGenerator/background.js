function fillData() {
    Array.prototype.random = function () {
        return this[Math.floor((Math.random() * this.length))];
    }
    var names = ["Arnold", "Jim", "Emma", "Robert", "Daniel", "Chris", "Leonardo", "Tom", "Brad", "Charles", "Morgan", "Tom", "Hugh", "Matt", "Sylvester", "Will", "Clint", "Cameron", "George", "Steven", "Harrison", "Robert", "Al", "Robert", "Russell", "Liam", "Kate", "Mark", "Natalie", "Pierce", "Sean", "Orlando", "Dwayne", "Jackie", "Angelina", "Adam", "Scarlett", "Heath", "Anne", "Jessica", "Edward", "Keira", "Bradley", "Will", "Julia", "Nicolas", "Daniel", "Keanu", "Ian", "Halle", "Bruce", "Samuel", "Ben", "Tommy", "Antonio", "Denzel", "Steve", "Shia", "Megan", "James", "Mel", "Vin", "Tim", "Robin", "Kevin", "Jason", "Seann", "JeanClaude", "Zach", "Owen", "Christian", "Peter", "Sandra", "Bruce", "Drew", "Macaulay", "Jack", "Bill", "Sigourney", "Jake", "Jason", "Jet", "Kate", "Rowan", "Marlon", "John", "Channing", "Ben", "Shah", "Jennifer", "Emma", "Chris", "James", "James", "Amitabh", "Brendan", "Rachel", "Tom", "Aamir", "Johnny"];
    var surnames = ["Schwarzenegger", "Carrey", "Watson", "Downey", "Radcliffe", "Evans", "DiCaprio", "Cruise", "Pitt", "Chaplin", "Freeman", "Hanks", "Jackman", "Damon", "Stallone", "Smith", "Eastwood", "Diaz", "Clooney", "Spielberg", "Ford", "DeNiro", "Pacino", "Downey", "Crowe", "Neeson", "Winslet", "Wahlberg", "Portman", "Brosnan", "Connery", "Bloom", "Johnson", "Chan", "Jolie", "Sandler", "Johansson", "Ledger", "Hathaway", "Alba", "Norton", "Knightley", "Cooper", "Ferrell", "Roberts", "Cage", "Craig", "Reeves", "McKellen", "Berry", "Willis", "Jackson", "Stiller", "Lee", "Banderas", "Washington", "Carell", "LaBeouf", "Fox", "Franco", "Gibson", "Diesel", "Allen", "Williams", "Spacey", "Biggs", "William", "Van", "Galifianakis", "Wilson", "Bale", "Jackson", "Bullock", "Lee", "Barrymore", "Culkin", "Nicholson", "Murray", "Weaver", "Gyllenhaal", "Statham", "Li", "Beckinsale", "Atkinson", "Brando", "Travolta", "Tatum", "Affleck", "Rukh", "Aniston", "Stone", "Hemsworth", "McAvoy", "Cameron", "Bachchan", "Fraser", "McAdams", "Hiddleston", "Khan", "Depp"];
    document.querySelectorAll('[id^="name"]').forEach(n => n.value = names.random());
    document.querySelectorAll('[id^="surname"]').forEach(n => n.value = surnames.random());
    document.querySelectorAll('[id^="contact_name"]').forEach(n => n.value = names.random());
    document.querySelectorAll('[id^="contact_surname"]').forEach(n => n.value = surnames.random());
    document.querySelectorAll('[id^="gender"]').forEach((n, i) => n.value = i % 2 === 0 ? "M" : "F");
    document.querySelectorAll('[id^="nationality"]').forEach(n => n.value = "TR");
    document.querySelectorAll('[id^="ADLTbirthDay"]').forEach(n => n.value = '01/01/1990');
    document.querySelectorAll('[id^="CHLDbirthDay"]').forEach(n => n.value = '01/01/2018');
    document.querySelectorAll('[id^="INFTbirthDay"]').forEach(n => n.value = '01/01/2022');
    document.querySelectorAll('[id*="frst-tel-number"]').forEach(n => n.value = "+90 555 555 5555");
    document.querySelectorAll('[id*="email"]').forEach(n => n.value = names.random().toLowerCase() + "@" + surnames.random().toLowerCase() + ".com");
}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: fillData
        });
    }
});

chrome.contextMenus.create({
    id: "theid",
    title: "Fill Pax Data!",
    documentUrlPatterns: ["https://*/*RezvPaxEntry*", "http://*/*RezvPaxEntry*"]
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: fillData
        });
    }
})

