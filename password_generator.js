let password = "";

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let specialChar = "!@#$%^&()~`<>/,.[]{:;'}|";

document.getElementById("wp").addEventListener("click", () => {
  password = "";
  let len = prompt(
    "Please enter the length of password that you want to generate (<=30)"
  );

  while (len < 1 || len > 30 || len == null || isNaN(len)) {
    alert("Please enter a valid password length!");
    len = prompt(
      "Please enter the length of password that you want to generate"
    );
  }
  while (password.length <= len) {
    let lower = Math.floor(Math.random() * 27);
    password = password + lowercase.charAt(lower);
  }
  if (password.length > len) {
    password = password.substring(0, len);
  }

  document.getElementById("passw").innerHTML = password;
});

document.getElementById("np").addEventListener("click", () => {
  password = "";
  let len = prompt(
    "Please enter the length of password that you want to generate"
  );

  while (len < 1 || len > 30 || len == null || isNaN(len)) {
    alert("Please enter a valid password length!");
    len = prompt(
      "Please enter the length of password that you want to generate"
    );
  }
  while (password.length <= len) {
    let lower = Math.floor(Math.random() * 27);
    let upper = Math.floor(Math.random() * 27);
    password = password + lowercase.charAt(lower) + uppercase.charAt(upper);
  }
  if (password.length > len) {
    password = password.substring(0, len);
  }
  document.getElementById("passw").innerHTML = password;
});

document.getElementById("sp").addEventListener("click", () => {
  password = "";
  let len = prompt(
    "Please enter the length of password that you want to generate"
  );

  while (len < 1 || len > 30 || len == null || isNaN(len)) {
    alert("Please enter a valid password length!");
    len = prompt(
      "Please enter the length of password that you want to generate"
    );
  }
  while (password.length <= len) {
    let lower = Math.floor(Math.random() * 27);
    let upper = Math.floor(Math.random() * 27);
    let num = Math.floor(Math.random() * 11);
    password =
      password +
      lowercase.charAt(lower) +
      uppercase.charAt(upper) +
      number.charAt(num);
  }
  if (password.length > len) {
    password = password.substring(0, len);
  }
  document.getElementById("passw").innerHTML = password;
});

document.getElementById("ssp").addEventListener("click", () => {
  password = "";
  let len = prompt(
    "Please enter the length of password that you want to generate"
  );

  while (len < 1 || len > 30 || len == null || isNaN(len)) {
    alert("Please enter a valid password length!");
    len = prompt(
      "Please enter the length of password that you want to generate"
    );
  }
  while (password.length <= len) {
    let lower = Math.floor(Math.random() * 27);
    let upper = Math.floor(Math.random() * 27);
    let num = Math.floor(Math.random() * 11);
    let spChar = Math.floor(Math.random() * 26);
    password =
      password +
      lowercase.charAt(lower) +
      uppercase.charAt(upper) +
      number.charAt(num) +
      specialChar.charAt(spChar);
  }
  if (password.length > len) {
    password = password.substring(0, len);
  }

  document.getElementById("passw").innerHTML = password;
});

document.getElementsByClassName("copy")[0].addEventListener("click", () => {
  let copyText = document.getElementsByClassName("pass")[0];
  if(copyText.innerHTML == "Your password"){
    navigator.clipboard.writeText("");
  }
  else{
    navigator.clipboard.writeText(copyText.innerHTML);
  }

  let copy = document.getElementById("myCopyClip");
  copy.innerHTML = "Copied to clipboard ";
});

document
  .getElementsByClassName("copy")[0]
  .addEventListener("mouseenter", () => {
    let clip = document.getElementById("myCopyClip");
    clip.innerHTML = "Copy to clipboard";
  });
