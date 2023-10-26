 
 // set constructor is built around an array

 function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset= subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
 }

 // can store data into dataStore array
 function add(data) {
    // arr.indexOf => index position if value is present in an array , -1 -> if value is not in array
    if(this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }  else {
        return false;
    }
 }

 // can remove from the dataStore array
 function remove(data) {
    let pos = this.dataStore.indexOf(data);
        if(pos > -1) {
            this.dataStore.splice(pos,1);
            return true;
        }  else {
            // no value
            return false;
        }
    
 }

 // can return all members of the set
 function show() {
    return this.dataStore;
 }

 // to check the presence of values
 function contains(data) {
    if(this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
 }

 // to check the length
 function size() {
    return this.dataStore.length;
 }


 // Union
 function union(set) {
    let tempSet = new Set();
    for(let i=0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    console.log(`tempSet =`, tempSet);

    for(let i=0; i < set.dataStore.length; i++) {
        if(!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return  tempSet;
 }

 // intersect
function intersect(set){
 let tempSet = new Set();
 for(let i=0; i < this.dataStore.length; i++)  {
    if(Set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
    }
}
return  tempSet;
}



 // subset
 // subset length is greater than original set => then it can't be subset
 function subset(set) {
    if(this.size() > set.size()) {
        return false;
    } else {
        this.dataStore.forEach(member => {
            if(!set.contains(member)) {
                return false;
            }
        });

    }
    return true;
 }


 // this function returns a set that contains those members of first set that are not in the second set

 function difference(set) {
    let tempSet = new Set();
    for(let i=0; i < this.dataStore.length; i++) {
        if(!set.contains(this.dataStore[i])){
            tempSet.add(this.dataStore[i])
        }
    }
    return tempSet;
 }



 