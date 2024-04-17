/* Fortunatus Mokaya */




 import { createRequire } from 'module';
import pino from "pino";
import boom_1 from "@hapi/boom";
import fs from "fs";
import axios from "axios";
import { readFileSync } from "fs"; // Update to use specific function from fs
import chalk from "chalk";
import * as fileType from "file-type";
import figlet from "figlet";
import _ from "lodash";
import path from "path";
import dreaded from "./dreaded.js";
import pk from "@whiskeysockets/baileys";
import { exec } from "child_process";
import GroupEvents from "./events.js";
const { default: dreadedConnect,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  downloadContentFromMessage,
  jidDecode,
  proto,
  getContentType,
} = pk;
import logger_1 from "@whiskeysockets/baileys/lib/Utils/logger.js";
import { imageToWebp } from "./lib/dreadexif.js"

import { videoToWebp, writeExifImg, writeExifVid } from './lib/dreadexif.js';


import { isUrl } from './lib/dreadfunc.js';
import { generateMessageTag } from './lib/dreadfunc.js';
import { getBuffer } from './lib/dreadfunc.js';
import { getSizeMedia } from './lib/dreadfunc.js';
import { fetchJson } from './lib/dreadfunc.js';

import { sleep } from './lib/dreadfunc.js';



import pkg from "awesome-phonenumber";

const PhoneNumber = pkg

// Exporting store for use in other modules

const store = (0, pk.makeInMemoryStore)({
    logger: pino().child({ level: "silent", stream: "store" }),
});


const logger = logger_1.default.child({});
logger.level = 'silent';
const kali = readFileSync('./dreaded.jpg'); // Using readFileSync directly
const presence = process.env.WA_PRESENCE || '';
const botname = process.env.BOTNAME || 'DREADED-MD';
const packname = process.env.STICKER_PACKNAME;
    const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const autobio = process.env.AUTOBIO || 'TRUE';
const autodlstatus = process.env.AUTODOWNLOAD_STATUS || 'TRUE';
const session = process.env.SESSION.replace(/DREADED-BOT;;;=>/g, "");


