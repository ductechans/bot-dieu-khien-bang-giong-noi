from yolobit import *
button_a.on_pressed = None
button_b.on_pressed = None
button_a.on_pressed_ab = button_b.on_pressed_ab = -1
import time
import sys
import uselect
from rover import *

def read_terminal_input():
  spoll=uselect.poll()        # Set up an input polling object.
  spoll.register(sys.stdin, uselect.POLLIN)    # Register polling object.

  input = ''
  if spoll.poll(0):
    input = sys.stdin.read(1)

    while spoll.poll(0):
      input = input + sys.stdin.read(1)

  spoll.unregister(sys.stdin)
  return input

if True:
  display.scroll('OK')
  time.sleep_ms(1000)
  display.clear()

while True:
  AI_voice = read_terminal_input()
  if AI_voice == 'A':
    rover.show_rgb_led(0, hex_to_rgb('#00ff00'))
  if AI_voice == 'B':
    rover.show_rgb_led(0, hex_to_rgb('#000000'))
  if AI_voice == '1':
    rover.forward(50, 1)
  if AI_voice == '2':
    rover.backward(50, 1)
  if AI_voice == '3':
    rover.turn_left(50, 1)
  if AI_voice == '4':
    rover.turn_right(50, 1)
  time.sleep_ms(1000)
