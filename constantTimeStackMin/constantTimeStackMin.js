/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    this.storage=[];
    this.nbitems=0;
    this.minvalue=0


  // add an item to the top of the stack
    this.push = function(value) {

      this.storage.push(value)
      this.nbitems++;
      if(nthis.bitems===1){
        this.minvalue= value;
      }
      if(value < this.minvalue){
        this.minvalue = value
      }
    };

  // remove an item from the top of the stack
    this.pop = function() {
      this.storage.pop()
      this.nbitems--
    };

  // return the number of items in the stack
    this.size = function() {
      return this.nbitems

    };
  
  // return the minimum value in the stack
    this.min = function() {
      return this.minvalue

    };

  };

