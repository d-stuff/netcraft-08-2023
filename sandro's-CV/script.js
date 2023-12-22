
function write_name() {
  let name = document.getElementById("name");
  let message = document.getElementById("write_message");

  message.innerHTML = "Welcome " + name.value;
}