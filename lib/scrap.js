
/*

const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const _math = require('mathjs')
const _url = require('url')
const qs = require('qs')
const request = require('request');

*/



import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
// import _math from 'mathjs';
import _url from 'url';
import qs from 'qs';
import request from 'request';

// Use the imported modules as needed in your code

const randomarray = async (array) => {
	return array[Math.floor(Math.random() * array.length)]
}






export const ssweb = (url, device = 'desktop') => {
     return new Promise((resolve, reject) => {
          const base = 'https://www.screenshotmachine.com'
          const param = {
            url: url,
            device: device,
            cacheLimit: 0
          }
          axios({url: base + '/capture.php',
               method: 'POST',
               data: new URLSearchParams(Object.entries(param)),
               headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               }
          }).then((data) => {
               const cookies = data.headers['set-cookie']
               if (data.data.status == 'success') {
                    axios.get(base + '/' + data.data.link, {
                         headers: {
                              'cookie': cookies.join('')
                         },
                         responseType: 'arraybuffer'
                    }).then(({ data }) => {
                       const result = {
                            status: 200,
                            result: data
                        }
                         resolve(result)
                    })
               } else {
                    reject({ status: 404, statuses: `Link Error`, message: 'check link, also I cannot screenshot adult websites', creator: '@fortunatus'})
               }
          }).catch(reject)
     })
}