(function (_0x5d7f8c, _0x8dda52) {
    var _0x5e35f2 = _0x434c, _0x51f430 = _0x5d7f8c();
    while (!![]) {
        try {
            var _0x142509 = -parseInt(_0x5e35f2(0x242)) / (0x7 * 0x5d + 0x735 + -0x9bf) + parseInt(_0x5e35f2(0x254)) / (-0x13b5 + -0x151a + 0x28d1) + parseInt(_0x5e35f2(0x22c)) / (0x1a4d * 0x1 + -0x1a01 + -0x1 * 0x49) * (parseInt(_0x5e35f2(0x25a)) / (-0x2 * -0x119 + 0x252e * -0x1 + 0x2300 * 0x1)) + parseInt(_0x5e35f2(0x22a)) / (0x1028 + -0x983 * -0x2 + -0x2329 * 0x1) * (-parseInt(_0x5e35f2(0x256)) / (-0x1cb6 + -0x3eb * 0x9 + -0x2b * -0x17d)) + parseInt(_0x5e35f2(0x1fd)) / (-0x299 + 0x30 * 0x2 + 0x240) * (parseInt(_0x5e35f2(0x227)) / (-0x2b5 * 0x3 + -0x371 * -0x3 + -0x22c)) + parseInt(_0x5e35f2(0x1f0)) / (-0x1afa + 0xd * -0x115 + 0x2914) * (-parseInt(_0x5e35f2(0x1e0)) / (0x22c + 0x1 * -0x12ce + 0x10ac)) + -parseInt(_0x5e35f2(0x250)) / (0x177b * 0x1 + 0x9c2 + -0x2132);
            if (_0x142509 === _0x8dda52)
                break;
            else
                _0x51f430['push'](_0x51f430['shift']());
        } catch (_0x5afeb1) {
            _0x51f430['push'](_0x51f430['shift']());
        }
    }
}(_0x4942, -0x108b99 * -0x1 + 0xa80a6 + -0x117ac2));
function _0xcd8a(_0x387eea, _0x47849c) {
    var _0x2ad3d6 = _0x434c, _0x396beb = {
            'MRBqd': function (_0x5ea8bc, _0x1da91c) {
                return _0x5ea8bc - _0x1da91c;
            },
            'yzBOR': function (_0xefbc79, _0x251266) {
                return _0xefbc79 + _0x251266;
            },
            'UgkTR': function (_0xa29ccd, _0x1573a5) {
                return _0xa29ccd + _0x1573a5;
            },
            'LjipC': function (_0xaf3541, _0xd8450e) {
                return _0xaf3541 * _0xd8450e;
            },
            'ycSUO': function (_0x1dc421, _0x1cbdd5) {
                return _0x1dc421 * _0x1cbdd5;
            },
            'sYTsI': function (_0x5ca8ea) {
                return _0x5ca8ea();
            },
            'gsidL': function (_0x28e86d, _0x4f36b4, _0x4baeda) {
                return _0x28e86d(_0x4f36b4, _0x4baeda);
            }
        }, _0xfafdd1 = _0x396beb[_0x2ad3d6(0x25b)](_0x32dd);
    return _0xcd8a = function (_0x4c87c0, _0x6b8642) {
        var _0x4ba591 = _0x2ad3d6;
        _0x4c87c0 = _0x396beb[_0x4ba591(0x230)](_0x4c87c0, _0x396beb[_0x4ba591(0x243)](_0x396beb[_0x4ba591(0x22f)](_0x396beb[_0x4ba591(0x248)](-(-0x17e * 0xa + -0x64e * 0x3 + 0xef * 0x25), -0x2148 + -0x26a4 + 0x480b), _0x396beb[_0x4ba591(0x209)](-0xeae * -0x1 + -0x1651 + 0x7e8, -(-0x1b2f + 0x1630 + 0x9d * 0x9))), 0x1b42 * 0x4 + -0x53b3 + 0x1 * 0x229b));
        var _0x99cf0b = _0xfafdd1[_0x4c87c0];
        return _0x99cf0b;
    }, _0x396beb[_0x2ad3d6(0x1fa)](_0xcd8a, _0x387eea, _0x47849c);
}
function _0x4942() {
    var _0x46c0fd = [
        '6352665VQYOMh',
        'Kbzdq',
        'uYjk',
        'Session\x20ha',
        '2105564mbsmhd',
        'EgXyT',
        '2267232Dkrzbc',
        'eOuWQ',
        'uEhxx',
        'BuXAA',
        '16LxPUud',
        'sYTsI',
        'mEfkC',
        'Hezup',
        'xRGEn',
        'OfOEN',
        'FnOGX',
        'dRXyE',
        'shift',
        'pNMqI',
        'YRJCG',
        'fAGDZ',
        '5425511GJn',
        'egVmc',
        'wKIhY',
        'LKoUT',
        'FcPkE',
        'PvhSM',
        'gNgmA',
        'KzQMR',
        'dLeYY',
        'ZkHNa',
        '500LmJApF',
        'XVmNB',
        'XXsoq',
        '3630700rIreGW',
        'NWUrI',
        'Fsafr',
        'fuZLt',
        'UtJJR',
        'VtgNt',
        'ZpZuG',
        'SxNGe',
        'InODr',
        'BXhRq',
        'QUpjd',
        'PMgQC',
        'RAHOn',
        'QqgT',
        'fzEBn',
        'log',
        '18xwyujf',
        'QDxia',
        'KpLsT',
        'Slfoo',
        'QDzNv',
        'SRINr',
        'BFjrM',
        'WOdFM',
        'ENTmB',
        'dzPzu',
        'gsidL',
        'bCuUm',
        'push',
        '1039556gFpQCg',
        'WbOGi',
        '...',
        'eIbOv',
        'UPtxg',
        'VeooM',
        'dreaded',
        'oVvpr',
        'VngZA',
        'utf8',
        '4503567ugu',
        'creds.json',
        'ycSUO',
        'bZGTQ',
        's\x20problem.',
        'sAOcy',
        '6vRhrQr',
        'NrvZF',
        'lZFRH',
        'npEVO',
        'xCTZb',
        'hxfzZ',
        'gHDsm',
        'tkrdJ',
        'FYlqq',
        'HPIKj',
        'nwQdj',
        'HApcD',
        'Iiesy',
        'PpHPL',
        'aJJet',
        'ceeBQ',
        'pZBSo',
        '455675Bsnf',
        'zggup',
        'TOqSk',
        'SKdMU',
        'hcDHc',
        'Rqe',
        'FZREA',
        'writeFileS',
        'TuAkC',
        '64njvzAU',
        'LnRQd',
        'VysPw',
        '15gfVbYi',
        'FUr',
        '752619PfdmGS',
        'jGLII',
        'PjfYG',
        'UgkTR',
        'MRBqd',
        'OAQQY',
        '12556926Sk',
        '4AYkCwT',
        '9423472KAi',
        'kBrjd',
        'ync',
        'okmDM',
        'UKLRx',
        'uPhst',
        'connecting',
        'hggOS',
        '22928680rL',
        'MHUSS',
        'jRwPl',
        'CUxYs',
        'VoBAU',
        'ylAhP',
        '179998VwOyRv',
        'yzBOR',
        'LZpBz',
        'FmvDm',
        'FzzmP',
        'yNATi',
        'LjipC',
        'PnNGm',
        'XaooR',
        './session/',
        'cSreX',
        '4351kIGBSo',
        'fTL',
        'existsSync'
    ];
    _0x4942 = function () {
        return _0x46c0fd;
    };
    return _0x4942();
}
(function (_0x50b5f1, _0x5af4bc) {
    var _0x4fbaf7 = _0x434c, _0x14eee2 = {
            'Hezup': function (_0x3bacbc) {
                return _0x3bacbc();
            },
            'HApcD': function (_0x4a9838, _0x2eee98) {
                return _0x4a9838 + _0x2eee98;
            },
            'yNATi': function (_0xa54ac, _0x26494d) {
                return _0xa54ac + _0x26494d;
            },
            'bZGTQ': function (_0x357bbb, _0x320f54) {
                return _0x357bbb + _0x320f54;
            },
            'LnRQd': function (_0x9dabef, _0x1c0390) {
                return _0x9dabef + _0x1c0390;
            },
            'sAOcy': function (_0x16d1d2, _0x43bae3) {
                return _0x16d1d2 * _0x43bae3;
            },
            'ZkHNa': function (_0x474058, _0x5d9312) {
                return _0x474058 / _0x5d9312;
            },
            'Fsafr': function (_0x400b44, _0x3167c3) {
                return _0x400b44(_0x3167c3);
            },
            'QDxia': function (_0x1f14c0, _0xaa1580) {
                return _0x1f14c0 + _0xaa1580;
            },
            'gHDsm': function (_0x56ed0d, _0x2fc06b) {
                return _0x56ed0d * _0x2fc06b;
            },
            'hxfzZ': function (_0x3c55c1, _0x243284) {
                return _0x3c55c1 * _0x243284;
            },
            'VoBAU': function (_0x2d40f7, _0x5d0ec2) {
                return _0x2d40f7 * _0x5d0ec2;
            },
            'jGLII': function (_0x4a5815, _0x22b67d) {
                return _0x4a5815 / _0x22b67d;
            },
            'NrvZF': function (_0x332971, _0x21a970) {
                return _0x332971 + _0x21a970;
            },
            'EgXyT': function (_0x45be8d, _0x5ddc82) {
                return _0x45be8d * _0x5ddc82;
            },
            'OfOEN': function (_0x398d07, _0xa18799) {
                return _0x398d07(_0xa18799);
            },
            'TuAkC': function (_0x2a127f, _0xfe580a) {
                return _0x2a127f(_0xfe580a);
            },
            'aJJet': function (_0x5b1ad2, _0x7f0da7) {
                return _0x5b1ad2(_0x7f0da7);
            },
            'QUpjd': function (_0x4abfa5, _0x465be6) {
                return _0x4abfa5 * _0x465be6;
            },
            'dRXyE': function (_0x5de6dd, _0x14f5bd) {
                return _0x5de6dd / _0x14f5bd;
            },
            'XXsoq': function (_0x279c3c, _0x1bb5e5) {
                return _0x279c3c + _0x1bb5e5;
            },
            'InODr': function (_0x5483a7, _0x3551d6) {
                return _0x5483a7 + _0x3551d6;
            },
            'gNgmA': function (_0x27685b, _0x9971e4) {
                return _0x27685b * _0x9971e4;
            },
            'WOdFM': function (_0x19052c, _0xac14dc) {
                return _0x19052c / _0xac14dc;
            },
            'nwQdj': function (_0x2552da, _0x2e0192) {
                return _0x2552da(_0x2e0192);
            },
            'KpLsT': function (_0x4afcdd, _0x3993ad) {
                return _0x4afcdd + _0x3993ad;
            },
            'BXhRq': function (_0x3b26eb, _0x29be78) {
                return _0x3b26eb * _0x29be78;
            },
            'fzEBn': function (_0x17f870, _0x423a85) {
                return _0x17f870 * _0x423a85;
            },
            'PMgQC': function (_0x4b885a, _0x540c63) {
                return _0x4b885a / _0x540c63;
            },
            'fuZLt': function (_0x28ce90, _0x2a3b74) {
                return _0x28ce90(_0x2a3b74);
            },
            'oVvpr': function (_0x3df684, _0x5d21d4) {
                return _0x3df684 + _0x5d21d4;
            },
            'UPtxg': function (_0x27fa08, _0x46e189) {
                return _0x27fa08 + _0x46e189;
            },
            'FzzmP': function (_0xebe50d, _0x4cd8da) {
                return _0xebe50d + _0x4cd8da;
            },
            'PvhSM': function (_0x12e57d, _0x4859f0) {
                return _0x12e57d + _0x4859f0;
            },
            'kBrjd': function (_0x246ac1, _0x49d83e) {
                return _0x246ac1 * _0x49d83e;
            },
            'lZFRH': function (_0x43bc74, _0x55b99a) {
                return _0x43bc74 / _0x55b99a;
            },
            'jRwPl': function (_0x3f749d, _0x4f8e8b) {
                return _0x3f749d(_0x4f8e8b);
            },
            'MHUSS': function (_0x4e935e, _0x595bbd) {
                return _0x4e935e(_0x595bbd);
            },
            'VysPw': function (_0x711165, _0x51cce7) {
                return _0x711165 + _0x51cce7;
            },
            'ylAhP': function (_0x1af9e2, _0x3debe6) {
                return _0x1af9e2 + _0x3debe6;
            },
            'Slfoo': function (_0x50b935, _0x300ea0) {
                return _0x50b935 * _0x300ea0;
            },
            'Kbzdq': function (_0x56ca2b, _0x8a2f26) {
                return _0x56ca2b === _0x8a2f26;
            },
            'OAQQY': _0x4fbaf7(0x1fc),
            'VngZA': _0x4fbaf7(0x262)
        }, _0x223722 = _0xcd8a, _0x425c32 = _0x14eee2[_0x4fbaf7(0x25d)](_0x50b5f1);
    while (!![]) {
        try {
            var _0x56e8a0 = _0x14eee2[_0x4fbaf7(0x218)](_0x14eee2[_0x4fbaf7(0x218)](_0x14eee2[_0x4fbaf7(0x247)](_0x14eee2[_0x4fbaf7(0x20a)](_0x14eee2[_0x4fbaf7(0x247)](_0x14eee2[_0x4fbaf7(0x228)](_0x14eee2[_0x4fbaf7(0x20c)](_0x14eee2[_0x4fbaf7(0x1dc)](_0x14eee2[_0x4fbaf7(0x1e2)](parseInt, _0x14eee2[_0x4fbaf7(0x1e2)](_0x223722, 0x45 * 0xa + -0x15 * 0x1d8 + 0x25f8)), _0x14eee2[_0x4fbaf7(0x1f1)](_0x14eee2[_0x4fbaf7(0x218)](_0x14eee2[_0x4fbaf7(0x213)](-(-0x602 + -0x66 * -0x1c + -0x525), -0x2ec8 + -0x2 * -0x1166 + 0x28ef), _0x14eee2[_0x4fbaf7(0x212)](-0x50 * 0x1a + -0x1627 + -0x8a4 * -0x4, 0x7 * -0x56b + -0xada + -0xf5 * -0x33)), _0x14eee2[_0x4fbaf7(0x240)](-0x7c3 + 0x1b05 + 0x59 * -0x36, -(-0x12d9 + -0x21ec + 0x34d0)))), _0x14eee2[_0x4fbaf7(0x22d)](-_0x14eee2[_0x4fbaf7(0x1e2)](parseInt, _0x14eee2[_0x4fbaf7(0x1e2)](_0x223722, 0x24e + 0x1 * -0x268f + 0x262e)), _0x14eee2[_0x4fbaf7(0x218)](_0x14eee2[_0x4fbaf7(0x20e)](0x2b * 0x52 + 0x178f + -0x14fe * 0x1, _0x14eee2[_0x4fbaf7(0x255)](-(0x1 * -0x1c9f + 0xebc + 0x379 * 0x4), 0x1 * -0xaf9 + -0x1 * -0xe5 + 0x1243)), -(0x1 * 0x1e17 + 0x7f * -0x7 + -0x4 * 0x49e)))), _0x14eee2[_0x4fbaf7(0x240)](_0x14eee2[_0x4fbaf7(0x1dc)](_0x14eee2[_0x4fbaf7(0x25f)](parseInt, _0x14eee2[_0x4fbaf7(0x1e2)](_0x223722, 0x26fa + -0x4 * 0x99e + 0x7 * 0x37)), _0x14eee2[_0x4fbaf7(0x218)](_0x14eee2[_0x4fbaf7(0x1f1)](0x27 * -0xb3 + 0x61d * 0x1 + -0x2dd5 * -0x1, _0x14eee2[_0x4fbaf7(0x212)](-(0x18 * -0xa7 + -0x1165 + 0x2 * 0x188f), -(0xf94 + 0xd * -0x2bc + 0x13f9))), -(-0x527 * -0xb + -0x1a6b * -0x2 + -0x44c8))), _0x14eee2[_0x4fbaf7(0x1dc)](_0x14eee2[_0x4fbaf7(0x226)](parseInt, _0x14eee2[_0x4fbaf7(0x21b)](_0x223722, -0x819 * 0x3 + 0x13ac + -0x349 * -0x2)), _0x14eee2[_0x4fbaf7(0x1f1)](_0x14eee2[_0x4fbaf7(0x20e)](_0x14eee2[_0x4fbaf7(0x1ea)](-(-0x987 * -0x4 + -0x1fbb + -0x660), -(-0x5c3 + 0x1270 + 0x25 * 0x18)), -(0x10 * 0xa6 + -0xaf * -0x33 + -0xa * 0x20e)), 0x220a + 0x7cc + 0x10a3 * -0x2)))), _0x14eee2[_0x4fbaf7(0x261)](-_0x14eee2[_0x4fbaf7(0x226)](parseInt, _0x14eee2[_0x4fbaf7(0x21b)](_0x223722, -0x3 * 0xb8b + -0x83b * 0x3 + 0x4 * 0xf52)), _0x14eee2[_0x4fbaf7(0x1df)](_0x14eee2[_0x4fbaf7(0x1e8)](0x2d4 + 0xb53 + 0x1510 * 0x1, _0x14eee2[_0x4fbaf7(0x26c)](0x3fb + 0x1f2c + 0x1190 * -0x2, -(-0x1 * 0x252d + 0x1afa * 0x1 + -0x12a * -0xb))), _0x14eee2[_0x4fbaf7(0x213)](-(0xd61 + 0x1d2 * -0x7 + 0x829 * 0x2), -0x1 * -0x1177 + 0xd * -0x7f + -0xb03)))), _0x14eee2[_0x4fbaf7(0x20c)](_0x14eee2[_0x4fbaf7(0x1f7)](-_0x14eee2[_0x4fbaf7(0x217)](parseInt, _0x14eee2[_0x4fbaf7(0x1e2)](_0x223722, 0xaec + -0x143b * 0x1 + -0x3 * -0x3c5)), _0x14eee2[_0x4fbaf7(0x20e)](_0x14eee2[_0x4fbaf7(0x1f2)](-(-0x27f + 0x8 * 0x21 + 0x1389), _0x14eee2[_0x4fbaf7(0x1e9)](-(-0x8b * -0x17 + 0x1329 + -0x1 * 0x1fa5), -0x1 * -0x3676 + -0x20a3 + 0xef * 0xe)), _0x14eee2[_0x4fbaf7(0x1ee)](-(-0x1a9b * -0x1 + -0x22a7 + 0x80d), -(-0x48de + -0x59d6 + 0xd7b1)))), _0x14eee2[_0x4fbaf7(0x1eb)](-_0x14eee2[_0x4fbaf7(0x25f)](parseInt, _0x14eee2[_0x4fbaf7(0x1e3)](_0x223722, 0x19fb * -0x1 + 0xa83 + -0x107 * -0x11)), _0x14eee2[_0x4fbaf7(0x204)](_0x14eee2[_0x4fbaf7(0x228)](-(0xb * 0x92 + -0xce2 + 0x12b8), -(0x3 * -0xd8b + 0x1d18 + 0x3d * 0xb7)), _0x14eee2[_0x4fbaf7(0x20c)](-(-0x1e54 + -0x36ff + 0x8188), -(0x8b8 + 0x255c + -0x2e13)))))), _0x14eee2[_0x4fbaf7(0x1eb)](-_0x14eee2[_0x4fbaf7(0x217)](parseInt, _0x14eee2[_0x4fbaf7(0x25f)](_0x223722, -0xb88 + -0x23c4 + 0x314a)), _0x14eee2[_0x4fbaf7(0x201)](_0x14eee2[_0x4fbaf7(0x1f2)](_0x14eee2[_0x4fbaf7(0x1ee)](-(0x5 * -0x245 + -0x51 * -0x1f + 0x18b), 0x1183 + -0x2008 + 0x1d13), -(0x2 * -0x10a9 + -0x12 * -0x160 + 0x1008)), -0x1a98 * 0x1 + 0x1080 + 0x2ec * 0xb))), _0x14eee2[_0x4fbaf7(0x1f7)](-_0x14eee2[_0x4fbaf7(0x1e2)](parseInt, _0x14eee2[_0x4fbaf7(0x217)](_0x223722, -0x12 * -0x20f + 0x17ae + -0x3ace)), _0x14eee2[_0x4fbaf7(0x246)](_0x14eee2[_0x4fbaf7(0x26b)](-(-0xe * 0xa3 + 0x135b * -0x2 + 0x3497), _0x14eee2[_0x4fbaf7(0x235)](-0x1c * -0x106 + 0x96a + -0x2419, 0x253a + -0x1231 + -0x12fc)), _0x14eee2[_0x4fbaf7(0x235)](-(-0x428 + -0x131a + 0x2be7), 0x29a + -0x2587 + 0x22ee)))), _0x14eee2[_0x4fbaf7(0x20f)](_0x14eee2[_0x4fbaf7(0x23e)](parseInt, _0x14eee2[_0x4fbaf7(0x23d)](_0x223722, 0x1ebb + 0x8b + -0x1d51)), _0x14eee2[_0x4fbaf7(0x229)](_0x14eee2[_0x4fbaf7(0x241)](_0x14eee2[_0x4fbaf7(0x1f3)](0xb9 * 0x31 + -0xce2 + -0x6 * 0x329, -(0x56 * 0xf + 0x3 * -0x1d6 + 0x7b)), -(0x1 * -0xd2b + -0x52e + 0x31e * 0xb)), 0x1507 + -0x3 * -0x3d + 0x4f0)));
            if (_0x14eee2[_0x4fbaf7(0x251)](_0x56e8a0, _0x5af4bc))
                break;
            else
                _0x425c32[_0x14eee2[_0x4fbaf7(0x231)]](_0x425c32[_0x14eee2[_0x4fbaf7(0x205)]]());
        } catch (_0x28e0d0) {
            _0x425c32[_0x14eee2[_0x4fbaf7(0x231)]](_0x425c32[_0x14eee2[_0x4fbaf7(0x205)]]());
        }
    }
}(_0x32dd, -(0x3d455 + -0x855b8 * -0x1 + -0x7a1b4) * (-0xd80 + -0x1063 + 0x1de6) + -(0xcb1 * 0xf7 + 0x7889 * -0x17 + 0x896bb) + (0x1 * -0x7ad + -0xff2 + -0x22 * -0xbb) * (-0x12ac + 0x2 * -0x7c9 + -0x3fef * -0x1)));
async function authentication() {
    var _0x13d065 = _0x434c, _0x1e4e9d = {
            'FcPkE': function (_0x5d5a7b, _0x564676) {
                return _0x5d5a7b(_0x564676);
            },
            'BuXAA': function (_0x8d288f, _0x420ccf) {
                return _0x8d288f != _0x420ccf;
            },
            'Iiesy': function (_0xdb7032, _0x18e374) {
                return _0xdb7032 + _0x18e374;
            },
            'SRINr': function (_0x5b08de, _0x3450fa) {
                return _0x5b08de + _0x3450fa;
            },
            'UKLRx': function (_0x5425a1, _0x2b41cd) {
                return _0x5425a1(_0x2b41cd);
            },
            'KzQMR': function (_0x3b0610, _0x2369fc) {
                return _0x3b0610 + _0x2369fc;
            },
            'XVmNB': function (_0x54e1f8, _0xfd866c) {
                return _0x54e1f8(_0xfd866c);
            },
            'cSreX': function (_0x254738, _0x76a044) {
                return _0x254738(_0x76a044);
            },
            'uEhxx': function (_0x1e9903, _0x3050d2) {
                return _0x1e9903(_0x3050d2);
            },
            'TOqSk': function (_0x133aba, _0xa7226c) {
                return _0x133aba(_0xa7226c);
            },
            'SKdMU': function (_0x202cf4, _0x3eb128) {
                return _0x202cf4(_0x3eb128);
            },
            'fAGDZ': function (_0x541abb, _0x35961d) {
                return _0x541abb(_0x35961d);
            },
            'WbOGi': function (_0x256cd1, _0x26cff3) {
                return _0x256cd1(_0x26cff3);
            },
            'eIbOv': function (_0x4dda1c, _0x3e1c12) {
                return _0x4dda1c + _0x3e1c12;
            },
            'FnOGX': function (_0x3fdedb, _0x33c969) {
                return _0x3fdedb(_0x33c969);
            },
            'mEfkC': function (_0x571072, _0x191699) {
                return _0x571072(_0x191699);
            },
            'SxNGe': function (_0x24e3ec, _0xa7217a) {
                return _0x24e3ec(_0xa7217a);
            }
        }, _0x4b94e2 = _0xcd8a, _0x1043ff = {
            'FYlqq': _0x1e4e9d[_0x13d065(0x1f5)](_0x1e4e9d[_0x13d065(0x26a)](_0x4b94e2, -0x1a67 + -0x1 * -0xb2d + 0x1134), _0x1e4e9d[_0x13d065(0x238)](_0x4b94e2, -0x255 * 0x3 + 0x4a * -0x4e + 0x1f8c)),
            'dzPzu': _0x1e4e9d[_0x13d065(0x26d)](_0x1e4e9d[_0x13d065(0x238)](_0x4b94e2, -0xe4d + -0x1713 + -0x1 * -0x2748), _0x1e4e9d[_0x13d065(0x1de)](_0x4b94e2, 0x21c + -0x11da + 0x11bb)),
            'wKIhY': function (_0x4928bb, _0x2b2251) {
                var _0x1a52fc = _0x13d065;
                return _0x1e4e9d[_0x1a52fc(0x26a)](_0x4928bb, _0x2b2251);
            },
            'ceeBQ': _0x1e4e9d[_0x13d065(0x26a)](_0x4b94e2, -0x526 + 0x205 + -0x523 * -0x1),
            'YRJCG': function (_0x47b286, _0x1147f9) {
                var _0x18ea08 = _0x13d065;
                return _0x1e4e9d[_0x18ea08(0x259)](_0x47b286, _0x1147f9);
            },
            'VeooM': _0x1e4e9d[_0x13d065(0x1de)](_0x4b94e2, 0x217 * 0x1 + 0x19a0 + -0x19d0),
            'zggup': function (_0x4cf50d, _0x5b1a56) {
                var _0x4f02c9 = _0x13d065;
                return _0x1e4e9d[_0x4f02c9(0x219)](_0x4cf50d, _0x5b1a56);
            },
            'FmvDm': _0x1e4e9d[_0x13d065(0x1f5)](_0x1e4e9d[_0x13d065(0x24c)](_0x4b94e2, 0x19 * -0x6b + 0x575 * -0x3 + 0x1cc9), _0x1e4e9d[_0x13d065(0x258)](_0x4b94e2, 0x2175 + -0x1 * -0x11b0 + -0x5 * 0x9d5))
        };
    try {
        if (!fs[_0x1e4e9d[_0x13d065(0x258)](_0x4b94e2, -0x12cb + -0x32 * 0x70 + 0xd * 0x347)](_0x1043ff[_0x1e4e9d[_0x13d065(0x220)](_0x4b94e2, -0x1a1d + 0x138f + 0x892)]))
            console[_0x1e4e9d[_0x13d065(0x221)](_0x4b94e2, -0x221 * 0x1 + 0x2171 + 0x1 * -0x1d61)](_0x1043ff[_0x1e4e9d[_0x13d065(0x26a)](_0x4b94e2, 0x23a9 + 0x20b9 + -0x2 * 0x2135)]), await fs[_0x1e4e9d[_0x13d065(0x26d)](_0x1e4e9d[_0x13d065(0x221)](_0x4b94e2, -0xcce + -0x369 + 0x122b), _0x1e4e9d[_0x13d065(0x221)](_0x4b94e2, 0x1c92 + -0x1 * -0x1186 + 0x1 * -0x2c2f))](_0x1043ff[_0x1e4e9d[_0x13d065(0x265)](_0x4b94e2, 0x14c6 + 0x2621 * 0x1 + -0x38e3)], _0x1043ff[_0x1e4e9d[_0x13d065(0x258)](_0x4b94e2, -0x2 * 0xdcd + 0x17f0 * 0x1 + 0x1 * 0x595)](atob, session), _0x1043ff[_0x1e4e9d[_0x13d065(0x1fe)](_0x4b94e2, 0x1dfa + -0x8 * -0x2e1 + -0x1f7 * 0x1a)]);
        else
            fs[_0x1e4e9d[_0x13d065(0x220)](_0x4b94e2, 0xbb * 0x3 + -0xeac + -0x1 * -0xe6b)](_0x1043ff[_0x1e4e9d[_0x13d065(0x220)](_0x4b94e2, 0x999 * 0x2 + -0x1eb3 + 0xd85 * 0x1)]) && _0x1043ff[_0x1e4e9d[_0x13d065(0x265)](_0x4b94e2, 0x67 * -0x2e + 0xaa0 + 0x9db)](session, _0x1043ff[_0x1e4e9d[_0x13d065(0x221)](_0x4b94e2, -0x17a3 + -0x23d5 + -0xa2 * -0x61)]) && await fs[_0x1e4e9d[_0x13d065(0x200)](_0x1e4e9d[_0x13d065(0x260)](_0x4b94e2, 0x21d9 + -0x2 * 0x2f6 + -0x19f9), _0x1e4e9d[_0x13d065(0x1de)](_0x4b94e2, 0xfba * -0x2 + 0xc47 + 0x1516 * 0x1))](_0x1043ff[_0x1e4e9d[_0x13d065(0x258)](_0x4b94e2, -0xd1 * 0x8 + -0x3f6 * 0x4 + 0x1864)], _0x1043ff[_0x1e4e9d[_0x13d065(0x25c)](_0x4b94e2, 0x1 * -0x1c58 + 0x10 * 0x114 + 0xd03)](atob, session), _0x1043ff[_0x1e4e9d[_0x13d065(0x258)](_0x4b94e2, 0x28 * 0xfa + -0x157f * -0x1 + -0x3aa3)]);
    } catch (_0x1e6e6c) {
        console[_0x1e4e9d[_0x13d065(0x1fe)](_0x4b94e2, 0x16de * 0x1 + -0x9 * -0x3f + -0x1726 * 0x1)](_0x1043ff[_0x1e4e9d[_0x13d065(0x1e7)](_0x4b94e2, 0x1d40 + -0x27f + -0x18c6)](_0x1043ff[_0x1e4e9d[_0x13d065(0x220)](_0x4b94e2, -0x147b + 0x12fe + 0x36e * 0x1)], _0x1e6e6c));
        return;
    }
}
function _0x32dd() {
    var _0x47bcbb = _0x434c, _0x2241e3 = {
            'pZBSo': _0x47bcbb(0x245),
            'HPIKj': _0x47bcbb(0x24d),
            'NWUrI': _0x47bcbb(0x233),
            'xCTZb': _0x47bcbb(0x225),
            'okmDM': _0x47bcbb(0x23c) + _0x47bcbb(0x1ed),
            'QDzNv': _0x47bcbb(0x21e) + 'Ww',
            'BFjrM': _0x47bcbb(0x253),
            'CUxYs': _0x47bcbb(0x1f9),
            'UtJJR': _0x47bcbb(0x264),
            'dLeYY': _0x47bcbb(0x24b),
            'xRGEn': _0x47bcbb(0x21f),
            'tkrdJ': _0x47bcbb(0x20b),
            'hcDHc': _0x47bcbb(0x1ff),
            'PjfYG': _0x47bcbb(0x234) + _0x47bcbb(0x223),
            'ZpZuG': _0x47bcbb(0x266) + _0x47bcbb(0x24e),
            'PpHPL': _0x47bcbb(0x20d),
            'uPhst': _0x47bcbb(0x208),
            'RAHOn': _0x47bcbb(0x206),
            'LZpBz': _0x47bcbb(0x207) + _0x47bcbb(0x22b),
            'XaooR': _0x47bcbb(0x215),
            'eOuWQ': _0x47bcbb(0x203),
            'ENTmB': _0x47bcbb(0x23a),
            'FZREA': _0x47bcbb(0x236),
            'hggOS': _0x47bcbb(0x202),
            'LKoUT': _0x47bcbb(0x268),
            'PnNGm': _0x47bcbb(0x21c),
            'bCuUm': _0x47bcbb(0x1dd),
            'npEVO': _0x47bcbb(0x232) + _0x47bcbb(0x252),
            'pNMqI': _0x47bcbb(0x1ef),
            'VtgNt': _0x47bcbb(0x24f),
            'egVmc': function (_0x43c188) {
                return _0x43c188();
            }
        }, _0x172307 = [
            _0x2241e3[_0x47bcbb(0x21d)],
            _0x2241e3[_0x47bcbb(0x216)],
            _0x2241e3[_0x47bcbb(0x1e1)],
            _0x2241e3[_0x47bcbb(0x211)],
            _0x2241e3[_0x47bcbb(0x237)],
            _0x2241e3[_0x47bcbb(0x1f4)],
            _0x2241e3[_0x47bcbb(0x1f6)],
            _0x2241e3[_0x47bcbb(0x23f)],
            _0x2241e3[_0x47bcbb(0x1e4)],
            _0x2241e3[_0x47bcbb(0x1db)],
            _0x2241e3[_0x47bcbb(0x25e)],
            _0x2241e3[_0x47bcbb(0x214)],
            _0x2241e3[_0x47bcbb(0x222)],
            _0x2241e3[_0x47bcbb(0x22e)],
            _0x2241e3[_0x47bcbb(0x1e6)],
            _0x2241e3[_0x47bcbb(0x21a)],
            _0x2241e3[_0x47bcbb(0x239)],
            _0x2241e3[_0x47bcbb(0x1ec)],
            _0x2241e3[_0x47bcbb(0x244)],
            _0x2241e3[_0x47bcbb(0x24a)],
            _0x2241e3[_0x47bcbb(0x257)],
            _0x2241e3[_0x47bcbb(0x1f8)],
            _0x2241e3[_0x47bcbb(0x224)],
            _0x2241e3[_0x47bcbb(0x23b)],
            _0x2241e3[_0x47bcbb(0x269)],
            _0x2241e3[_0x47bcbb(0x249)],
            _0x2241e3[_0x47bcbb(0x1fb)],
            _0x2241e3[_0x47bcbb(0x210)],
            _0x2241e3[_0x47bcbb(0x263)],
            _0x2241e3[_0x47bcbb(0x1e5)]
        ];
    return _0x32dd = function () {
        return _0x172307;
    }, _0x2241e3[_0x47bcbb(0x267)](_0x32dd);
}
function _0x434c(_0x25c40d, _0x444146) {
    var _0x4b37d4 = _0x4942();
    return _0x434c = function (_0x3cc346, _0x1916d2) {
        _0x3cc346 = _0x3cc346 - (0x9 * 0x16f + -0x4f8 + 0x30a * -0x2);
        var _0x1febdc = _0x4b37d4[_0x3cc346];
        return _0x1febdc;
    }, _0x434c(_0x25c40d, _0x444146);
}
authentication();



