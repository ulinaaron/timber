Plan

30min	Intro talk
15min	Demo and setup
15min	== class time ==
20min	Build Single.php/.twig
20min	== class time ==
20min	Build home.php/.twig (looping)
20min   == class time ==

Break

20min	Build Event CPT / loop with teases and includes
20min	== class time ==
20min	Build Members CPT, single
20min	== class time ==
20min	Build Members on homepage, sidebar
20min	== class time ==

### Intro
- Build a theme with the tools that make WordPress a true CMS platform
- We're going to do that 100% from scratch. Okay, except for the CSS
- You will know 100% of this theme.
- Possible with Timber, ACF and Custom Post Types
- There's also a starter theme OR use your own.
- Just b/c I'm showing from-scratch; you can still dupe your pages. (I'll show duping pages)

### Demo
- Download from GitHub
- Install Timber from WP Admin
- White screen!
- build PHP file (show starter theme)
- Paste into twig from single.html
- foo/bar
- Where is the $data?
- Build H1 and such
- title
- SublimeText Twig thingy
- comment form

### Single
- comments! (object oriented!)
- loop through comments

### Loop
- posts
- index.twig
- another loop
- get_preview
- get_preview(100)
- tease.twig


### Index
- don't want to re-do this!
- extract base
- block content
- No content? no problem.

### Back to Single
- Housekeeping!
- date formatting
- comments? no comments?

### Custom Post type
- event_date (output format) = yy-mm-dd
- alternate for single.twig
- single-event.twig
- add meta
- PHP date format
- Location
- New post w/ no location
- conditionals

### Member
- create msoft, upstatement
- home.php, home.twig

### Sidebar
- add to 