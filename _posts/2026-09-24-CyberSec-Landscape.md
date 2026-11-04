---
layout: post
title: "CyberSec: Exploring the Landscape, Tools and Hardware Exploits"
date: 2026-09-24
category: [event report, cyber security]
tags: [event_doc, cyber security, hardware, tools]
image: /assets/images/cybersec_talk_stage.jpg
author: San, Praneel
comments: true
---

## welcome

On 24th September 2026, Mukti conducted a session on the cybersecurity landscape, essential tools, and hardware exploitation. Here is an overview of what was covered during the event.

![Mukti CyberSec Session](/assets/images/cyber_event_stage.jpg)

## what to expect

- What do Cyber-Security professionals actually do?
- Importance of Linux in Cyber-Security
- What is "the chain of topics" or "the art of exploring"?
- Platforms to learn and explore from
- Black box learning
- Cyber tools
- Industry accepted certificates in Cyber-Security
- Demonstration of Strom-Breaker and Pico Ducky (USB dead-drop)
- Project Mania

## what do cyber-security professionals actually do?

The industry jobs:

![Ethically encouraged cybersecurity career tracks](/assets/images/cyber_job_roles.png)

A few key areas:

- **Application Security & DevSecOps:** Securing web apps and build pipelines
- **Network Security & Firewalls/IDS/IPS:** Traffic monitoring and network boundaries
- **Endpoint & Mobile Security:** Securing workstations, laptops, and mobile devices
- **Cloud Security & IAM:** Identity and access management in cloud environments
- **Cyber Forensics & Incident Response:** Breach analysis, log auditing, and recovery
- **Governance, Risk and Compliance (GRC):** Security auditing and regulatory compliance
- **IoT & OT/IIoT Security:** Securing hardware, sensors, and operational infrastructure
- **Cryptanalysis & Data Loss Prevention (DLP):** Protecting sensitive records and keys

*The above mentioned are ethically encouraged jobs for Cyber-Security professionals.*

## linux in cyber-security

- **Community Support:** Massive global community maintaining open-source tools and documentation.
- **Open-Source:** Full control and visibility into system internals and networking.
- **Stable and Patch Management:** Quick patch deployment and system updates.
- **Dedicated Tools and OS:** Specialized operating systems like Kali Linux with built-in security toolkits.

## chain of topics or art of exploring

One common question when getting started is *"where do I start?"*. The best approach is to start building directly.

When exploring through projects, one topic naturally sparks curiosity into the next:

- Socket programming leads to inspecting network packets
- Packet inspection leads to discovering encryption like TLS
- TLS leads to asymmetric keys and hashing
- Hashing leads to building practical tools like a password manager

![Chain of topics](/assets/images/chain_of_topics.png)

Building projects and following this "chain of topics" expands your intuition much faster than just passively watching tutorials.

## websites to learn from

- [MIT course: missing sem](https://missing.csail.mit.edu/): The missing semester of your CS education (CLI, tools, shell scripting)
- [Cryptographic programming: Cryptopals](https://cryptopals.com/): Practical challenges on cryptography and broken ciphers
- [Learning Platform: TryHackMe](https://tryhackme.com/): Guided hands-on rooms and labs
- [OG CTF Platform: Pico CTF](https://picoctf.org/): Beginner-friendly Capture-The-Flag challenges
- [Advanced CTF: Microcorruption](https://microcorruption.com/): Embedded security and assembly language debugging

## black box learning and cyber tools

Black box learning means using a tool or library first to see results without getting blocked trying to learn every internal detail upfront.

A few cyber tools demonstrated:

- **Username lookup:** [maigret](https://github.com/soxoj/maigret) - Search usernames across social platforms
- **Create Phishing websites:** [zphisher](https://github.com/htr-tech/zphisher) - Phishing simulation tool for awareness
- **Spy tool:** [Strom-Breaker](https://github.com/ultrasecurity/Storm-Breaker) - Permission and social engineering testing framework
- **Check for leaks:** [haveibeenpwned](https://haveibeenpwned.com/) - Check if personal credentials were leaked online

## demonstration: strom-breaker + zrok + pico ducky

We demonstrated how physical hardware and remote tunneling work together:

- **Hosting with zrok:** Used [zrok](https://zrok.io) to host Strom-Breaker locally and tunnel it publicly without router port-forwarding.
- **Pico Ducky payload deployer:** Converted a Raspberry Pi Pico into a [Pico Ducky](https://github.com/dbisu/pico-ducky). When plugged into a machine, it is recognized as a trusted USB keyboard (HID), executes keystroke payloads, and triggers the link via the zrok tunnel in seconds.

## industry accepted certificates in cyber-security

- [Isc2's SSCP](https://www.isc2.org/certifications/sscp)
- [AZ500 by microsoft](https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/)
- [CEH by EC-council](https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/)
- [CompTIA](https://www.comptia.org/) (Security+ / Network+)

## project mania

Lets get our hands Dirty!

- Please hack the link: [satark_4 CTF](https://chrompycoder.github.io/satark_4/)

---

### credits

San, Praneel, Mukti Core
