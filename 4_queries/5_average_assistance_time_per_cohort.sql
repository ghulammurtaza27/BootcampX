SELECT avg(completed_at - started_at) as duration, cohorts.name as cohort
FROM assistance_requests
JOIN students on student_id = students.id 
JOIN cohorts on cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY duration ASC;