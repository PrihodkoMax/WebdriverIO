function testIdResult() {
  
  // Generate a unique ID
  let id = Math.random().toString(36).substr(2, 9);

  // Perform some test
  let testResult = performTest();

  // Check the test result
  if (testResult) {
    console.log("Test Success");
  } else {
    console.log("Test Failed");
  }

  // Return an object with the ID and test result
  return {
    id: id,
    result: testResult
  };
  
  function performTest() {
    // Perform some test and return the result
    return true && false
  
  }

}

// console.log(testIdResult())

export default testIdResult();