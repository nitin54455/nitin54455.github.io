db.employees.find({salary:{$gte:3000}});
db.employees.find({salary:{$lte:3000}});
db.employees.find({salary:{$ne:3000}});


db.employees.find
    .find({salary:{$ne:3000},department:{$eq:"IT"}},{name:1})
    .limit(1);
