[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11857700&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.
  
Please note that I used the following source in order to write this code:  
https://www.geeksforgeeks.org/iterative-quick-sort/  
I primarily used it in order to see how recursion could be implemented into an  
iterative fashion using a specially created stack, as that concept was fairly  
foreign to me before starting this exercise. However, I am now confident in my  
abilities to change code from recursive to iterative and vice-versa.  
In addition to this, I used the documentation for quicksort found in the slides  
in order to get me code to work properly.

**ANSWER**:  
The code that I wrote for this assignment would have a worst case runtime of  
$\Theta(n^2)$. The worst case, of course, would be if we were dealing with a  
list of elements that was sorted in reverse order. If this happens, then the  
program will be forced to use every single entry as a pivot and move said pivot  
to the end of the list which will take n amount of time. Additionally, every  
time a pivot is set, the code must start over the list from the very beginning.  
As a result, the code will repeat $\Theta(n^2)$ times. This is also the average  
runtime. The best-case runtime, however, is $\Theta(n)$. This occurs if the code is  
given a list that is already sorted.  
PLEASE NOTE: My code still has a lot of things that are commented out from my  
previous attempt at this. I have decided to keep them as comments instead of  
deleting them in case I ever decide to do anything with it in the future.
