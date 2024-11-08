# README

This will be updated as I go

You can set up your own Canvas lms server by following this guide https://github.com/instructure/canvas-lms/wiki/Quick-Start if you want to play along at home. (This is literally the guide I always referenced when I needed to do a fresh install of Canvas while working for Instructure.) I can verify the manual install works with Apple silicon.

---

I lost a lot of work and my libraries when I left Instructure due to having to transfer my repos to them. It's fair enough, I wrote them to use for their testing. I'll have to make new ones before much work will progress here. 

There are a variety of data gen tools used within Instructure, it's like a QA flex to have your own datagen tool, but I believe all are cli and I still think this project will be useful to those outside Instructure. I will be using public api documentation found at https://canvas.instructure.com/doc/api/ and will not use any of my insider knowledge, which, tbf, is mostly available in the open source repo available here https://github.com/instructure/canvas-lms if you want to dig.

Canvas plugins are integrated via the LTI (Learning Tools Operability) standard. I don't know if I'll be needing this (I'll probably keep this data generator a standalone tool). https://www.1edtech.org/standards/lti

---

Useful development tools for this project if available to you:
- rbenv - manage multiple ruby environments
- rbenv gemsets - keep ruby project libraries distinct from others using the same ruby version (avoid conflicts caused by having multiple versions of the same library)
- nvm - manage multiple nodejs environments
- postman - api testing
- vscode - ide. Atom was my favorite but github killed it a while ago. Sublime seems similar, but I am unemployed and can't afford to test it out and see if I like it. vscode is good though. You'll find what you need and be able to do what you want with it.
