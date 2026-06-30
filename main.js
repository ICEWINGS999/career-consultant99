document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav.links');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }

  var form = document.querySelector('form.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();

      var fname = document.getElementById('fname');
      var lname = document.getElementById('lname');
      var email = document.getElementById('email');
      var stage = document.getElementById('stage');
      var msg = document.getElementById('msg');

      var lines = [
        "Hi Bright, I'd like to get in touch.",
        "",
        "Name: " + (fname ? fname.value : "") + " " + (lname ? lname.value : ""),
        "Email: " + (email ? email.value : ""),
        "Stage: " + (stage ? stage.value : ""),
        "Message: " + (msg && msg.value ? msg.value : "—")
      ];
      var text = encodeURIComponent(lines.join("\n"));

      var number = window.WHATSAPP_NUMBER || "";
      var url = "https://wa.me/" + number + "?text=" + text;

      window.open(url, '_blank');
    });
  }
});