function doSomething (){
    try {
     return theExactThing();
     } catch (error) {
      return 'failsafe';
     }
   }