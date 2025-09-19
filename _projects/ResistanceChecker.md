---
layout: project
title: Resist
category: Hardware
tags: ['in-progress', 'open source']
image: /assets/images/batscram_pic.jpg
---

# What is Resist
Do you hate having to figure out the resistance of a resistor by using a multimeter or calculating it with a color chart?  

Resist makes it simple. With just one photo of a resistor, you can instantly find out its resistance value. Do not want to use the camera? You can also upload an image from your device.

Resist is a clean web app that detects resistor color bands from a photo and computes the resistance value. It is built with Flask, OpenCV, and a modern HTML, CSS, and JavaScript interface.

 Displays the formatted value (Ω, kΩ, MΩ, GΩ) along with the detected bands  
Two modes:  
  - **Image Mode**: Upload or capture a resistor photo and press Analyze  
  - **Manual Mode**: Select band colors and multiplier to calculate resistance without an image  
Responsive UI for both mobile and desktop   

## Notes and Tips
- Good lighting and focus improve accuracy of band detection.  
- Color thresholds for detection are defined in `resit.py` in `Colour_Range`. You can adjust these for your camera and lighting.  
- Supported image formats: `.jpg`, `.jpeg`, `.png`, `.webp`. 

Check it out [here!](https://github.com/Praneel7015/resist)

## Contribution
Want to contribute? Create a [Pull request](https://github.com/Praneel7015/resist/pulls). 
Here are some of the ways in which you can contribute:
- Create a better UI.
- Create a AppImage of this application and release it. 
- Create a .exe for the application
- Create a browser extension for the application

## Contact
Want to request a feature or report a issue personally? Feel free to contact [Mukti on telegram.](https://t.me/+JYx6akEWSik2Yjc1)

Thanks For Reading!