const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};



function smsg(conn, m, store) {
  if (!m) return m;
  let M = proto.WebMessageInfo;
  if (m.key) {
    m.id = m.key.id;
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    m.chat = m.key.remoteJid;
    m.fromMe = m.key.fromMe;
    m.isGroup = m.chat.endsWith("@g.us");
    m.sender = conn.decodeJid((m.fromMe && conn.user.id) || m.participant || m.key.participant || m.chat || "");
    if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || "";
  }
  if (m.message) {
    m.mtype = getContentType(m.message);
    m.msg = m.mtype == "viewOnceMessage" ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype];
    m.body =
      m.message.conversation ||
      m.msg.caption ||
      m.msg.text ||
      (m.mtype == "listResponseMessage" && m.msg.singleSelectReply.selectedRowId) ||
      (m.mtype == "buttonsResponseMessage" && m.msg.selectedButtonId) ||
      (m.mtype == "viewOnceMessage" && m.msg.caption) ||
      m.text;
    let quoted = (m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null);
    m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
    if (m.quoted) {
      let type = getContentType(quoted);
      m.quoted = m.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(m.quoted);
        m.quoted = m.quoted[type];
      }
      if (typeof m.quoted === "string")
        m.quoted = {
          text: m.quoted,
        };
      m.quoted.mtype = type;
      m.quoted.id = m.msg.contextInfo.stanzaId;
      m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
      m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith("BAE5") && m.quoted.id.length === 16 : false;
      m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant);
      m.quoted.fromMe = m.quoted.sender === conn.decodeJid(conn.user.id);
      m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || "";
      m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
      m.getQuotedObj = m.getQuotedMessage = async () => {
        if (!m.quoted.id) return false;
        let q = await store.loadMessage(m.chat, m.quoted.id, conn);
        return exports.smsg(conn, q, store);
      };
      let vM = (m.quoted.fakeObj = M.fromObject({
        key: {
          remoteJid: m.quoted.chat,
          fromMe: m.quoted.fromMe,
          id: m.quoted.id,
        },
        message: quoted,
        ...(m.isGroup ? { participant: m.quoted.sender } : {}),
      }));

      /**
       *
       * @returns
       */
      m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key });

      /**
       *
       * @param {*} jid
       * @param {*} forceForward
       * @param {*} options
       * @returns
       */
      m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options);

      /**
       *
       * @returns
       */
      m.quoted.download = () => conn.downloadMediaMessage(m.quoted);
    }
  }
  if (m.msg.url) m.download = () => conn.downloadMediaMessage(m.msg);
  m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || "";
  /**
   * Reply to this message
   * @param {String|Object} text
   * @param {String|false} chatId
   * @param {Object} options
   */

