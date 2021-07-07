var obj;

fetch('https://random-data-api.com/api/coffee/random_coffee')
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {

      var blend_name = document.createElement("h2")
      var origin = document.createElement("h3");
      var notes = document.createElement("h4");

      blend_name.innerHTML = obj.blend_name;
      document.body.appendChild(blend_name);  

      origin.innerHTML = obj.origin;
      document.body.appendChild(origin);  

      notes.innerHTML = obj.notes;
      document.body.appendChild(notes);

    })