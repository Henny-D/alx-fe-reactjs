Documentation

Routes

Routes Overview
Path	                Component	            Description
/	                        Home	                       Landing page
/about	                About	                     Static about page
/login	                 Login	                       Allows users to log in
/profile/*	            Profile	                       Protected Profile page
/profile/details	 ProfileDetails	             Nested route in Profile
/profile/settings	ProfileSettings           Another nested route
/blog/:postId	    BlogPost	                Dynamic route for blog posts



 Authentication Logic
Action	                                                    Expected Behavior
Visiting /profile while logged out	            Redirects to /login
Visiting /profile after login	                      Displays profile page
Clicking Logout	                                         Logs out user and blocks /profile

