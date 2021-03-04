const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortInput = process.argv[2];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts on cohorts.id = students.cohort_id
JOIN teachers on assistance_requests.teacher_id = teachers.id
WHERE cohorts.name = '${cohortInput || 'JUL02'}'
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(user);
  })
}).catch(err => console.error('query error', err.stack));