function Vehicle(name) {
  this.name = "Vehicle"
}
 
// Functions for the parent object
Vehicle.prototype = {
  drive: function(){
    return this.name + " drives forward";
  },
  stop: function(){
    return this.name + " stops";
  }
}
 
function Truck(name) {
  this.name = name
}
 
// Inherit from Vehicle
Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;
 
// Overwrite drive parent method
Truck.prototype.drive = function(){
 
  // Call the parent method with apply so that the parent
  // method can access the Trucks name value
  var driveMsg = Vehicle.prototype.drive.apply(this);
  return driveMsg += " through a field";
}
 