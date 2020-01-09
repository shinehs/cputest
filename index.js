// let jsdata = {};
// tenJson = () => {
//   for (let i = 0; i < 10 * 1024; i++) {
//     jsdata[i] = i * parseInt(Math.random() * 100000) + "";
//   }
// };
// tenJson();
// let formatData = JSON.stringify(jsdata);
// console.log("~~~", "done");
// start 内存CPU用这个
const os = require('os')
var osUtils = require('os-utils')
var interval = -1
var currCPU = 0
function start() {
  updateCPU()
  if (interval < 0) {
    var freeMem = os.freemem() / 1024 / 1024 / 1024
    var totalMem = os.totalmem() / 1024 / 1024 / 1024
    var data = {
      cpuUsage: (currCPU * 100.0).toFixed(2) + '%',
      freeMem: freeMem.toFixed(2) + 'G',
      totalMem: totalMem.toFixed(2) + 'G',
      usedMem: (totalMem - freeMem).toFixed(2) + 'G',
      MemUsage: (((totalMem - freeMem) / totalMem) * 100.0).toFixed(2) + '%',
    }
    console.log(data)
  }
}

function updateCPU() {
  setTimeout(function() {
    osUtils.cpuUsage(function(value) {
      currCPU = value
      updateCPU()
    })
  }, 0)
}
/** end   */

/** 内存 */
// /app/lib/memory.js
// 获取当前Node内存堆栈情况
const { rss, heapUsed, heapTotal } = process.memoryUsage()
// 获取系统空闲内存
const sysFree = os.freemem()
// 获取系统总内存
const sysTotal = os.totalmem()

function memory() {
  console.log('~~~', {
    sys: 1 - sysFree / sysTotal, // 系统内存占用率
    heap: heapUsed / heapTotal, // Node堆内存占用率
    node: rss / sysTotal, // Node占用系统内存的比例
  })
}
start();
memory();
