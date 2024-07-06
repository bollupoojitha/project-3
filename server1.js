const express=require('express')
const app=express()
let honey={
    name:'wild honey',
    mrp:350,
}
app.get('/',function(req,res) {
    res.json(honey)
})
app.listen(8083)
