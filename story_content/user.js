function ExecuteScript(strId)
{
  switch (strId)
  {
      case "644LcQpQIYY":
        Script1();
        break;
      case "6io0WI06opz":
        Script2();
        break;
      case "6DLqJtXOaes":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var text = player.GetVar("MiPassword");
copyFunction (text);

function copyFunction(tt) {
  
  const copyText = tt;
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}
}

function Script2()
{
  var player = GetPlayer();
var text = player.GetVar("WestonCollege");
copyFunction (text);

function copyFunction(tt) {
  
  const copyText = tt;
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}
}

function Script3()
{
  var player = GetPlayer();
var text = player.GetVar("email_pass");
copyFunction (text);

function copyFunction(tt) {
  
  const copyText = tt;
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}
}

