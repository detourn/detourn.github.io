jQuery(function($, undefined) {
		
	    $('body').terminal({
			glossary: function() {
				window.open('http://viperslang.tumblr.com/post/63454146164');
			 },
        
        map: function() {
         this.echo('<p><small>Created with <a href="https://github.com/unilogue/datamaps" target="_blank">datamaps</a></small><br><br><b>A majority of Vice\'s viewers are from core countries, or the first world. The transparent countries mostly consist of peripheral countries, or the third world. Lighter shades indicate more viewership while darker indicates less. The U.S.A. makes up the most at 36.2%.</b></p>', {raw:true});
			 },
		
		
			github: function() {
				window.open('https://github.com/unilogue','_blank');
			},
		
		    help: function() {
		        this.echo('commands:');
		        this.echo('\tmap...................................research paper');
		        this.echo('\tderive................................digital personae');
		        this.echo('\tglossary..............................a cyber love poem');
			this.echo('\tclear.................................clears the screen');
			this.echo('\tgithub................................my github profile');
		        this.echo('\thelp..................................this help screen');
		    },
		    
		    terminal_color: function(a) {
				if (a == 'normal') {
		          $('body').css("background-color", '#000');
		        } else {
		          $('body').css("background-color", a);
		        }
		    },
	    }, {
	        greetings: 'type `help` for a list of commands.\r\n',
	        name: 'unilogue',
	        height: window.innerHeight - 36,
	        prompt: '> '
		});
	});
