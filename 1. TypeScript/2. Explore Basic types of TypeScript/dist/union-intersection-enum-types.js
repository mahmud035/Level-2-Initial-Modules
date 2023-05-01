"use strict";
const newDeveloper = {
    name: 'John',
    expertise: 'Javascript',
    experience: 1,
};
const seniorDeveloper = {
    name: 'Alex',
    expertise: 'Typescript',
    experience: 2,
    leadershipExperience: 1,
    level: 'junior',
};
// NOTE: Using enum is not recommended
var Level;
(function (Level) {
    Level[Level["junior"] = 0] = "junior";
    Level[Level["mid"] = 1] = "mid";
    Level[Level["senior"] = 2] = "senior";
})(Level || (Level = {}));
