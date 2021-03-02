SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts on cohorts.id = students.cohort_id
JOIN teachers on assistance_requests.teacher_id = teachers.id
WHERE cohorts.name = 'JUL02'
ORDER BY teachers.name;