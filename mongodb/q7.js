db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,salary:1}},
    {$sort:{salary:1}},
    {$limit:3},

])

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      bonus: { $multiply: ["$salary", 2] }
    }
  }
])


db.employees.aggregate([
    {$match:{department:"IT"}},
  {
    $project: {
      _id: 0,
      email:1,
      name: 1,
      salary: 1,
      
    }
  }
])

db.employees.aggregate([
    
  {
    $project: {
      _id: 0,
      name:1,
      annual:{$multiply: ["$salary",12]}
    }
  }
])

