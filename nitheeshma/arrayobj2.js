var user={name:'nidhi'};

var permission1={canView:true};
var permission2={canEdit:true
};

Object.assign(user,permission1,permission2);

console.log(user);