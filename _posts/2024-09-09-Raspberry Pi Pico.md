---
layout: post
title: Raspberry Pi Pico( Introduction)
category: event_report
author: san
comments: true
---
# Raspberry Pi Pico (Introduction)	
	
	This is an introductory session on Raspberry Pi Pico.
## What is Raspberry Pi Pico( RPi Pico)
RPi Pico is a microcontroller.
### What is a microcontroller?
Microcontroller is a small device which is used to control other devices it is built into and execute specific defined task. For example, it can control LED lights, buzzers, sensors, displays, etc. when connected to it. Microcontrollers usually use less power.
### Difference between microcontroller and microprocessor 
Visually both microprocessor and microcontroller almost look identical. They are different in terms of the application in which they are used, processing power, memory, cost and power  consumption. Microcontroller tend to use less power, where the task is pre-defined. While, your microprocessors are used in devices which requires intensive processing and where the task can be `not pre-defined`. For example, in a microwave, the task is pre-defined and you only need to input the time and temperature. Therefore, a microwave uses a microcontroller to do its job.
Another important difference is their structure. A microprocessor consists only of a CPU( Central processing unit), and all the other processing elements like RAM( Random access memory), ROM( Read-Only memory), I/O ports, etc. are connected externally to it( You can see this if you open your pc). Now, whereas, all the above-mentioned component are present internally in-case of microcontrollers( this is the big chip you see in your RPi Pico).
### Difference between RPi Pico and other RPi models
Other RPi contain microprocessor and can be considered as a mini-computer than a microcontroller.
### Which is better?( Arduino vs RPi Pico)
Arduino contains a wide range of microcontrollers( no microprocessors though). And for a small scale project a RPi Pico is way better than an Arduino nano( the smallest and cheapest model Arduino offers) in terms of memory, processing power, cost and other factors.
## Design of your RPi Pico
Your RPi Pico contains RP2040 chip. Which contains 264KB worth of memory, which is really large when compared to other microcontrollers. And 2 Flash memories. The Microcontroller chip( RP2040) is connected to the pins on the either sides of the board. These pins are called GPIO( General purpose input output) pins, and can be used to connect other devices like sensors, LED display, etc. The bumps at the edge of the board are called cancellations and are used to solder other components( mentioned above). You also have a BOOTSEL button and a LED. And finally, you can write programs by connecting your RPi Pico to a computer using a micro USB cable.
Download the [labelled pinout diagram of the board](https://datasheets.raspberrypi.com/pico/Pico-R3-A4-Pinout.pdf).
## Doing things with your RPi Pico
You can add executable files on your RPi Pico using a micro USB cable, computer and a software called [Thonny](https://thonny.org).
### Accessing the RPi Pico as a memory device
- Connect the micro USB cable to your RPi Pico and a computer while holding the BOOTSEL button.
- This will open the RPi Pico as a storage device and will contain the `INDEX.HTM` file.
### Using micropython to write code
- RPi Pico can be used with micropython( it is the implementation of python3 in c for small, low-power consuming microcontrollers). To use this you need install a software called [Thonny](https://thonny.org). 
- Go to https://thonny.org and install thonny for your operating system.
- The following code toggles the LED present on the RPi ON/OFF at regular intervals. Copy the code and paste in Thonny.
```Python
from machine import Pin
import utime
# Define the onboard LED pin
led = Pin(25, Pin.OUT)
# Loop to blink the LED
while True:
    led.toggle() #Turns the LED on 
    utime.sleep(0.2) #Keeps the LED on for 0.2s
    led.toggle() #Turn the LED off
    utime.sleep(1) #Waits for 1s before starting again
```
- Next go to tools>>options>>interpreter
- Select `MicroPython (Raspberry Pi Pico)` from the dropdown menu.
- Click on `Install or update MicroPython` to install the UF2 onto your RPi Pico( more about it later).
- Now for Linux devices the software automatically detects the variant and version. But, for Windows devices you
- need to select them manually. 
- < For Windows devices only>
  Target volume model  - `RPI-RP2`
  Variant - `Raspberry Pi <dot> Pico/ Pico H`
  Version - `Auto-detected`
- Now save the file with the filename as `main.py`. RPi will run only the file named `main.py`.
- Eject the device and disconnect the USB cable. Reconnect the USB cable **without** pressing the BOOTSEL button. The LED should turn ON/OFF at regular intervals.
For any doubts, bugs or errors, contact Mukti Core from our [telegram group](https://t.me/+wFGdHiypdQhkZWU9) or drop a text on the _Tech-help_ section on our [telegram group](https://t.me/+wFGdHiypdQhkZWU9).
### Why micropython?
MicroPython is an implementation of python3 using C for low-level Chip-specific hardware like microcontrollers. Since microcontrollers are small and have less computing power, they can only run C/CPP/bash kind of files. So directly running python3 on RPi Pico is extremely inefficient. Therefore, micropython helps us in tackling this problem, as python3 is a very easy language to learn with simple syntax.
Check out the official [micropython documentation](https://www.raspberrypi.com/documentation/microcontrollers/micropython.html#what-is-micropython).
### What exactly does the BOOTSEL button do?
<Credits:- Claude 1.2 Instant AI by Anthropic>
The bootsel button on the Raspberry Pi Pico has a simple but important function - it allows you to choose which firmware/program will run when the board powers on or resets.
Here's a breakdown in simple terms:
- The Pico has two separate flash memory banks that can each store a different program/firmware.
- One bank is labeled 'A' and the other 'B'. Only one will run at a time.
- When you press the bootsel button and then reset/power cycle the Pico, it will toggle which bank runs next.
- Press and hold bootsel, reset, it chooses bank A. Reset again without button, it runs bank B.
- This allows you to easily switch between two different programs on the Pico.
- For example, you could have the MicroPython firmware in bank A and your own custom C/C++ code in bank B.
- Press bootsel to try your code, or press it to go back to MicroPython if your code doesn't work.
So in simple terms, the bootsel button just lets you pick which of the two flash banks (and its contents) will run when you next power on or reset the Pico board. It's a quick way to switch between programs without needing a computer.
### What is a UF2 file?
UF2 stands for "MicroPython Firmware Update Format". It was created by MicroPython for easy  firmware updates for boards without a native bootloader. UF2 files contain both the firmware image and a small bootloader program. Always, the bootloader runs first then the firmware. Each memory bank of RPi Pico can hold seperate UF2 files. It's small, effective and open source.
#### Another method to add the UF2 file( Not recommended)
While adding your first micropython file and running it, we did not explicitly download and used any UF2 file because Thonny did it for us. But there is another way of doing it, which is to download the official UF2 file and pasting it in the RPi Pico while accessing it as a memory device.
`Note:- The following steps are applicable for all operating systems. For macos users, make sure you have macOS Ventura version 13.1 or above.`
To do that follow the follow the following steps:
- Download the UF2 file for Raspberry Pi Pico [here](https://micropython.org/download/rp2-pico/rp2-pico-latest.uf2).
- Press the BOOTSEL button, to open RPi Pico as a memory device.
- Drag and drop the UF2 file in it.
## Project Morse
We will be making a project to convert the input alphabetical string to morse code and use the LED to convey the message to us( in morse code).
You can write the code for that your self or copy the following code( credits:- ChatGPT)
```python
import machine
import utime

# Define Morse code dictionary
morse_code = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', '0': '-----'
}

# LED pin
led_pin = machine.Pin(25, machine.Pin.OUT)

def morse_code_translator(text):
    morse = ""
    for char in text.upper():
        if char == " ":
            morse += " "
        elif char in morse_code:
            morse += morse_code[char] + " "
    return morse

def blink_morse_code(morse_code):
    for symbol in morse_code:
        if symbol == '.':
            led_pin.on()
            utime.sleep(0.2)
            led_pin.off()
            utime.sleep(0.2)
        elif symbol == '-':
            led_pin.on()
            utime.sleep(0.6)
            led_pin.off()
            utime.sleep(0.2)
        elif symbol == ' ':
            utime.sleep(0.4)

def main():
    while True:
        user_input = input("Enter text to convert to Morse code (press Enter to exit): ")
        if user_input == "":
            print("Exiting...")
            break
        morse = morse_code_translator(user_input)
        print("Morse Code:", morse)
        blink_morse_code(morse)

main()
```
Use the same steps as before to add this `main.py` file to your RPi Pico.
This code will ask you for a input and converts the string to morse code and displays it by switching the LED on/off.
For any doubts, bugs or errors, contact Mukti Core from our [telegram group](https://t.me/+wFGdHiypdQhkZWU9) or drop a text on the _Tech-help_ section on our [telegram group](https://t.me/+wFGdHiypdQhkZWU9).

### Credits: @san, Mukti Core

[Edit this page](https://github.com/ChrompyCoder/ChrompyCoder.github.io/blob/main/mukti/tantrayantra.html) 
