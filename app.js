var arrData = [undefined, null, "", 1, 0, "0", "1", false, "3", true, "4"];
console.log(arrData);
document.getElementById("arrayData").innerHTML = JSON.stringify(arrData);

clearArray(arrData);

function clearArray(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (
      typeof arr[index] === "boolean" ||
      typeof arr[index] === "number" ||
      typeof arr[index] === "undefined" ||
      typeof arr[index] === "object" ||
      arr[index] === ""
    ) {
      console.log("Removed ", arr[index], " from array");
      var node = document.createElement("LI");
      var str = 'Removed <span style="color:red">"' + arr[index] + '"</span>  from array';
      node.innerHTML = str;
      document.getElementById("removedItems").appendChild(node);
      arr.splice(arr.indexOf(arr[index]), 1);
      arrData = arr;
      clearArray(arr);
    }
  }
}

console.log(arrData);
document.getElementById("newArrayData").innerHTML = JSON.stringify(arrData);
