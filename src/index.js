class Sorter {
  constructor(arr=[]) {
    this.arr=arr;
  }

  add(element) {
    this.arr.push(element);
	return this.arr;
  }

  get length() {
	  
	  return this.arr.length;
  }

  at(index) {
	  return this.arr[index];
  }
  
  toArray() {
	var mass=[];
    for (var i=0; i<this.arr.length; i++) {
		mass[i]=this.arr[i];
	}
	return mass;
  }

  sort(indices) {
	 var n = indices.length;
	 if (n>2) {
    for (var i = 0; i < n; i++) {
		for (var i = 0; i < indices.length; i++){
		var v = this.arr[indices[ i ]], j = i-1;
		while (j >= 0 && this.arr[indices[ j ]] > v)
				{ this.arr[indices[ j+1 ]] = this.arr[indices[ j ]]; j--; }
		this.arr[indices[ j+1 ]] = v;
     }    
	 }	 
	 } else {
		if (indices[0]<indices[1]) {
		 if (this.arr[indices[0]] > this.arr[indices[1]]) {
			 var x=this.arr[indices[0]] ;
			 this.arr[indices[0]] = this.arr[indices[1]];
			this.arr[indices[1]] = x; 
		 }
		 } else {
		 if (this.arr[indices[1]] > this.arr[indices[0]]) {
			 var x=this.arr[indices[0]] ;
			 this.arr[indices[0]] = this.arr[indices[1]];
			this.arr[indices[1]] = x;
		 }
	 }}
    return this.arr; 
}

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;