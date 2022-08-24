function listboxresult() {
  let spanresult = document.getElementById("result");
  spanresult.value = "";
  let sel = document.getElementById("sel");
  for (let i = 0; i < sel.options.length; i++) {
    if (sel.options[i].selected === true) {
      spanresult.value += sel.options[i].value + " ";
      document.getElementById("result").innerHTML = spanresult.value;
      document.getElementById("result").style.color = "green";
    }
  }
  if (document.getElementById("result").value == "") {
    document.getElementById("result").innerHTML = "請選擇選項";
    document.getElementById("result").style.color = "red";
  }
}
