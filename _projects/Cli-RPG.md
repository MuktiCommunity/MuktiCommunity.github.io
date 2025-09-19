---
layout: project
title: Java CLI-RPG
category: Java
tags: ['CLI','RPG','Java','open source']
image: /assets/images/batscram_pic.jpg
---
# Mahabharata CLI RPG
Check it out [here](https://github.com/Praneel7015/simple-java-cli-rpg)

A lightweight, single-file Java console RPG inspired by the epic Mahabharata. You travel abstract zones, battle spirits and shades of past warriors, gain power, and ultimately confront the Vengeful Spirit of Duryodhana.

## Why I Made This
I wanted a small, contained project where I could actively use my Java knowledge in a fun way instead of only reading or practicing isolated snippets. This game let me:

- Practice basic Java syntax and control flow in a real loop-driven program.
- Apply abstraction with a Player base class and concrete hero subclasses.
- Use inheritance / polymorphism for enemies, bosses, and the final boss.
- Experiment with randomness, scaling, and simple balance adjustments.
- Work with serialization (saving/loading state) and file I/O logging.
- Turn simple mechanics (attacks, events, progression) into something playable.

So I built a lightweight text RPG—simple enough to finish, but big enough to reinforce core Java concepts while keeping it fun.

## Features
- Three playable heroes with distinct stat profiles and growth rates:
  - Arjuna: High dexterity, crit-focused, fast leveling.
  - Bhima: Durable powerhouse with strong single-target hits.
  - Yudhishthira: Tactical, wisdom-focused, fastest leveling & supportive scaling.
- Progressive zones with evolving descriptions and enemy pools.
- Random encounters: battles, item finds, peaceful rests, minor mixed (trap/boon) events.
- Mid-game dynamic mini-bosses and a final boss triggered at level 7.
- Permanent stat find items (HP, Strength, Dexterity, Wisdom) plus temporary crit buffs.
- Temporary critical bonuses that reset after each combat for clearer pacing.
- Scaled enemy generation with smooth difficulty curve.
- Save/Load system (savegame.dat) + session log (mahabharata_log.txt).

## Gameplay Loop
1. Choose your hero.
2. Move across abstract map coordinates (N/S/E/W).
3. Random events trigger after each move:
   - Battle (common)
   - Item discovery (boosts or heals)
   - Minor event (trap/heal/temporary buff)
   - Peaceful event (rest, blessing, or lore XP)
4. Gain XP, level up, and improve stats until you reach Level 7 to trigger the final confrontation.
5. Defeat the final boss to win (the save file is deleted on victory or death).

## Battle Commands
During combat you choose:
1. Light Attack: Single target, accurate.
2. Heavy Attack: Area-of-effect, lower accuracy per target.
3. Heal: Scales with wisdom & level.
4. Escape: 50% + Dexterity chance (disabled vs bosses).

Temporary crit bonuses from events only last for the current/next battle and are auto-cleared afterward.

## Difficulty & Progression
- XP curve now ramps smoothly: quicker early levels, steadier mid-game, modest late growth.
- Enemy stats scale with your level and zone multiplier with light randomness for variation.
- Permanent stat items provide incremental power so runs feel distinct.

## Saving & Loading
The game auto-saves only when you choose option 5 (Save and Quit). Files created:
- savegame.dat – serialized player & world state
- mahabharata_log.txt – chronological log of your journey
Delete `savegame.dat` manually if you want to force a new run.

Check it out [here](https://github.com/Praneel7015/simple-java-cli-rpg)

## Contribution
Want to contribute? Create a [Pull request](https://github.com/Praneel7015/simple-java-cli-rpg/pulls). 
Here are some of the ways in which you can contribute:
- Create a better UI.
- Create a AppImage of this application and release it. 
- Create a .exe for the application
- Create a browser extension for the application

## Contact
Want to request a feature or report a issue personally? Feel free to contact [Mukti on telegram.](https://t.me/+JYx6akEWSik2Yjc1)

Thanks For Reading!
