SELECT students.name as student, avg(assignment_submissions.duration) as actual_avg, avg(assignments.duration) as estimated_avg
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN assignments ON assignment_id = assignments.id
WHERE students.end_date IS NULL
GROUP BY student
HAVING avg(assignment_submissions.duration) < avg(assignments.duration)
ORDER BY avg(assignment_submissions.duration);