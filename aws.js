let obj = {name:"nakai", address:"aaaa"}
let array =[]
for (const [key, value] of Object.entries(obj)) {
  array.push({[key]:value})
}
