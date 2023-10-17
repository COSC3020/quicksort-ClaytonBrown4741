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
$\Theta(n^2)$. To begin, one must look at the two major sources of runtime  
within the code: The While Loop and the For Loop that are used. The while  
loop will repeat until the stack that is being used is completely empty.  
Since this will occur once every entry in the array has been turned into a,  
pivot, then this would have an asymptotic complexity of n. Next, we have  
the for loop. Assuming that this is the worst case scenario, then this loop  
will have to iterate over every entry in the array at least once. This also  
has an asymptotic complexity of n. Because the for loop is within the while  
loop, we multiply the two n's together to get the final answer of $\Theta(n^2)$.