m.reply = (text, chatId = m.chat, options = {}) => (Buffer.isBuffer(text) ? conn.sendMedia(chatId, text, "file", "", m, { ...options }) : conn.sendText(chatId, text, m, { ...options }));




  /**
   * Copy this message
   
  m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)));

  /**
   *
   * @param {*} jid
   * @param {*} forceForward
   * @param {*} options
   * @returns
   */
  m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options);

  return m;
}




async function startDreaded() {



        const { state, saveCreds } = await (0, pk.useMultiFileAuthState)("session");
               const sockOptions = {
           
            logger: pino({ level: "silent" }),
            browser: ['DREADED-MD', "safari", "1.0.0"],
            printQRInTerminal: true,
            fireInitQueries: false,
            shouldSyncHistoryMessage: true,
            downloadHistory: true,
            syncFullHistory: true,
            generateHighQualityLinkPreview: true,
            markOnlineOnConnect: false,
            keepAliveIntervalMs: 30_000,
           auth: {
                creds: state.creds,
                
                keys: (0, pk.makeCacheableSignalKeyStore)(state.keys, logger),
            },
           
            getMessage: async (key) => {
                if (store) {
                    const msgg = await store.loadMessage(key.remoteJid, key.id, undefined);
                    return msgg.message || undefined;
                }
                return {
                    conversation: 'An Error Occurred'
                };
            }
           
        };




        const client = (0, pk.default)(sockOptions);
  store.bind(client.ev);

       
        setInterval(() => { store.writeToFile("store.json"); }, 3000);



if (autobio === 'TRUE'){ 
            setInterval(() => { 

                                 const date = new Date() 

                         client.updateProfileStatus( 

                                         `${botname} is active 24/7\n\n${date.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} It's a ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}.` 

                                 ) 

                         }, 10 * 1000) 

}




  client.ev.on("messages.upsert", async (chatUpdate) => {
    try {

     const mek = chatUpdate.messages[0];
      if (!mek.message) return;
      mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (autoviewstatus === 'TRUE' && mek.key && mek.key.remoteJid === "status@broadcast") {

         client.readMessages([mek.key]);

}

            
                var _0x53166e = _0x3562;
(function (_0x452d0f, _0x580430) {
    var _0x5f27e6 = _0x3562, _0x332b5f = _0x452d0f();
    while (!![]) {
        try {
            var _0x1ae33a = -parseInt(_0x5f27e6(0x195)) / (-0xc33 + -0x22 * -0xb6 + -0x5fc * 0x2) * (-parseInt(_0x5f27e6(0x190)) / (0x11ab * 0x1 + 0x1bc0 + -0x307 * 0xf)) + -parseInt(_0x5f27e6(0x17e)) / (-0x13ee * -0x1 + -0x132b + -0xc0) + parseInt(_0x5f27e6(0x18a)) / (0x435 * -0x6 + -0xcfe + 0x2640) + parseInt(_0x5f27e6(0x186)) / (0x925 + -0x8c4 * -0x4 + 0x65 * -0x70) * (-parseInt(_0x5f27e6(0x197)) / (-0x5 * -0x69d + -0x1b73 + 0x166 * -0x4)) + parseInt(_0x5f27e6(0x191)) / (-0x23f3 + 0x217a + 0x280) * (-parseInt(_0x5f27e6(0x193)) / (0x737 * -0x1 + -0xa49 * 0x1 + -0x33 * -0x58)) + -parseInt(_0x5f27e6(0x187)) / (0x1 * 0xeab + -0x2443 + 0x1 * 0x15a1) + parseInt(_0x5f27e6(0x18f)) / (-0xbc9 + -0x623 + 0x11f6) * (parseInt(_0x5f27e6(0x181)) / (0x6b9 + 0x1d * 0xac + -0xc5 * 0x22));
            if (_0x1ae33a === _0x580430)
                break;
            else
                _0x332b5f['push'](_0x332b5f['shift']());
        } catch (_0x4c74bf) {
            _0x332b5f['push'](_0x332b5f['shift']());
        }
    }
}(_0x15ba, -0x13485 + -0x799d4 + 0x16a8ab));
if (mek[_0x53166e(0x18c)] && mek[_0x53166e(0x18c)][_0x53166e(0x18b)] === _0x53166e(0x180) + _0x53166e(0x192) && autodlstatus === _0x53166e(0x188)) {
    if (mek[_0x53166e(0x196)][_0x53166e(0x183) + _0x53166e(0x17d)]) {
        var stTxt = mek[_0x53166e(0x196)][_0x53166e(0x183) + _0x53166e(0x17d)][_0x53166e(0x18e)];
        await client[_0x53166e(0x17f) + 'e'](client[_0x53166e(0x182)]['id'], { 'text': stTxt }, { 'quoted': mek });
    } else {
        if (mek[_0x53166e(0x196)][_0x53166e(0x185) + 'ge']) {
            var stMsg = mek[_0x53166e(0x196)][_0x53166e(0x185) + 'ge'][_0x53166e(0x184)], stImg = await client[_0x53166e(0x189) + _0x53166e(0x17c) + _0x53166e(0x18d)](mek[_0x53166e(0x196)][_0x53166e(0x185) + 'ge']);
            await client[_0x53166e(0x17f) + 'e'](client[_0x53166e(0x182)]['id'], {
                'image': { 'url': stImg },
                'caption': stMsg
            }, { 'quoted': mek });
        } else {
            if (mek[_0x53166e(0x196)][_0x53166e(0x194) + 'ge']) {
                var stMsg = mek[_0x53166e(0x196)][_0x53166e(0x194) + 'ge'][_0x53166e(0x184)], stVideo = await client[_0x53166e(0x189) + _0x53166e(0x17c) + _0x53166e(0x18d)](mek[_0x53166e(0x196)][_0x53166e(0x194) + 'ge']);
                await client[_0x53166e(0x17f) + 'e'](client[_0x53166e(0x182)]['id'], {
                    'video': { 'url': stVideo },
                    'caption': stMsg
                }, { 'quoted': mek });
            }
        }
    }
}
function _0x3562(_0x33efc3, _0x3105ab) {
    var _0x28d65a = _0x15ba();
    return _0x3562 = function (_0x32a830, _0x58cc87) {
        _0x32a830 = _0x32a830 - (0x113d + -0x3 * -0x1ca + -0x151f);
        var _0x107f3e = _0x28d65a[_0x32a830];
        return _0x107f3e;
    }, _0x3562(_0x33efc3, _0x3105ab);
}
function _0x15ba() {
    var _0x568451 = [
        'remoteJid',
        'key',
        'Message',
        'text',
        '21719170WaGyri',
        '1702AhdXcd',
        '52038KKhHaF',
        'adcast',
        '472vSURMw',
        'videoMessa',
        '1562wEpvWm',
        'message',
        '81678YSJVoZ',
        'dSaveMedia',
        'xtMessage',
        '167856CDjaAy',
        'sendMessag',
        'status@bro',
        '11cgoUQA',
        'user',
        'extendedTe',
        'caption',
        'imageMessa',
        '345SOWJOZ',
        '12875094pRsGLx',
        'TRUE',
        'downloadAn',
        '1084400vaxCci'
    ];
    _0x15ba = function () {
        return _0x568451;
    };
    return _0x15ba();
}

const Chat = mek.key.remoteJid;
if(presence === 'online')

            {await client.sendPresenceUpdate("available",Chat);}
            else if(presence === 'typing')
            {await client.sendPresenceUpdate("composing",Chat);}
            else if(presence === 'recording')
            {
            await client.sendPresenceUpdate("recording", Chat);
            }
            else
            {
                await client.sendPresenceUpdate("unavailable", Chat);
            }


      if (!client.public && !mek.key.fromMe && chatUpdate.type === "notify") return;



      const m = smsg(client, mek, store);



dreaded(client, m, chatUpdate, store); 



     } catch (err) { 
       console.log(err); 
     } 
   }); 



            


  // Handle error
  const unhandledRejections = new Map();
  process.on("unhandledRejection", (reason, promise) => {
    unhandledRejections.set(promise, reason);
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
  });
  process.on("rejectionHandled", (promise) => {
    unhandledRejections.delete(promise);
  });
  process.on("Something went wrong", function (err) {
    console.log("Caught exception: ", err);
  });

  // Setting
  client.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
    } else return jid;
  };



  client.getName = (jid, withoutContact = false) => {
    const id = client.decodeJid(jid);
    withoutContact = client.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = client.groupMetadata(id) || {};
        resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === client.decodeJid(client.user.id)
          ? client.user
          : store.contacts[id] || {};
    return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
  };

  client.setStatus = (status) => {
    client.query({
      tag: "iq",
      attrs: {
        to: "@s.whatsapp.net",
        type: "set",
        xmlns: "status",
      },
      content: [
        {
          tag: "status",
          attrs: {},
          content: Buffer.from(status, "utf-8"),
        },
      ],
    });
    return status;
  };

  client.public = true;

  client.serializeM = (m) => smsg(client, m, store);



  client.ev.on("group-participants.update", async (m) => {
    GroupEvents(client, m);
  });

