import {expectType} from 'tsd-check';
import astralRegex from '.';

expectType<RegExp>(astralRegex());
expectType<RegExp>(astralRegex(true));
