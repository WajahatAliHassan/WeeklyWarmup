class Password {
  constructor() {
    this.characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.numbers = "0123456789";
    this.lwCharacters = "abcdefghijklmnopqrstuvwxyz";
    this.spCharacters = "@#$%^&*~";
    this.length = 8;
  }

  weakPassword() {
    let finalpassword = "";
    let all = this.characters + this.numbers;
    for (let i = 0; i < this.length; i++) {
      let randomIndex = Math.floor(Math.random() * all.length);
      finalpassword += all[randomIndex];
    }
    return finalpassword;
  }
  mediumPassword() {
    let finalpassword = "";
    let all = this.characters + this.lwCharacters + this.numbers;
    for (let i = 0; i < this.length; i++) {
      let randomIndex = Math.floor(Math.random() * all.length);
      finalpassword += all[randomIndex];
    }
    return finalpassword;
  }
  strongPassword() {
    let finalpassword = "";
    let all =
      this.characters + this.lwCharacters + this.spCharacters + this.numbers;
    for (let i = 0; i < this.length; i++) {
      let randomIndex = Math.floor(Math.random() * all.length);
      finalpassword += all[randomIndex];
    }
    return finalpassword;
  }
}

let client1 = new Password();
document
  .getElementsByClassName("weakPassword")[0]
  .addEventListener("click", function () {
    let weak = client1.weakPassword();
    let password = document.getElementById("password");
    password.textContent = `Your Weak Password: ${weak}`;
  });

document
  .getElementsByClassName("mediumPassword")[0]
  .addEventListener("click", function () {
    let medium = client1.mediumPassword();
    let password = document.getElementById("password");
    password.textContent = `Your Medium Password: ${medium}`;
  });

document
  .getElementsByClassName("strongPassword")[0]
  .addEventListener("click", function () {
    let strong = client1.strongPassword();
    let password = document.getElementById("password");
    password.textContent = `Your Strong Password: ${strong}`;
  });