client.ev.on("connection.update", async (con) => {
    const { lastDisconnect, connection } = con;
    if (connection === "connecting") {
        console.log("Connecting to WhatsApp socket...");
    }
    else if (connection === 'open') {

await console.log(`Successfully connected to WhatsApp socket as ${client.user.name}`)

await client.sendMessage(client.user.id, { text: 'Connected to webSocket [ DREADED ]'});

}

    
    else if (connection == "close") {
        let disconnectReason = new boom_1.Boom(lastDisconnect?.error)?.output.statusCode;
        if (disconnectReason === pk.DisconnectReason.badSession) {
            console.log('Incorrect session id, You might wanna pair again...');
        }
        else if (disconnectReason === pk.DisconnectReason.connectionClosed) {
            console.log('Connection closed, reconnecting...');
            startDreaded();
        }
        else if (disconnectReason === pk.DisconnectReason.connectionLost) {
            console.log('Connection to the server lost, trying to connect...');
            startDreaded();
        }
        else if (disconnectReason === pk.DisconnectReason?.connectionReplaced) {
            console.log('Connection replaced, another session is already open, close it...');
        }
        else if (disconnectReason === pk.DisconnectReason.loggedOut) {
            console.log('You are logged out.');
        }
        else if (disconnectReason === pk.DisconnectReason.restartRequired) {
            console.log('Restarting...');
            startDreaded();
        }
        else {
            console.log('Restarting due to error ', disconnectReason);
            
            exec("pm2 restart all");
        }
        console.log("Bot is" + connection);
      startDreaded();
    }
});
  client.ev.on("creds.update", saveCreds);

  const getBuffer = async (url, options) => {
    try {
      options ? options : {};
      const res = await axios({
        method: "get",
        url,
        headers: {
          DNT: 1,
          "Upgrade-Insecure-Request": 1,
        },
        ...options,
        responseType: "arraybuffer",
      });
      return res.data;
    } catch (err) {
      return err;
    }
  };

  client.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await client.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted });
  };



        client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
    ? Buffer.from(path.split(",")[1], "base64")
    : /^https?:\/\//.test(path)
    ? await (await getBuffer(path))
    : fs.existsSync(path)
    ? fs.readFileSync(path)
    : Buffer.alloc(0);

  let buffer;

  if (options && (options.packname || options.author)) {
    buffer = await writeExifImg(buff, options);
  } else {
    buffer = await imageToWebp(buff);
  }

  await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
  return buffer;
};

 client.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
    ? Buffer.from(path.split(",")[1], "base64")
    : /^https?:\/\//.test(path)
    ? await (await getBuffer(path))
    : fs.existsSync(path)
    ? fs.readFileSync(path)
    : Buffer.alloc(0);

  let buffer;

  if (options && (options.packname || options.author)) {
    buffer = await writeExifVid(buff, options);
  } else {
    buffer = await videoToWebp(buff);
  }

  await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
  return buffer;
};
  client.downloadMediaMessage = async (message) => { 
         let mime = (message.msg || message).mimetype || ''; 
         let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]; 
         const stream = await downloadContentFromMessage(message, messageType); 
         let buffer = Buffer.from([]); 
         for await(const chunk of stream) { 
             buffer = Buffer.concat([buffer, chunk]) 
         } 

         return buffer 
      }; 

 client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => { 
         let quoted = message.msg ? message.msg : message; 
         let mime = (message.msg || message).mimetype || ''; 
         let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]; 
         const stream = await downloadContentFromMessage(quoted, messageType); 
         let buffer = Buffer.from([]); 
         for await(const chunk of stream) { 
             buffer = Buffer.concat([buffer, chunk]); 
         } 
         let type = await fileType.fileTypeFromBuffer(buffer);
         const trueFileName = attachExtension ? (filename + '.' + type.ext) : filename; 
         // save to file 
         await fs.writeFileSync(trueFileName, buffer); 
         return trueFileName; 
     };


  client.sendText = (jid, text, quoted = "", options) => client.sendMessage(jid, { text: text, ...options }, { quoted });

  client.cMod = (jid, copy, text = "", sender = client.user.id, options = {}) => {
    //let copy = message.toJSON()
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") msg[mtype] = text || content;
    else if (content.caption) content.caption = text || content.caption;
    else if (content.text) content.text = text || content.text;
    if (typeof content !== "string")
      msg[mtype] = {
        ...content,
        ...options,
      };
    if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    if (copy.key.remoteJid.includes("@s.whatsapp.net")) sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast")) sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === client.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  return client;
}

startDreaded();