var middle_names = ["anal","anus","arse","ass","ass-fucker","asses","asshole","ballbag","balls","ballsack","bastard","beastiality","bellend",
"bestiality","biatch","bitch","bitcher","bitches","bitchin","bitching","bloody","blow job","blowjob","bollock","boner","boob","bugger","bum",
"bunny fucker","butt","butthole","buttmunch","buttplug","carpet muncher","cawk","cipa","clit","clitoris","clits","cock","cock-sucker",
"cockface","cockhead","cockmunch","cockmuncher","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cox","crap","cum","cummer",
"cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyberfuck","cyberfucked",
"cyberfucker","cyberfucking","damn","dick","dickhead","dildo","dog-fucker","dogging","donkeyribber","douche","ejaculate","ejaculated","ejaculating",
"ejaculation","fag","fagging","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fatass","feck","fecker","felching",
"fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fistfuck","fistfucked","fistfucker","fistfucking",
"fistfucks","flange","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fucking","fuckings","fuckingshitmotherfucker","fucks","fuckwhit",
"fuckwit","fudge packer","fudgepacker","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","God","god-dam","god-damned","goddamn",
"goddamned","hardcoresex","hell","homo","hore","horniest","horny","hotsex","jack-off","jackoff","jerk-off","jism","jiz","jizm","jizz","knob",
"knobead","knobed","knobend","knobhead","knobjocky","knobjokey","labia","lmfao","lust","lusting","masochist","master-bate","masterbate","masterbation",
"masturbate","mo-fo","mofo","mothafuck","mothafucka","mothafucked","mothafucker","mothafuckin","mothafucking","mother fucker","motherfuck",
"motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckka","muff","mutha","muthafecker","muthafuckker","muther",
"mutherfucker","nazi","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasm","pawn","pecker","penis","penisfucker","phonesex",
"pigfucker","piss","pissed","pisser","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks",
"pron","pube","pussy","rectum","retard","rimming","sadist","schlong","screwing","scrote","scrotum","semen","sex","shag","shagger","shaggin","shagging",
"shemale","shit","shitdick","shite","shitfuck","shitfull","shithead","shiting","shitted","shitter","shitting","shitty","skank","slut","smegma","smut",
"snatch","son-of-a-bitch","spac","spunk","teet","teez","testicle","tit","titfuck","tits","tittiefucker","titties","tittyfuck","tittywank","titwank",
"tosser","turd","twat","twathead","twatty","vagina","viagra","vulva","wang","wank","wanker","wanky","whore","willy","xrated"];

walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	v = v.replace(/\bTony Abbott\b/g, "Tony '" + getName() + "' Abbott");
	v = v.replace(/\bMr Abbott\b/g, "Mr '" + getName() + "' Abbott");
	v = v.replace(/\bMr. Abbott\b/g, "Mr. '" + getName() + "' Abbott");
	v = v.replace(/^Abbott\b/g, "'" + getName() + "' Abbott");
	v = v.replace(/\bAbbott Government\b/g, "Abbott '" + getName() + "' Government");

	// While we're here, Joe gets a bit too
	v = v.replace(/\bJoe Hockey\b/g, "Joe '" + getName() + "' Hockey");
	v = v.replace(/\bMr Hockey\b/g, "Mr '" + getName() + "' Hockey");
	v = v.replace(/\bMr. Hockey\b/g, "Mr. '" + getName() + "' Hockey");
	v = v.replace(/^Hockey\b/g, "'" + getName() + "' Hockey");

	textNode.nodeValue = v;
}

function getName()
{
	return middle_names[Math.floor(Math.random() * middle_names.length)];
}
