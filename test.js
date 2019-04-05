import test from 'ava';
import astralRegex from '.';

const matches = [
	'💩',
	'🦄',
	'🎠',
	'🌈',
	'🐴',
	'😹'
];

const nonMatches = [
	'a',
	'안',
	'1',
	'Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞',
	'…',
	'π',
	'®'
];

test('matches', t => {
	for (const x of matches) {
		t.true(astralRegex({exact: true}).test(x));
	}

	for (const x of matches) {
		t.is((astralRegex().exec(`foo ${x} bar`) || [])[0], x);
	}
});

test('non matches', t => {
	for (const x of nonMatches) {
		t.false(astralRegex({exact: true}).test(x));
	}
});
