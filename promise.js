function test(){
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
        setTimeout(() => {
            const success = true; // Change this to false to simulate an error
            if (success) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected.");
            }
        }, 5000);
    });
}

async function asyncTest() {
    const result = await test();
    return result;
    
}
try {
    const result = await asyncTest();
    console.log(result);
} catch (error) {
    console.error(error);
}

async function checkLTpointfive(){
    try {
        const result = await asyncTest();
        if (result < 0.5) {
            console.log("Result is less than 0.5");
        } else {
            console.log("Result is greater than or equal to 0.5");
        }
    } catch (error) {
        console.error(error);
    }
}