// Exercise 2: Groups (Set) Implementation

class Group {
  // Your code here.
  constructor() {
    this.group = [];
  }
  
  // Add a member to the group if it doesn't already exist
  add(member) {
    if (!this.group.includes(member)) {
      this.group.push(member);
    }
  }
  
  // Delete the member from the group if it exists
  delete(member) {
    const index = this.group.indexOf(member);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  }
  
  // Check if a member is a member of the group
  has(member) {
    return (this.group.includes(member))
  }

  // Create/update a group from an iterable object
  static from(group) {
    let updatedGroup = new Group();
    
    for (let member of group) {
      updatedGroup.add(member);
    }
    return updatedGroup;
  }
}
  
let group = Group.from([10, 40, 50, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group);
// → {group: [10, 40, 50, 20]}
group.delete(50);
console.log(group.has(50));
// → false