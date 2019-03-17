/**
Regular expression for matching [astral symbols](https://everything2.com/title/astral+plane).

@param exact - Only match an exact string. Useful with `RegExp#test()` to check if a string is a astral symbol. Default: `false` _(Matches any astral symbols in a string)_
@returns A `RegExp` for matching astral symbols.
*/
export default function astralRegex(exact?: boolean): RegExp;
