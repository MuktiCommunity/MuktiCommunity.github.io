---
layout: post
title: my n8n Automation Rabbit Hole
category: Automation
image: 
author: Praneel
comments: true
---
## The Rabbit Hole Of Automation and Me

Welcome to my new obsession: the n8n automation rabbit hole! I've successfully implemented my n8n AI automation workflow and am excited to share how I did it.

## The Cause
I wanted a way to automate my blog-making on [my Website](https://www.praneel.tech). Who wants to repeatedly type `git add .`, `git commit`, and `git push`? I wanted it all to be done for me! Since I wanted to type out my messages in Discend, I'm using Discord nodes. For the trigger, I'm using [n8n-nodes-discord-trigger](https://www.npmjs.com/package/n8n-nodes-discord-trigger), which has been an absolute lifesaver, saving me countless headaches. A huge shout-out to [katerlol](https://www.npmjs.com/~katerlol) – you really saved me!

Next, I integrated a standard Gemini Chat model, specifically the `gemini-flash-2.5` model. It's free for students with Gemini Pro, and obtaining an API Key from [Google AI Studio](https://aistudio.google.com) is straightforward and also free! After setting that up, I added function nodes for creating, editing, and retrieving files.

I also included a Date & Time tool to automatically get the current month, year, and date. This formats the date and title according to the prompt, passes it through the model, and then sends the final message via the Discord Send Message node.

Currently, n8n is hosted on my laptop in a Docker container with my workflow automating this entire process. I'm now looking for the best and most cost-effective way to host it online.

If you have any ideas, please let me know via [my contact page](https://www.praneel.tech/contact).

To contribute to n8n as a creator, goto https://creators.n8n.io/

Thanks for Reading!