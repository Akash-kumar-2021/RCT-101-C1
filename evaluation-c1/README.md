RCT101-Evaluation-1-C1
======================
Problem:
--------
. You are given a base codebase, Link
. It is a small application where a user can move between slides
. Each slide has information that comes from a dataset called data
. Each value in the dataset will have an id, title, and description
. you need to add functionality for a user to move from one slide to another
. there will be two buttons Prev, Next, Slide Component
.Previous will be disabled when you are on the first page, ( you can use the disabled property <button disabled={condition} > )
. Next will be disabled for the last slide
. The Slide component will accept two properties, title, and description,each being a property in the dataset
. You will need to keep track of which is the current slide user is at, and user should be able to move between slides by clicking on the prev and next
. Here is an example of how the output should look like
Example 1:

Example 2 :
