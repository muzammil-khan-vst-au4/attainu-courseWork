function Battleground(username, weapon, level) {
    this.username = username;
    if(!weapon) {
        this.weapon="knife";
    } else {
        this.weapon = weapon;
    }
    if(!level) {
        this.level = "easy";
    } else {
        this.level = level;
    }
}
Battleground.prototype.changeWeapon = function(newWeapon) {
    if(newWeapon != "gun" && newWeapon != "knife" && newWeapon != "laser") {
        throw new Error("Only gun knife and laser are allowed");
    } else {
        this.weapon = newWeapon;
    }
    return this.weapon;
}
Battleground.prototype.changeLevel = function(newLevel) {
    if(newLevel != "easy" && newLevel != "medium" && newLevel != "difficult") {
        throw new Error("Only easy, medium and difficult levels are available");
    } else {
        this.level = newLevel;
    }
    return this.level;
}
Battleground.prototype.attack = function() {
    console.log("Atacking opponent with ", this.weapon);
    console.log(this.username,this.weapon,this.level);
}

var battleOne = new Battleground("depay");
battleOne.attack();