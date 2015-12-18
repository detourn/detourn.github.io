$('#cmd').terminal(function(command, term) {
  if (command == 'm') {
    $('#command').load("https://unilogue.github.io/commands #div1");
  } else if (command == 'd') {
    $('#command').load("https://unilogue.github.io/commands #div2");
  } else if (command == 'g') {
    $('#command').load("https://unilogue.github.io/commands #div3");
  } else if (command == 'git') {
    window.open('https://github.com/unilogue', '_blank');
  } else if (command == '?') {
    term.echo('COMMANDS: [m]ap\t\t[d]erive\t[g]lossary\r\n\t\t  [?] help\t [clear]\t [git]hub');
  } else if (command != '') {
    term.echo('Command not found!');
  }
}, {
  greetings: 'COMMANDS: [m]ap\t\t[d]erive\t[g]lossary\r\n\t\t  [?] help\t [clear]\t [git]hub',
  name: 'unilogue',
  prompt: '> '
});
