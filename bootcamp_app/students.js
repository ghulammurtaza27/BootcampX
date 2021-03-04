const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortInput = process.argv[2];

const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
`;

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array. 
const values = [`%${cohortName}%`, limit];


pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(user);
  })
}).catch(err => console.error('query error', err.stack));



// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'vagrant',
//   password: '123',
//   host: 'localhost',
//   database: 'bootcampx'
// });

// const cohortInput = process.argv[2];

// const queryString = `
//   SELECT students.id as student_id, students.name as name, cohorts.name as cohort
//   FROM students
//   JOIN cohorts ON cohorts.id = cohort_id
//   WHERE cohorts.name LIKE $1
//   LIMIT $2;
// `;


// pool.query(`
// SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
// FROM assistance_requests
// JOIN students ON students.id = student_id
// JOIN cohorts on cohorts.id = students.cohort_id
// JOIN teachers on assistance_requests.teacher_id = teachers.id
// WHERE cohorts.name = '${cohortInput || 'JUL02'}'
// ORDER BY teachers.name;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(user);
//   })
// }).catch(err => console.error('query error', err.stack));
