<!--

// *** request sample ***
// mass:werk, N.Landsteiner 2007

var term;

var help = [
	'%+r **** termlib socket sample **** %-r',
	' ',
	'* type "get" and a filename to send a http-request,',
	'  use option -e for a JSON-style eval',
	'* type "help" for this page',
	'* type "exit" to quit.',
	' ',
	'TESTS:',
	'  for a normal file request try:  get tests/test1.txt',
	'  for an evaled JSON request try: get -e tests/test2.txt',
	' '
];

function termOpen() {
	if ((!term) || (term.closed)) {
		term = new Terminal(
			{
				x: 0,
				y: 0,
				termDiv: 'termDiv',
				bgColor: '#111111',
				crsrBlinkMode: true,
				greeting: help.join('\n'),
				handler: termHandler,
				exitHandler: termExitHandler
			}
		);
		term.open();
		
	}
}

function termExitHandler() {
	// reset the UI
	var mainPane = (document.getElementById)?
		document.getElementById('mainPane') : document.all.mainPane;
	if (mainPane) mainPane.className = 'lh15';
}

function pasteCommand(text) {
	// insert given text into the command line and execute
	var termRef = TermGlobals.activeTerm;
	if ((!termRef) || (termRef.closed)) {
		alert('Please open the terminal first.');
		return;
	}
	if ((TermGlobals.keylock) || (termRef.lock)) return;
	termRef.cursorOff();
	termRef._clearLine();
	for (var i=0; i<text.length; i++) {
		TermGlobals.keyHandler({which: text.charCodeAt(i), _remapped:true});
	}
	TermGlobals.keyHandler({which: termKey.CR, _remapped:true});
}

function termHandler() {
	this.newLine();
	
	this.lineBuffer = this.lineBuffer.replace(/^\s+/, '');
	var argv = this.lineBuffer.split(/\s+/);
	var cmd = argv[0];
	
	switch (cmd) {
		case 'get':
			if (argv[1] == '-e') {
				// option -e
				if (argv.length >= 3) {
					this.send(
						{
							url: argv[2],
							method: 'get',
							callback: myServerCallback,
							getHeaders: ['Content-Type', 'Content-Length']
						}
					);
					return;
				}
			}
			else if (argv.length >= 2) {
				// use default request-callback
				this.send(
					{
						url: argv[1],
						method: 'get'
					}
				);
				return;
			}
			this.write('Usage: send [-e] filename');
			break;

		case 'help':
			this.clear();
			this.write(help);
			break;

		case 'exit':
			this.close();
			return;

		default:
			if (this.lineBuffer != '') {
				this.type('command not found:' + '"'this.lineBuffer'"');
				this.newLine();
			}
	}
	this.prompt();
}

function myServerCallback() {
	var response=this.socket;
	if (response.success) {
		var func=null;
		try {
			func=eval(response.responseText);
		}
		catch (e) {
		}
		if (typeof func=='function') {
			try {
				func.apply(this);
			}
			catch(e) {
				this.write('An error occured within the imported function: '+e);
			}
		}
		else {
			this.write('Server Response:\n' + response.responseText);
		}
		this.newLine();
		this.write('Response Statistics:');
		this.newLine();
		this.write('  Content-Type: ' + response.headers.contentType);
		this.newLine();
		this.write('  Content-Length: ' + response.headers.contentLength);
	}
	else {
		var s='Request failed: ' + response.status + ' ' + response.statusText;
		if (response.errno) s +=  '\n' + response.errstring;
		this.write(s);
	}
	this.prompt();
}

//-->
