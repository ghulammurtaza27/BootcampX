SELECT name, id, cohort_id
FROM STUDENTS
WHERE end_date IS NULL
ORDER BY cohort_id