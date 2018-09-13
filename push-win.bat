set/p commit= Commit? 
call git add .
call git commit -m "%commit%"
call git push origin master
call git status
exit
