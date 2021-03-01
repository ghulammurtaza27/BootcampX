SELECT students.name as student, avg(assignment_submissions.duration)
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP by student
ORDER BY avg(assignment_submissions.duration) DESC;