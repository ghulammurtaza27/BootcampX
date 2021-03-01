SELECT cohorts.name as cohort, count(assignment_submissions.*)
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP by cohorts.name
ORDER BY count(assignment_submissions.*) DESC;