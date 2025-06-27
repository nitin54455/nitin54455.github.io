// 
db.employees.insertMany([{},{},{}])
db.employees.update({},{$set:{}})
db.employees.updateOne(
    {email:"john@gmail.com"},
    {$set:{salary:2000}}
)
db.employees.updateMany(
    {},
    {$set:{points:1}}
)

db.employees.updateMany(
    {},
    {$rename:{points:"score"}}
)
db.employees.updateMany({},{$unset:{score:""}}
)

db.employees.updateMany({},{$push:{skills:"Java"}})