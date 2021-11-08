# HunterSim

This is a project to create a web-based simulation instead of utilizing google sheets for these calculations and simming. The design intent of this is to create a sim with iterations and random calculations, which allows accurate as possible simulations to be made.

The previous version of the sim, while attempting to be thorough, often fell short when it came to determining crits and procs and thus gave varying results. The aim is to reduce that variance and provide a clearer picture of DPS gains of one item over the next.

# Expected Features
- full setup of the character including but not limited to race, gear, enchants, buffs, talents, etc.
- export/import profiles for gear/settings
- interpretation from custom links provided by wowhead links
- gear planner for quickly viewing the top 10 of each slot and comparing
- group evaluation similar to the current spreadsheet - measuring expose weakness AP -> DPS gains based on group comp and uptime
- selectable fight conditions, potentially with custom delays such as gruul's knockback
- stat weights for ALL stats
- output log from the sim for 1 simulation as example
- visual tooltips on mouseover provided by wowhead's tooltips links
- filterable gear lists to narrow down the big lists of gear for the various slots
- possibly more such as a log breakdown from WCL compared to sim setup and expectations

# Project Overview - Technical Details
This project is mainly being designed by yours truly, WatchYourSixx - whom has not a whole lot of experience with coding in general. It's expected that there will possibly be bugs and inefficient code. 

The base ui and setup for HTML and CSS styling is created using NicePages an easy to use HTML editor that has pre-set blocks, elements, shapes, etc that are easy to build and create a website or interface. Then I will be using React to create special dynamic parts of the sim. The entire coding will be done in javascript unless something unforseen happens in the future.

I'm really excited to work on this project and it's been really cool learning this so far. Thank you for reading this and I hope it can be of use to you in the future once it's complete.

-- Sixx
