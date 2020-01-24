/*
Number to English

Write a function numberToEnglish, it should take a number and return the number as a string using English words.


numbertoEnglish(7) // "seven"
numberToEnglish(575) // "five hundred seventy-five"
numberToEnglish(78193512) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

// HELPERS

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var numbersToPlace = {
  2: 'ten',
  3: 'hundred',
  4: 'thousand',
  5: 'million',
  6: 'billion',
  7: 'trillion',
  8: 'quadrillion',
  9: 'quintillion'
};

function numberToEnglish(number) {
  // your code here...
  var string = number.toString()
  string.lenght - 1
  for (var keys in numberToEnglish) {

  }
}

Link - local IPv6 address: fe80:: d0b: a982: d0cf: f0a2 % 11
IPv4 address: 192.168.1.2
IPv4 DNS servers: 192.168.1.1
Primary DNS suffix: Home
Manufacturer: Realtek
Description: Realtek PCIe FE Family Controller
Driver version: 9.1.407.2015
Physical address(MAC): 3C - 2C - 30 - F9 - AD - 8F
