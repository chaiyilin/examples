//const { Map } = require('immutable')
import { Map } from "immutable";

const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') // 2
map2.get('b') // 50
console.log(map2)