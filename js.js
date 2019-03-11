/* "use strict";

window.addEventListener("DOMContentLoaded", get);

let toDoTemplate = document.querySelector(".toDo-template");
let toDoContainer = document.querySelector(".toDo");

function get() {
  fetch("https://todolist-80da.restdb.io/rest/todolist", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c829cedcac6621685acbcc9",
      "cache-control": "no-cache"
    }
  })
    .then(toDo => toDo.json())
    .then(toDo => {
      toDo.forEach(showToDo);
    });
}

function post(myTask) {
  const postData = JSON.stringify(myTask);
  fetch("https://todolist-80da.restdb.io/rest/todolist", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c829cedcac6621685acbcc9",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(toDo => toDo.json())
    .then(toDo => {
      form.elements.submit.disabled = false;
      form.elements.titel.value = null;
      form.elements.beskrivelse.value = null;
      form.elements.deadline.value = null;
      showToDo(toDo);
    });
}

function showToDo(opgave) {
  let klon = toDoTemplate.cloneNode(true).content;
  klon.querySelector(".titel").textContent = "Titel: " + opgave.titel;
  klon.querySelector(".beskrivelse").textContent =
    "Beskrivelse: " + opgave.beskrivelse;
  klon.querySelector(".deadline").innerText = "Deadline: " + opgave.deadline;
  klon.querySelector("article").dataset.id = opgave._id;
  klon.querySelector(".slet").addEventListener("click", e => {
    deleteToDo(opgave._id);
    e.target.parentElement.remove();
  });
  toDoContainer.appendChild(klon);
}

function deleteToDo(id) {
  fetch("https://todolist-80da.restdb.io/rest/todolist" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c829cedcac6621685acbcc9",
      "cache-control": "no-cache"
    }
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", e => {
  form.elements.submit.disabled = true;
  e.preventDefault();
  console.log("submitted");
  const data = {
    tiel: form.elements.name.value,
    beskrivelse: form.elements.breed.value,
    deadline: form.elements.age.value
  };
  post(data);
}); */

"use strict";

window.addEventListener("DOMContentLoaded", get);

let toDoTemplate = document.querySelector(".toDo-template");
let toDoContainer = document.querySelector(".toDo");

let sortby;

function get() {
  fetch("https://todolist-80da.restdb.io/rest/todolist", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c84f58ccac6621685acbd4c",
      "cache-control": "no-cache"
    }
  })
    .then(liste => liste.json())
    .then(liste => {
      liste.forEach(showListe);
    });
}

function post(myData) {
  const postData = JSON.stringify(myData);
  fetch("https://todolist-80da.restdb.io/rest/todolist", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c84f58ccac6621685acbd4c",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(liste => liste.json())
    .then(liste => {
      form.elements.submit.disabled = false;
      form.elements.titel.value = null;
      form.elements.beskrivelse.value = null;
      form.elements.deadline.value = null;
      showListe(liste);
    });
}

function showListe(opgave) {
  let klon = toDoTemplate.cloneNode(true).content;
  klon.querySelector(".titel").textContent = opgave.titel;
  klon.querySelector(".beskrivelse").textContent = opgave.beskrivelse;
  klon.querySelector(".deadline").textContent = "Senest: " + opgave.deadline;
  klon.querySelector("article").dataset.id = opgave._id;
  klon.querySelector(".slet").addEventListener("click", e => {
    deleteOpgave(opgave._id);
    e.target.parentElement.remove();
  });
  toDoContainer.appendChild(klon);
}

function deleteOpgave(id) {
  fetch("https://todolist-80da.restdb.io/rest/todolist/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c84f58ccac6621685acbd4c",
      "cache-control": "no-cache"
    }
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", e => {
  form.elements.submit.disabled = true;
  e.preventDefault();
  console.log("submitted");
  const nyOpgave = {
    titel: form.elements.titel.value,
    beskrivelse: form.elements.beskrivelse.value,
    deadline: form.elements.deadline.value
  };
  post(nyOpgave);
});

const hej = document.querySelector("form");
hej.elements.titel.addEventListener("blur", e => {
  // console.log(form.elements);
  if (hej.elements.titel.checkValidity()) {
    console.log("yes");
  } else {
    console.log("noo");
  }
});
