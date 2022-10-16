-- log into mysql
-- Run the queries listed below one at a time by copying each individually and pasting it into the mysql prompt.
 # SELECT * FROM mysql.user; 
 # SELECT user, host FROM mysql.user;
 # SELECT * FROM mysql.help_topic;
 # SELECT help_topic_id, help_category_id, url FROM mysql.help_topic;
--  Run the queries again but with the \G at the end instead of ;.
--  Compare the output of the commands and why one method may be better than another.
 # SELECT * FROM mysql.user \G
 # SELECT user, host FROM mysql.user \G
 # SELECT * FROM mysql.help_topic \G
 # SELECT help_topic_id, help_category_id, url FROM mysql.help_topic \G
 -- Issue he following command to MySQL:
  # pager less -~SFX;
 -- Re-run the four queries above and notice how the output changes.
  /* 
  You can use the arrow keys to move around the display, 
  and the space bar to jump to the next page of results.
  In addition, you can use the following keys to navigate in less:
  * d: go down a half page
  * u: go up a half page
  * j: scroll down one line
  * k: scroll up one line
  * /: search for a term
  Regardless of how you navigate, press q to exit the pager.
  */
  -- Undo your previous setting with
  # nopager;
