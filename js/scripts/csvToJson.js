#!/usr/bin/env node
const fs = require('fs')
const data = require('./data.json')

const skip = ['valid', 'DPS']

const stats = [ 'Str', 'Agi', 'Stam', 'Int', 'MAP', 'RAP', 'Crit', 'Hit', 'MP5', 'Resil', 'ArP', 'Haste']
const gemColors = ['red', 'yellow', 'blue']
const as = { str: 'Str', agi: 'Agi', sta: 'Stam', int: 'Int', map: 'MAP', rap: 'RAP', crit: 'Crit',
             hit: 'Hit', mp5: 'MP5', resil: 'Resil', arp: 'ArP', haste: 'Haste', location: 'Location',
             phase: 'Phase' }

const AURA_KEYS = ['PPM', 'proc_type', 'proc_chance', 'is_proc']


function createLineParser(headersStr) {
  const headers = headersStr.split(',').filter(header => header !== '')
  return line => {
    const values = line.split(',')
    const item = headers.reduce((obj, header, i) => {
      if (values[i] && values[i] !== '\r' && values [i] !== 'No' && !skip.includes(header)) {
        const key = as[header] || header
        const value = isNaN(values[i]) ? values[i] : Number(values[i])

        if (stats.includes(key)) { // if reading a stat, add it to stat object
          if (!obj.stats) obj.stats = {}
          obj.stats[key] = Math.trunc(value)
        }
        else if (key.match(/^skt_/)) {    // if reading socket info, either add to socket or to socketbonus
          if (!obj.sockets) obj.sockets = []
          if (!obj.socketBonus) obj.socketBonus = {}

          const rest = key.replace(/^skt_/, '')
          if (!isNaN(rest)) obj.sockets.push(value)
          else obj.socketBonus[as[key.slice(key.indexOf('_') + 1)]] = Math.trunc(value)
        } else if (gemColors.includes(key)) { // if read gem color, treat as a gem
          if (!obj.colors) obj.colors = []
          if (value === 'Y') obj.colors.push(key)
        } else if (key === 'quality') obj[key] = (value) ? 'Rare' : 'Common'
        else if (key.match(/^aura_/)) {
          if (!obj.aura) obj.aura = {}
          const rest = key.replace(/^aura_/, '')
          const aura_key = as[rest] || rest
          if (stats.includes(aura_key)) {
            if (!obj.aura.stats) obj.aura.stats = {}
            obj.aura.stats[aura_key] = value
          } else obj.aura[aura_key] =  value
        } else if (AURA_KEYS.includes(key)) {
          if (!obj.aura) obj.aura = {}
          obj.aura[key] =  value
        }
        else obj[key] = value
      }
      return obj
    }, {})

    return item
  }
}

function parseCsvFile(fileName) {
  const [header, ...lines] = fs.readFileSync(fileName, 'utf8').split('\n').filter(line => line !== '')
  const parseLine = createLineParser(header)

  const items = lines.map(parseLine)
  const result = items.reduce((obj, item) => {
    item.icon = data.find(elem => elem.itemId === item.itemid)?.icon
    if (!item.icon) console.log('Missing icon for element ' + JSON.stringify(item, null, 4))
    obj[item.itemid] = item
    delete item.itemid
    return obj
  }, {})
  const dst = './' + fileName.slice(fileName.lastIndexOf('/')).replace(/\.csv$/, '.json')
  fs.writeFileSync(dst, JSON.stringify(result, null, 4).replace(/"([^"]+)":/g, '$1:'))
}

function usage(err) {
  console.log(`Error: ${err}. Usage is:`)
  console.log('csvToJson.js: <csvFile>')
  console.log('\t csvFile: Csv file to be converted to a json')
  process.exit(1)
}

const file = process.argv[2] || usage('csvFile must be defined!')
parseCsvFile(file)
