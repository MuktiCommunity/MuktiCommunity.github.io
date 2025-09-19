---
layout: post
title: Securing Yourself Online
category: cyber security
image: https://github.com/user-attachments/assets/5d6a4bea-2ff9-4a25-9829-53ae791c4508
author: Praneel
comments: true
---

## The Problem  
These days you cannot even browse the web without seeing a dozen advertisements at any given moment which makes the experience of browsing the web really horrible.  

Whether you are just watching YouTube or exploring websites, there are fake download buttons, malicious and explicit ads everywhere. The experience has become even worse, considering that almost everywhere you go you are bound to see ads that trick you or expose you to risks.

## Wake-Up Call  
Consider this your wake-up call. It is time to start securing yourself online.

As someone who really dislikes ads, consider this your technical guide to stay safe.

### Browser Choice  
With Google’s shift to **Manifest V3** for Chrome extensions, many ad blocker extensions have reduced capabilities. The new API model (declarativeNetRequest) imposes limits on dynamic filtering, rule count, and the ability to intercept or modify requests at runtime ([source](https://www.ghostery.com/blog/manifest-v3-privacy)).  

Therefore I recommend switching away from Chrome, and using browsers that give more control and maintain strong ad-blocking support: for example [Firefox](https://www.mozilla.org/firefox/) or [Brave](https://brave.com/).

### Extensions & Tools  
- Use a powerful ad blocker like [uBlock Origin](https://ublockorigin.com/). It is open source, supports custom filter lists, and works well in browsers that allow more flexible extension APIs ([Wikipedia](https://en.wikipedia.org/wiki/UBlock_Origin)).  
- Use a link bypasser tool like [FastForward](https://fastforward.team/) to skip through annoying links or malicious redirect chains.  
- Use a userscript manager such as [Violentmonkey](https://violentmonkey.github.io/) with repositories like [Greasy Fork](https://greasyfork.org/en) to install scripts that enhance security or block specific annoyances.  

### Network-Level Defense: Hardware & DNS  
- Deploy [Pi-Hole](https://pi-hole.net/) or a similar DNS sinkhole. It acts as a network-level ad blocker: every DNS request from devices in your local network passes through it. If the domain is on a blocklist (ads / trackers / malicious), Pi-Hole returns a false or null IP (sinkhole), preventing the ad or tracker from loading ([Pi-Hole Docs](https://docs.pi-hole.net/)).  
- Pi-Hole also caches positive DNS responses, improving performance. It can optionally serve as your local DHCP server ([Pi-Hole Docs](https://docs.pi-hole.net/)).  

### Technical Extras & Best Practices  
- Enable [DNS over HTTPS (DoH)](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/) or [DNS over TLS (DoT)](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-tls/) when supported, to reduce the chances that your DNS queries are observed or tampered with.  
- Regularly update your blocklists / filter lists. Whether in your ad blocker, userscript manager, or DNS sinkhole, stale blocklists allow new ads, trackers or malicious domains through.  
- Use privacy-respecting tools and extensions; minimize permissions. Only install extensions or userscripts from trusted sources; check what permissions they request.  
- Avoid clicking on suspicious ads, fake download buttons, or links with unknown redirects. Hover and inspect links. Use link scanners if uncertain.  
- Maintain good general cybersecurity hygiene: keep your browser and OS updated; use antivirus/anti-malware; back up your data; use strong passwords or a password manager

### Bonus
I cannot stop without talking about [fmhy.net](https://fmhy.net/) A Great Place for Free Resources Which is Trusted By The Community of Millions of People and Updated on a Daily Basis.

Thanks for reading!<br>
@[Praneel](https://www.praneel.tech)
