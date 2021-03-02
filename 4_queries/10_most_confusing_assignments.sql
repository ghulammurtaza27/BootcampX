SELECT assignments.id, assignments.name, assignments.day, assignments.chapter, count(assistance_requests.*)
FROM assignments
JOIN assistance_requests ON assignment_id = assignments.id
GROUP BY assignments.id
ORDER BY count(assistance_requests.*) DESC;