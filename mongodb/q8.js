db.employees.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            salary:1,
            Grade:{$cond:[{$gt:["$salary",2000]},"Grade A","Grade B"]}
            
        }
    }
])

Grade:{$cond:[{$gt:["$salary",2000]},"Grade A","Grade B"]}
db.employees.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            salary:1,
            Grade:{
                $cond:{if:{$gt:["$CTC",2000]},then:"Grade A ",else:"Grade B"},
            }
        }
    }
])

db.employees.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            salary:1,
            Grade:{$cond:[{$gt:["$salary",2000]},"Grade A","Grade B"]}
            
        }
    }
])

// add a new field strSalary in employee 
// store 500 for it 
// store "1000" for other 


db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        department:1,
        Sal:{$convert:{input:"$strSalary",to:"int"}}}},
    
    {$group:{_id:"$department",total:{$sum:"$Sal"}}}
]);

db.createView("depWiseSalaryView",)