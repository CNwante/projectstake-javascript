// Exercise 3: Iterable Implementation

// Your code here (and the code from the previous exercise 2)

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
  
  // Return a new instance of GroupIterator with the reference to this group
  [Symbol.iterator]() {
    return new GroupIterator(this);
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

class GroupIterator {
	constructor(member) {
      this.group = member.group;
      this.currentIndex = 0;
	}
	
  next() {
    if (this.currentIndex < this.group.length) {
      const value = this.group[this.currentIndex];
      this.currentIndex++;
      return {value, done: false}
    }
    else {
      return { done: true };
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c