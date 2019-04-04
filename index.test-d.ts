import {expectType} from 'tsd';
import astralRegex = require('.');

expectType<RegExp>(astralRegex());
expectType<RegExp>(astralRegex(true));
