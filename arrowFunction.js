// confirm(mesage) --> Kullanıcının bir şeyi doğrulamasını veya kabul etmesini istiyorsanız, 
// --> genellikle bir onay kutusu kullanılır.
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
