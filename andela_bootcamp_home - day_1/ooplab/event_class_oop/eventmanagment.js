
function Event(location, date) {
this.eventLocation = location;
this.eventDate = date;
this.eventCost = 0;
this.calcEventCost = calcCost;
}
function calcCost(guests) {
this.eventCost = guests * 25; // $25 per head
}
function RetirementEvent(retiree, company) {
this.guestOfHonor = retiree;
this.companyName = company;
this.showEventDetails = eventDetails;
}
function eventDetails() {
    return "Guest of honor: " + this.guestOfHonor + "Company: " + this.companyName + "Event date: " + this.eventDate+" +Event location: " + this.eventLocation +"Event cost: N" + this.eventCost.toLocaleString();
}

RetirementEvent.prototype = new Event();
var OjoRetirement = new RetirementEvent(
"Sam Ojo", "Alaka Funding");
OjoRetirement.eventLocation = "National Stadium, Surulere Lagos";
OjoRetirement.eventDate = "Nov 28, 2016";
OjoRetirement.calcEventCost(175);
OjoRetirement.showEventDetails();