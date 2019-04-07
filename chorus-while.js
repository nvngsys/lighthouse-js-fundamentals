var chorus = "Let's dance!";
var repeat = 0;
// basic while
console.log(1 + "-While");
while(repeat < 10){
 console.log(chorus);
 repeat++;
}
console.log("Until the sun comes up!");
// while with if statement in it for conditional processing
console.log(2 + "-While with conditions");
repeat = 0;
while(repeat < 10){
    if (repeat ===  5){
        console.log("Change the message" + " @ " + repeat);
    }
 console.log(chorus + " @ " + repeat);
 repeat++;
}
console.log("Until the sun comes up!");

console.log(3 + "-For");
for (repeat = 0; repeat < 10; repeat++){
    console.log(chorus + " @ " + repeat);
}
console.log("Until the sun comes up!");